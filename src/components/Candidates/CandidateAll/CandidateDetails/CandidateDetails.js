import React, { useState, useRef, useEffect } from 'react';
import './CandidateDetails.css';
import { Route, Routes, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateCandidate } from '../../../../features/candidates/candidateSlice';
import SubNavDriving from '../../../../shared/Navigation/SubNav/Driving/SubNavDriving'
import SubNavIndustrial from '../../../../shared/Navigation/SubNav/Industrial/SubNavIndustrial';
import CandidateInfoCard from './CandidateInfoCard/CandidateInfoCard';
import PrimaryQuestions from './CandidatePages/PrimaryQuestions/PrimaryQuestions';
import PrimaryQuestionsForm from './CandidatePages/PrimaryQuestions/PrimaryQuestionsForm';
import PreferenceQuestions from './CandidatePages/PreferenceQuestions/PreferenceQuestions';
import PreferenceQuestionsForm from './CandidatePages/PreferenceQuestions/PreferenceQuestionsForm';
import MedicalQuestions from './CandidatePages/MedicalQuestions/MedicalQuestions';
import MedicalQuestionsForm from './CandidatePages/MedicalQuestions/MedicalQuestionsForm';


export default function CandidateDetails() {
    const { id } = useParams();
    const candidate = useSelector((state) => state.candidate.byId[id]);
    const location = useLocation();
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const changesMade = useRef(false);
    const navigate = useNavigate();

    const [updatedPrimaryQuestions, setUpdatedPrimaryQuestions] = useState({
        ...candidate,
    })
    const [updatedPreferenceQuestions, setUpdatedPreferenceQuestions] = useState({
        ...candidate
    })
    const [updatedMedicalQuestions, setUpdatedMedicalQuestions] = useState({
        ...candidate,
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
        } else if (pathName.endsWith('medical-questions')) {
            setUpdatedMedicalQuestions(prevState => ({
                ...prevState,
                [field]: value
            }))
        }

        changesMade.current = true;
    }

    const handleAccessChange = (e, accessValue) => {    
        if (e.target.checked) {
            if (!candidate.access.includes(accessValue)) {
                setUpdatedPrimaryQuestions(prevState => ({
                    ...prevState,
                    access: [ ...prevState.access, accessValue ]
                }));
            }
        } else {
            setUpdatedPrimaryQuestions(prevState => ({
                ...prevState, 
                access: prevState.access.filter(value => value !== accessValue)
            }));
        }
    };

    const handleContactPrefChange = (e, contactPrefValue) => {
        if (e.target.checked) {
            if (!candidate.contactPref.includes(contactPrefValue)) {
                setUpdatedPrimaryQuestions(prevState => ({
                    ...prevState,
                    contactPref: [ ...prevState.contactPref, contactPrefValue ]
                }));
            }
        } else {
            setUpdatedPrimaryQuestions(prevState => ({
                ...prevState, 
                contactPref: prevState.contactPref.filter(value => value !== contactPrefValue)
            }));
        }
    };

    const handlePPEOwnedChange = (e, ppeOwnedValue) => {
        if (e.target.checked) {
            if (!candidate.ppeOwned.includes(ppeOwnedValue)) {
                setUpdatedPreferenceQuestions(prevState => ({
                    ...prevState,
                    ppeOwned: [ ...prevState.ppeOwned, ppeOwnedValue ]
                }));
            }           
        } else {
            setUpdatedPreferenceQuestions(prevState => ({
                ...prevState,
                ppeOwned: prevState.ppeOwned.filter(value => value !== ppeOwnedValue)
            }));
        }
    };

    const handleWeekDaysChange = (e, weekDaysValue) => {
        if (e.target.checked) {
            if(!candidate.weekDays.includes(weekDaysValue)) {
                setUpdatedPreferenceQuestions(prevState => ({
                    ...prevState, 
                    weekDays: [ ...prevState.weekDays, weekDaysValue ]
                }));
            }
        } else {
            setUpdatedPreferenceQuestions(prevState => ({
                ...prevState,
                weekDays: prevState.weekDays.filter(value => value !== weekDaysValue)
            }));
        }
    };

    const handleShiftsChange = (e, shiftsValue) => {
        if (e.target.checked) {
            if(!candidate.shifts.includes(shiftsValue)) {
                setUpdatedPreferenceQuestions(prevState => ({
                    ...prevState,
                    shifts: [ ...prevState.shifts, shiftsValue]
                }));
            }
        } else {
            setUpdatedPreferenceQuestions(prevState => ({
                ...prevState,
                shifts: prevState.shifts.filter(value => value !== shiftsValue)
            })) 
        }
    }

    const handleSave = () => {
        const pathName = location.pathname;
        let updatedQuestions;

        if (pathName.endsWith('primary-questions')) {
            updatedQuestions = updatedPrimaryQuestions
        } else if (pathName.endsWith('preference-questions')) {
            updatedQuestions = updatedPreferenceQuestions
        } else if (pathName.endsWith('medical-questions')) {
            updatedQuestions = updatedMedicalQuestions
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

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(`/candidates/${candidate.id}/primary-questions`);
        }, 10);
    
        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);  
        

    return (
        <>
            <div className='main-content'>
                <div className='candidates-detail-container'>
                    <div className='candidates-detail-top-container'>
                        <CandidateInfoCard 
                            candidate={candidate}
                        />
                    </div>

                    <div className='candidates-details-bottom-container'>
                        <div className='candidate-details-left-container'>
                            <div className='candidate-details-infoCard-subNav'>
                                {candidate.industry === 'Driving' ?
                                    <SubNavDriving />
                                    :
                                    <SubNavIndustrial />
                                }
                            </div>
                            
                        </div>
                        
                        <div className='candidate-details-center-container'>
                            <Routes>
                                <Route
                                    path='primary-questions'
                                    element={
                                        !isEditing ?
                                            <PrimaryQuestions 
                                                candidate={candidate}
                                                edit={toggleEdit}                                  
                                            />
                                            :
                                            <PrimaryQuestionsForm 
                                                candidate={candidate}
                                                updatedPrimaryQuestions={updatedPrimaryQuestions}
                                                handleOnChange={handleUpdatedForm}
                                                isEditing={isEditing}
                                                edit={toggleEdit}
                                                save={handleSave}
                                                otherNationality={otherNationality}
                                                handleAccessChange={handleAccessChange}
                                                handleContactPrefChange={handleContactPrefChange}
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
                                                handlePPEOwnedChange={handlePPEOwnedChange}
                                                handleWeekDaysChange={handleWeekDaysChange}
                                                handleShiftsChange={handleShiftsChange}
                                            />

                                    } 
                                />
                                <Route 
                                    path='medical-questions'
                                    element={
                                        !isEditing ?
                                            <MedicalQuestions
                                                candidate={candidate}
                                                edit={toggleEdit}
                                                isEditing={isEditing}
                                            />
                                            :
                                            <MedicalQuestionsForm
                                                candidate={candidate}
                                                updatedMedicalQuestions={updatedMedicalQuestions}
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
            </div>
        </>
    )
}