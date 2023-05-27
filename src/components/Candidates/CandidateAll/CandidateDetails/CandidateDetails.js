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
    const [isEditing, setIsEditing] = useState(false);
    console.log(candidate);

    return (
        <>
            <div className='main-content' >
                <div className='candidates-detail-container'>
                    <div className='your-details'>
                        <CandidateInfoCard 
                            candidate={candidate}
                        />
                    </div>
                    <div className='candidate-details-left'>
                        {candidate.industry === 'Driving' ?
                            <SubNavDriving />
                            :
                            <SubNavIndustrial />
                        }
                    </div>
                    <div className='candidate-details-right'>
                        <Routes>
                            <Route
                                path='primary-questions'
                                element={
                                    !isEditing ?
                                        <PrimaryQuestions 
                                            candidate={candidate}                                       
                                        />
                                        :
                                        <PrimaryQuestionsForm />
                                }
                            />

                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}