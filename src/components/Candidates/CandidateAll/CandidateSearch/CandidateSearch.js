import React from 'react';
import './CandidateSearch.css';

export default function CandidateSearch () {
    return (
        <>
            <div className='candidate-search-container'>

                <div className='search-criteria-container'>
                    <label className='candidate-label'>
                        Search Name
                    </label>
                    <input 
                        type='text'
                        className='candidate-input'
                        placeHolder='Search...'
                    />
                </div>

                <div className='search-criteria-container'>
                    <label className='candidate-label'>
                        Search Number
                    </label>
                    <input 
                        type='text'
                        className='candidate-input'
                        placeHolder='Search...'
                    />
                </div>

                <div className='search-criteria-container'>
                    
                    <label className='candidate-label'>Industry</label>
                    
                    <div className='rad-answer-container'>
                        
                        <div className='rad-single-answer'>
                            <input 
                                type='radio'
                                id='all'
                                name='industrySearch'
                            />
                            <label
                                htmlFor='all'
                                className='rad-label'
                            >
                                All
                            </label>
                        </div> 

                        <div className='rad-single-answer'>
                            <input 
                                type='radio'
                                id='driving'
                                name='industrySearch'
                            />
                            <label 
                                htmlFor='driving'
                                className='rad-label'
                            >
                                Driving
                            </label>
                        </div> 

                        <div className='rad-single-answer'>
                            <input 
                                type='radio'
                                id='industrial'
                                name='industrySearch'
                            />
                            <label
                                htmlFor='industrial'
                                className='rad-label'
                            >
                                Industrial
                            </label>
                        </div> 

                    </div>
                    
                </div>

                <div className='search-criteria-container'>

                    <label className='candidate-label'>Status</label>
                    
                    <div className='rad-answer-container'>

                        <div className='rad-single-answer'>
                            <input 
                                type='radio'
                                id='active'
                                name='statusSearch'
                            />
                            <label
                                htmlFor='active'
                                className='rad-label'
                            >
                                Active
                            </label>
                        </div> 

                        <div className='rad-single-answer'>
                            <input 
                                type='radio'
                                id='allStatus'
                                name='statusSearch'
                            />
                            <label 
                                htmlFor='allStatus'
                                className='rad-label'
                            >
                                All
                            </label>
                        </div> 

                        <div className='rad-single-answer'>
                            <input 
                                type='radio'
                                id='archived'
                                name='statusSearch'
                            />
                            <label
                                htmlFor='archived'
                                className='rad-label'
                            >
                                Archived
                            </label>
                        </div> 

                    </div>

                </div>

                    <div className='search-criteria-container'>
                        <div className='candidate-search-container'>
                            <button
                                className='button-one'
                            >
                                Clear Search
                            </button>
                        </div>
                    </div>
            </div>

        </>
    )
}