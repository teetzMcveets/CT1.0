import React from 'react';

export default function PrimaryQuestions ({ candidate, }) {

    return (
        <>
            <div className='back-button-details-container'>
                <button className='button-secondary'>
                    <i className='fas fa-pencil-alt'></i>
                </button>
                <button className='button-secondary'>
                    <i className='fas fa-times'></i>
                </button>
            </div>

            <div className='card-detail-title'>
                <div className='card-title'>
                    About You
                </div>
            </div>

            <div className='card-container'>
                
                <div className='detail-container'>
                    <div className='detail-label'>
                        First Name
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.firstName}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Middle names
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.middleNames}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Last name
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.lastName}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Date of birth
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.dateOfBirth}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Gender
                    </div>

                    <div className='rad-detail-answer'>
                        <div>
                            <div className='rad-detail'>
                                <div className='rad-detail-input'>
                                    <input 
                                        type='radio'
                                        checked={candidate.gender === 'Male'}
                                    />
                                </div>
                                <div className='rad-detail-label'>
                                    <label>
                                        Male
                                    </label>
                                </div>
                            </div>
                            <div className='rad-detail'>
                                <div className='rad-detail-input'>
                                    <input 
                                        type='radio'
                                        checked={candidate.gender === 'Female'}
                                    />
                                </div>
                                <div>
                                    <label className='rad-detail-label'>
                                        Female
                                    </label>
                                </div>
                            </div>
                            <div className='rad-detail'>
                                <div className='rad-detail-input'>
                                    <input 
                                        type='radio'
                                        checked={candidate.gender === 'Prefer not to say'}
                                    />
                                </div>
                                <div>
                                    <label className='rad-detail-label'>
                                        Prefer not to say
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Nationality
                    </div>

                    <div className='rad-detail-answer'>
                        <div>
                            <div className='rad-detail'>
                                <div className='rad-detail-input'>
                                    <input 
                                        type='radio'
                                        checked={candidate.nationality === 'British'}
                                    />
                                </div>
                                <div className='rad-detail-label'>
                                    <label>
                                        British
                                    </label>
                                </div>
                            </div>
                            <div className='rad-detail'>
                                <div className='rad-detail-input'>
                                    <input 
                                        type='radio'
                                        checked={candidate.nationality === 'Other'}
                                    />
                                </div>
                                <div>
                                    <label className='rad-detail-label'>
                                        Other
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}