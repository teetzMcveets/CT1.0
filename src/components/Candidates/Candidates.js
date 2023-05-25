import React from 'react';
import './Candidates.css';
import CandidateList from './CandidateAll/CandidateList/CandidateList';
import { useSelector } from 'react-redux';

export default function Candidates () {
    const candidates = useSelector((state) => state.candidate.byId);

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
                    />
                </div>
            </div>

        </div>
    )
}