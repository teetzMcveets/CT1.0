import React from 'react';
import './Candidates.css';
import CandidateList from './CandidateAll/CandidateList/CandidateList';
import CandidateSearch from './CandidateAll/CandidateSearch/CandidateSearch';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatus,setSearchCriteria, clearSearchCriteria, selectFilteredCandidates } from '../../features/candidates/candidateSlice';


export default function Candidates () {
    // const candidates = useSelector((state) => state.candidate.byId);
    const candidates = useSelector(selectFilteredCandidates);
    const searchCriteria = useSelector((state) => state.candidate.searchCriteria);
    const dispatch = useDispatch();

    const handleArchiveClick = (id, e) => {
        e.preventDefault();
        dispatch(toggleStatus({ id }));
    }

    const handleSearchChange = (newSearchCriteria) => {
        dispatch(setSearchCriteria(newSearchCriteria));
    }

    const handleClearSearch = () => {
        dispatch(clearSearchCriteria());
    }


    return (
        <div className='main-content'>

            {/* CREATE BUTTON */}
            <div className='candidates-left-container'>
                <CandidateSearch
                    searchCriteria={searchCriteria}
                    handleSearchChange={handleSearchChange}
                    handleClearSearch={handleClearSearch}
                />
            </div>
            <div className='candidates-right-container'>
                <CandidateList 
                    candidates={candidates}
                    handleArchiveClick={handleArchiveClick}
                />
            </div>

        </div>
    )
}