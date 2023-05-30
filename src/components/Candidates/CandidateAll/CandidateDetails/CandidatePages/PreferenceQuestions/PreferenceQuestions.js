import React from 'react';
import '../CandidateDetailsForm.css';

export default function PreferenceQuestions ({
    candidate,
    edit,

}) {

    return (
        <>
            <div style={{ display: 'flex'}}>
                <div>
                    <div className='edit-button-container'>
                        <div>
                            <button 
                                className='button-secondary'
                                onClick={edit}
                            >
                                <i className='fas fa-pencil-alt'></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Interview Questions
                        </div>
                    </div>

                    <div className='card-container'>
                        
                        <div className='detail-container'>
                            <div className='detail-label'>
                                Start Date
                            </div>

                            <div className='detail-answer'>
                                <div className='answer-border'>
                                    {candidate.startDate}
                                </div>
                            </div>
                        </div>

                        <div className='detail-container'>
                            <div className='detail-label'>
                                Commute type
                            </div>

                            <div className='detail-answer'>
                                <div className='answer-border'>
                                    {candidate.commuteType}
                                </div>
                            </div>
                        </div>

                        <div className='detail-container'>
                            <div className='detail-label'>
                                Travel for work
                            </div>

                            <div className='detail-answer'>
                                <div className='answer-border'>
                                    {candidate.travelForWork}
                                </div>
                            </div>
                        </div>

                        <div className='detail-container'>
                            <div className='detail-label'>
                                PPE Owned    
                            </div>

                            <div className='rad-detail-answer'>
                                <div>
                                    {['HiViz', 'Safety Boots'].map((ppeOwnedValue) => (
                                        <div className='check-detail check-detail-longer' key={ppeOwnedValue}>
                                            <div className='rad-detail-input'>
                                                <input 
                                                    type='checkbox'
                                                    checked={candidate.ppeOwned.includes(ppeOwnedValue)}
                                                    onChange={(e) => e.preventDefault()}
                                                />
                                            </div>
                                            <div className='rad-detail-label'>
                                                <label>
                                                    {ppeOwnedValue}
                                                </label>
                                            </div>
                                        </div>    
                                    ))}      
                                </div>
                            </div>
                        </div>

                        <div className='detail-container'>
                            <div className='detail-label'>
                                Minimum Pay
                            </div>

                            <div className='detail-answer'>
                                <div className='answer-border'>
                                    {candidate.minPay}
                                </div>
                            </div>
                        </div>

                        <div className='detail-container'>
                            <div className='detail-label'>
                                Smoker
                            </div>

                            <div className='detail-answer'>
                                <div className='answer-border'>
                                    {candidate.smoker}
                                </div>
                            </div>
                        </div>

                        {candidate.industry === 'Industrial' && 
                            <div className='detail-container'>
                                <div className='detail-label'>
                                    License
                                </div>

                                <div className='detail-answer'>
                                    <div className='answer-border'>
                                        {candidate.industrialLicense}
                                    </div>
                                </div>
                            </div>
                        }

                    </div>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Availability Preferences
                        </div>
                    </div>
                    
                    <div className='card-container'>

                        <div className='detail-container'>
                            <div className='detail-label'>
                                Week days   
                            </div>

                            <div className='rad-detail-answer'>
                                <div>
                                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((weekDays) => (
                                        <div className='check-detail check-detail-longer' key={weekDays}>
                                            <div className='rad-detail-input'>
                                                <input 
                                                    type='checkbox'
                                                    checked={candidate.ppeOwned.includes(weekDays)}
                                                    onChange={(e) => e.preventDefault()}
                                                />
                                            </div>
                                            <div className='rad-detail-label'>
                                                <label>
                                                    {weekDays}
                                                </label>
                                            </div>
                                        </div>    
                                    ))}      
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>


            </div>
        </>
    )
}