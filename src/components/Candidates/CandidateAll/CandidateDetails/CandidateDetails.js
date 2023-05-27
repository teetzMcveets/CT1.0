import React, { useState } from 'react';
import './CandidateDetails.css';
import { Route, Routes, useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SubNavDriving from '../../../../shared/Navigation/SubNav/Driving/SubNavDriving'
import SubNavIndustrial from '../../../../shared/Navigation/SubNav/Industrial/SubNavIndustrial';
import CandidateInfoCard from './CandidateInfoCard/CandidateInfoCard';
import PrimaryQuestions from './CandidatePages/PrimaryQuestions/PrimaryQuestions';
import PrimaryQuestionsForm from './CandidatePages/PrimaryQuestions/PrimaryQuestionsForm';


export default function CandidateDetails() {
    const { id } = useParams();
    const candidate = useSelector((state) => state.candidate.byId[id]);
    const location = useLocation();
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);

    const [updatedPrimaryQuestions, setUpdatedPrimaryQuestions] = useState({
        ...candidate,
    })

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    }

    const handleUpdatedForm = (field, value) => {
        const pathName = location.pathname;

        if (pathName.endsWith('primary-questions')) {
            setUpdatedPrimaryQuestions(prevState => ({
                ...prevState,
                [field]: value
            }))
        }
    }

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