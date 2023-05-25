import React from 'react';
import './Candidates.css';
import CandidateList from './CandidateAll/CandidateList/CandidateList';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatus } from '../../features/candidates/candidateSlice';


export default function Candidates () {
    const candidates = useSelector((state) => state.candidate.byId);
    const dispatch = useDispatch();

    const handleArchiveClick = (id, e) => {
        e.preventDefault();
        dispatch(toggleStatus({ id }));
    }

    return (
        <div className='main-content'>
            
            {/* CREATE BUTTON */}
            <div className='create-candidate-container'>
                <button>
                    Create
                </button>
            </div>

            
            <div className='candidates-container'>
                <div className='candidates-left-container'>
                    LEFT
                </div>
                <div className='candidates-right-container'>
                    <CandidateList 
                        candidates={candidates}
                        handleArchiveClick={handleArchiveClick}
                    />
                </div>
            </div>

        </div>
    )
}