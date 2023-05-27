import React from 'react';
import { Link } from 'react-router-dom';

export default function PrimaryQuestions ({ candidate, }) {

    return (
        <>
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
                                        onChange={(e) => e.preventDefault()}
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
                                        onChange={(e) => e.preventDefault()}
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
                                        onChange={(e) => e.preventDefault()}
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
                                        onChange={(e) => e.preventDefault()}
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
                                        onChange={(e) => e.preventDefault()}
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

            <div className='card-detail-title'>
                <div className='card-title'>
                    Account Settings
                </div>
            </div>

            <div className='card-container'>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Industry
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.industry}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Owner
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.owner}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Access
                    </div>

                    <div className='rad-detail-answer'>
                        <div>
                            {['#1', '#2', '#3', '#4', '#5'].map((accessValue) => (
                                <div className='check-detail' key={accessValue}>
                                    <div className='rad-detail-input'>
                                        <input 
                                            type='checkbox'
                                            checked={candidate.access.includes(accessValue)}
                                            onChange={(e) => e.preventDefault()}
                                        />
                                    </div>
                                    <div className='rad-detail-label'>
                                        <label>
                                            {accessValue}
                                        </label>
                                    </div>
                                </div>    
                            ))}      
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-detail-title'>
                <div className='card-title'>
                    Contact Details
                </div>
            </div>
            
            <div className='card-container'>
                
                <div className='detail-container'>
                    <div className='detail-label'>
                        Email Address
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border email-answer'>
                            {candidate.email}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Mobile Number
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.number}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Contact preference
                    </div>

                    <div className='rad-detail-answer'>
                        <div>
                            {['Mobile', 'Email'].map((accessValue) => (
                                <div className='check-detail' key={accessValue}>
                                    <div className='rad-detail-input'>
                                        <input 
                                            type='checkbox'
                                            checked={candidate.contactPref.includes(accessValue)}
                                            onChange={(e) => e.preventDefault()}
                                        />
                                    </div>
                                    <div className='rad-detail-label'>
                                        <label>
                                            {accessValue}
                                        </label>
                                    </div>
                                </div>    
                            ))}      
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-detail-title'>
                <div className='card-title'>
                    Current Address
                </div>
            </div>

            <div className='card-container'>
                
                <div className='detail-container'>
                    <div className='detail-label'>
                        Address Line 1
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.address1}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Address Line 2
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.address2}
                        </div>
                    </div>
                </div>
                <div className='detail-container'>
                    <div className='detail-label'>
                        Address Line 3
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.address2}
                        </div>
                    </div>
                </div>
                <div className='detail-container'>
                    <div className='detail-label'>
                        City or Town
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.cityTown}
                        </div>
                    </div>
                </div>
                <div className='detail-container'>
                    <div className='detail-label'>
                        County
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.county}
                        </div>
                    </div>
                </div>
                <div className='detail-container'>
                    <div className='detail-label'>
                        Post code
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.postCode}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Move in date
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.movedIn}
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-detail-title'>
                <div className='card-title'>
                    Work eligibility
                </div>
            </div>
            
            <div className='card-container'>
                
                <div className='detail-container'>
                    <div className='detail-label'>
                        NI number
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.niNumber}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Work Permit
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.workPermit}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        EUSS share code
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.EUSSShareCode}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Permit number
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.permitNumber}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Permit expiry date
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.permitExpiry}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Upload
                    </div>
                    <div className='detail-answer'>
                        <div className='answer-border'>
                            <Link className='link-secondary'>
                                View Document
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Criminal Convictions
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.criminalConvictions}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}