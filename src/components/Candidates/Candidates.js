import React from 'react';
import './Candidates.css';
import CandidateList from './CandidateAll/CandidateList/CandidateList';
import CandidateSearch from './CandidateAll/CandidateSearch/CandidateSearch';
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
            
            <div className='create-candidate-container'>
                <div className='button-placement'>
                    <button className='button-one'>
                        + Create
                    </button>
                </div>
            </div>

            <div className='candidates-container'>
                {/* CREATE BUTTON */}
                <div className='candidates-left-container'>
                    <CandidateSearch 
                    />
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