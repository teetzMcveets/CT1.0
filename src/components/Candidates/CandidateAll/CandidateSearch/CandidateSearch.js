import React, { useState } from 'react';
import './CandidateSearch.css';

export default function CandidateSearch ({
    searchCriteria,
    handleSearchChange,
    handleClearSearch,
}) {
    const { industry, status } = searchCriteria;
    const [name, setName] = useState(searchCriteria.name);
    const [number, setNumber] = useState(searchCriteria.number);

    const handleNameSearch = (e) => {
        setName(e.target.value);
        handleSearchChange({ ...searchCriteria, name: e.target.value });
    };

    const handleNumberSearch = (e) => {
        setNumber(e.target.value);
        handleSearchChange({ ...searchCriteria, number: e.target.value });
    };

    const handleIndustrySearch = (e) => {
        handleSearchChange({ ...searchCriteria, industry: e.target.value});
    }

    const handleStatusSearch = (e) => {
        handleSearchChange({ ...searchCriteria, status: e.target.value});
    }

    const handleClearSearchLocal = () => {
        handleClearSearch('');
        setName('');
        setNumber('');
    }

    return (
        <>
            <div className='candidate-search-container'>

                <div className='search-criteria-container'>
                    <label className='search-candidate-label'>
                        Search Name
                    </label>
                    <input 
                        type='text'
                        className='search-candidate-input'
                        placeholder='Search...'
                        name='name'
                        value={name}
                        onChange={handleNameSearch}
                    />
                </div>

                <div className='search-criteria-container'>
                    <label className='search-candidate-label'>
                        Search Number
                    </label>
                    <input 
                        type='tel'
                        className='search-candidate-input'
                        placeholder='Search...'
                        name='number'
                        value={number}
                        onChange={handleNumberSearch}
                    />
                </div>

                <div className='search-criteria-container'>
                    
                    <label className='search-candidate-label'>Industry</label>

                    <div className='rad-answer-container'>
                        
                        <div className='rad-single-answer'>
                            <input 
                                type='radio'
                                id='all'
                                name='industry'
                                value='All'
                                checked={industry === 'All'}
                                onChange={handleIndustrySearch}
                            />
                            <label
                                htmlFor='all'
                                className='search-rad-label'
                            >
                                All
                            </label>
                        </div> 

                        <div className='rad-single-answer'>
                            <input 
                                type='radio'
                                id='driving'
                                name='industry'
                                value='Driving'
                                checked={industry === 'Driving'}
                                onChange={handleIndustrySearch}
                            />
                            <label 
                                htmlFor='driving'
                                className='search-rad-label'
                            >
                                Driving
                            </label>
                        </div> 

                        <div className='rad-single-answer'>
                            <input 
                                type='radio'
                                id='industrial'
                                name='industry'
                                value='Industrial'
                                checked={industry === 'Industrial'}
                                onChange={handleIndustrySearch}
                            />
                            <label
                                htmlFor='industrial'
                                className='search-rad-label'
                            >
                                Industrial
                            </label>
                        </div> 

                    </div>
                    
                </div>

                <div className='search-criteria-container'>

                    <label className='search-candidate-label'>Status</label>
                    
                    <div className='rad-answer-container'>

                        <div className='rad-single-answer'>
                            <input 
                                type='radio'
                                id='active'
                                name='status'
                                value='All'
                                checked={status === 'All'}
                                onChange={handleStatusSearch}
                            />
                            <label
                                htmlFor='active'
                                className='search-rad-label'
                            >
                                All
                            </label>
                        </div> 

                        <div className='rad-single-answer'>
                            <input 
                                type='radio'
                                id='allStatus'
                                name='status'
                                value='Active'
                                checked={status === 'Active'}
                                onChange={handleStatusSearch}
                            />
                            <label 
                                htmlFor='allStatus'
                                className='search-rad-label'
                            >
                                Active
                            </label>
                        </div> 

                        <div className='rad-single-answer'>
                            <input 
                                type='radio'
                                id='archived'
                                name='status'
                                value='Archived'
                                checked={status === 'Archived'}
                                onChange={handleStatusSearch}
                            />
                            <label
                                htmlFor='archived'
                                className='search-rad-label'
                            >
                                Archived
                            </label>
                        </div> 

                    </div>

                </div>

                    <div className='search-criteria-container'>
                        <div className='candidate-search-container'>
                            <button
                                className='button-primary'
                                onClick={handleClearSearchLocal}
                            >
                                <span>
                                    Clear Search
                                </span>
                            </button>
                        </div>
                    </div>
            </div>

        </>
    )
}