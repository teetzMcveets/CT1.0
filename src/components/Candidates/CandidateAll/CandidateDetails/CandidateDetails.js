import React, { useState } from 'react';
import './CandidateDetails.css';
import { Route, Routes, useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SubNav from '../../../../shared/Navigation/SubNav/SubNav';
import PrimaryQuestions from './CandidatePages/PrimaryQuestions/PrimaryQuestions';
import PrimaryQuestionsForm from './CandidatePages/PrimaryQuestions/PrimaryQuestionsForm';


export default function CandidateDetails() {

    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <div className='main-content'>
                <SubNav />
                <div>
                    <Routes>
                        <Route
                            path='primary-questions'
                            element={
                                isEditing ?
                                    <PrimaryQuestions />
                                    :
                                    <PrimaryQuestionsForm />
                            }
                         />
                    </Routes>
                </div>
            </div>
        </>
    )
}