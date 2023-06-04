import React from 'react';
import '../CandidateDetailsForm.css';

export default function PreferenceQuestions ({
    candidate,
    edit,

}) {

    return (
        <>
            <div className='candidate-page-left-container'>
                <div className='candidate-page-button-container'>
                    <button 
                        className='button-secondary'
                        onClick={edit}
                    >
                        <i className='fas fa-pencil-alt'></i>
                    </button>
                </div>
            </div>

            <div className='candidate-page-right-candidate'>
                <div className='candidate-page-full-page'>

                    {/* INTERVIEW QUESTIONS CARD */}
                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Interview Questions
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Start Date
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.startDate}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Commute type
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.commuteType}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Travel for work
                            </div>

                            <div className='candidate-page-detail-answer'>

                                <div className='candidate-page-rad-answer-container'>
                                    <div className='candidate-page-rad-single-answer'>
                                        <input
                                            type='radio'
                                            name='travelForWork'
                                            value='0-1 miles'
                                            checked={candidate.travelForWork === '0-1 miles'}
                                        />
                                        <label className='candidate-page-rad-label'>
                                            0-1 miles
                                        </label>
                                    </div>
                                

                                    <div className='candidate-page-rad-single-answer'>
                                        <input
                                            type='radio'
                                            name='travelForWork'
                                            value='1-2 miles'
                                            checked={candidate.travelForWork === '1-2 miles'}
                                        />
                                        <label className='candidate-page-rad-label'>
                                            1-2 miles
                                        </label>
                                    </div>

                                    <div className='candidate-page-rad-single-answer'>
                                        <input
                                            type='radio'
                                            name='travelForWork'
                                            value='2-4 miles'
                                            checked={candidate.travelForWork === '2-4 miles'}
                                        />
                                        <label className='candidate-page-rad-label'>
                                            2-4 miles
                                        </label>
                                    </div>

                                    <div className='candidate-page-rad-single-answer'>
                                        <input
                                            type='radio'
                                            name='travelForWork'
                                            value='4-6 miles'
                                            checked={candidate.travelForWork === '4-6 miles'}
                                        />
                                        <label className='candidate-page-rad-label'>
                                            4-6 miles
                                        </label>
                                    </div>

                                    <div className='candidate-page-rad-single-answer'>
                                        <input
                                            type='radio'
                                            name='travelForWork'
                                            value='6-10 miles'
                                            checked={candidate.travelForWork === '6-10 miles'}
                                        />
                                        <label className='candidate-page-rad-label'>
                                            6-10 miles
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer'>
                                        <input
                                            type='radio'
                                            name='travelForWork'
                                            value='10+ miles'
                                            checked={candidate.travelForWork === '10+ miles'}
                                        />
                                        <label className='candidate-page-rad-label'>
                                            10+ miles
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                PPE Owned    
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-checkbox-container'>
                                    {['HiViz', 'Safety Boots'].map((ppeOwnedValue) => (
                                        <div className='candidate-page-checkbox-single-answer' key={ppeOwnedValue}>
                                            <input 
                                                type='checkbox'
                                                checked={candidate.ppeOwned.includes(ppeOwnedValue)}
                                                onChange={(e) => e.preventDefault()}
                                            />
                                            <label className='candidate-page-checkbox-label'>
                                                {ppeOwnedValue}
                                            </label>
                                        </div>    
                                    ))}      
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Minimum Pay
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.minPay}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Smoker
                            </div>

                            <div className='candidate-page-detail-answer'>

                                <div className='candidate-page-rad-answer-container'>
                                    <div className='candidate-page-rad-single-answer'>
                                        <input 
                                            type='radio'
                                            name='smoker'
                                            id='smoker-yes'
                                            value='Yes'
                                            checked={candidate.smoker === 'Yes'}
                                        />
                                        <label className='candidate-page-rad-label'>
                                            Yes
                                        </label>
                                    </div> 
                                    <div className='candidate-page-rad-single-answer'>
                                        <input 
                                            type='radio'
                                            name='smoker'
                                            id='smoker-no'
                                            value='No'
                                            checked={candidate.smoker === 'No'}
                                        />
                                        <label className='candidate-page-rad-label'>
                                            No
                                        </label>
                                    </div>           
                                </div>            
                            </div>
                        </div>

                        {candidate.industry === 'Industrial' && 
                            <div className='candidate-page-detail-container'>
                                <div className='candidate-page-detail-label'>
                                    License
                                </div>

                                <div className='candidate-page-detail-answer'>
                                    
                                    <div className='candidate-page-rad-answer-container'>
                                        <div className='candidate-page-rad-single-answer'>
                                            <input 
                                                type='radio'
                                                name='industrialLicense'
                                                id='industrialLicense-yes'
                                                value='Yes'
                                                checked={candidate.industrialLicense === 'Yes'}
                                            />
                                            <label className='candidate-page-rad-label'>
                                                Yes
                                            </label>
                                        </div> 
                                        <div className='candidate-page-rad-single-answer'>
                                            <input 
                                                type='radio'
                                                name='industrialLicense'
                                                id='industrialLicense-no'
                                                value='No'
                                                checked={candidate.industrialLicense === 'No'}
                                            />
                                            <label className='candidate-page-rad-label'>
                                                No
                                            </label>
                                        </div>           
                                    </div>  
                                </div>
                            </div>
                        }

                    </div>
                    

                    {/* AVAILABILITY PREFERENCE */}
                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Availability Preferences
                        </div>
                    </div>
                        
                    <div className='candidate-page-card-container'>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Week days   
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-checkbox-container'>
                                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((weekDaysValue) => (
                                        <div className='candidate-page-checkbox-single-answer' key={weekDaysValue}>
                                            <input 
                                                type='checkbox'
                                                checked={candidate.weekDays.includes(weekDaysValue)}
                                                onChange={(e) => e.preventDefault()}
                                            />
                                            <label className='candidate-page-checkbox-label'>
                                                {weekDaysValue}
                                            </label>
                                        </div>    
                                    ))}      
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Shifts   
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-checkbox-container'>
                                    {['Mornings', 'Afternoons', 'Nights'].map((shiftsValue) => (
                                        <div className='candidate-page-checkbox-single-answer' key={shiftsValue}>
                                            <input 
                                                type='checkbox'
                                                checked={candidate.shifts.includes(shiftsValue)}
                                                onChange={(e) => e.preventDefault()}
                                            />
                                            <label className='candidate-page-checkbox-label'>
                                                {shiftsValue}
                                            </label>
                                        </div>    
                                    ))}      
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Start window   
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.startWindow}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ADDITIONAL INFO */}

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Additional Info
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Heard of us
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.heardOfUs}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}