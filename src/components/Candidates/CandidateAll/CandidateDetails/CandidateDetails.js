import React, { useState, useRef, useEffect } from 'react';
import './CandidateDetails.css';
import { Route, Routes, useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateCandidate } from '../../../../features/candidates/candidateSlice';
import SubNavDriving from '../../../../shared/Navigation/SubNav/Driving/SubNavDriving'
import SubNavIndustrial from '../../../../shared/Navigation/SubNav/Industrial/SubNavIndustrial';
import CandidateInfoCard from './CandidateInfoCard/CandidateInfoCard';
import PrimaryQuestions from './CandidatePages/PrimaryQuestions/PrimaryQuestions';
import PrimaryQuestionsForm from './CandidatePages/PrimaryQuestions/PrimaryQuestionsForm';
import PreferenceQuestions from './CandidatePages/PreferenceQuestions/PreferenceQuestions';
import PreferenceQuestionsForm from './CandidatePages/PreferenceQuestions/PreferenceQuestionsForm';


export default function CandidateDetails() {
    const { id } = useParams();
    const candidate = useSelector((state) => state.candidate.byId[id]);
    const location = useLocation();
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const changesMade = useRef(false);

    const [updatedPrimaryQuestions, setUpdatedPrimaryQuestions] = useState({
        ...candidate,
    })
    const [updatedPreferenceQuestions, setUpdatedPreferenceQuestions] = useState({
        ...candidate
    })

    const [otherNationality, setOtherNationality] = useState(false);

    const toggleEdit = () => {
        if (isEditing && changesMade.current && !window.confirm('Unsaved changes will be lost. Continue?')) {
            return;
        }

        if (isEditing && changesMade.current) {
            setUpdatedPrimaryQuestions({
                ...candidate,
            })
            setUpdatedPreferenceQuestions({
                ...candidate,
            });
            changesMade.current = false;
        }
        setIsEditing(!isEditing);
    }

    const handleUpdatedForm = (field, value) => {
        const pathName = location.pathname;

        if (field === 'nationality' && value === 'Other') {
            setOtherNationality(true);
        }

        if (pathName.endsWith('primary-questions')) {
            setUpdatedPrimaryQuestions(prevState => ({
                ...prevState,
                [field]: value
            }))
        } else if (pathName.endsWith('preference-questions')) {
            setUpdatedPreferenceQuestions(prevState => ({
                ...prevState,
                [field]: value
            }))
        }

        changesMade.current = true;
    }

    const handleSave = () => {
        const pathName = location.pathname;
        let updatedQuestions;

        if (pathName.endsWith('primary-questions')) {
            updatedQuestions = updatedPrimaryQuestions
        } else if (pathName.endsWith('preference-questions')) {
            updatedQuestions = updatedPreferenceQuestions
        }

        if (updatedQuestions) {
            dispatch(updateCandidate(updatedQuestions));
            setIsEditing(false)
        }

        changesMade.current = false;
    }

    useEffect(() => {
        const warnUserAboutUnsavedChanges = (e) => {
            if (!isEditing || !changesMade.current) {
                return;
            }

            e.preventDefault();
            e.returnValue = '';
        }

        window.addEventListener('beforeunload', warnUserAboutUnsavedChanges);

        return () => {
            window.removeEventListener('beforeUnload', warnUserAboutUnsavedChanges);
        };
    }, [isEditing]);
    

    return (
        <>
            <div className='main-content' >
                <div className='candidates-detail-container'>
                    <div className='candidate-details-left'>
                        {candidate.industry === 'Driving' ?
                            <SubNavDriving />
                            :
                            <SubNavIndustrial />
                        }
                        <div className='your-details'>
                            <CandidateInfoCard 
                                candidate={candidate}
                            />
                        </div>
                    </div>
                    
                    <div className='candidate-details-right'>
                        <Routes>
                            <Route
                                path='primary-questions'
                                element={
                                    !isEditing ?
                                        <PrimaryQuestions 
                                            candidate={candidate}
                                            edit={toggleEdit}
                                            isEditing={isEditing}                                  
                                        />
                                        :
                                        <PrimaryQuestionsForm 
                                            candidate={candidate}
                                            updatedPrimaryQuestions={updatedPrimaryQuestions}
                                            handleOnChange={handleUpdatedForm}
                                            edit={toggleEdit}
                                            save={handleSave}
                                            otherNationality={otherNationality}
                                        />
                                }
                            />
                            <Route 
                                path='preference-questions'
                                element={
                                    !isEditing ?
                                        <PreferenceQuestions
                                            candidate={candidate}
                                            edit={toggleEdit}
                                            isEditing={isEditing}
                                        />
                                        :
                                        <PreferenceQuestionsForm
                                            candidate={candidate}
                                            updatedPreferenceQuestions={updatedPreferenceQuestions}
                                            handleOnChange={handleUpdatedForm}
                                            edit={toggleEdit}
                                            save={handleSave}
                                        />

                                } 
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}