import React from 'react';
import { Link } from 'react-router-dom';
import '../CandidateDetailsForm.css';

export default function PrimaryQuestions ({ candidate, edit }) {

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


                    {/* ABOUT YOU CARD */}
                    <div className='card-detail-title'>
                        <div className='card-title'>
                            About You
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                First Name
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.firstName}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Middle names
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.middleNames}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Last name
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.lastName}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Date of birth
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container-date'>
                                    {candidate.dateOfBirth}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Gender
                            </div>

                            <div className='candidate-page-detail-answer'>

                                <div className='candidate-page-rad-answer-container'>
                                    <div className='candidate-page-rad-single-answer'>
                                        <input 
                                            type='radio'
                                            name='gender'
                                            id='gender-male'
                                            value='Male'
                                            checked={candidate.gender === 'Male'}
                                            readOnly
                                        />
                                        <label htmlFor='gender-male' className='candidate-page-rad-label'>
                                            Male
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer'>
                                        <input 
                                            type='radio'
                                            name='gender'
                                            id='gender-female'
                                            value='Female'
                                            checked={candidate.gender === 'Female'}
                                            readOnly
                                        />
                                        <label className='candidate-page-rad-label' htmlFor='gender-female'>
                                            Female
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer'>
                                        <input 
                                            type='radio'
                                            name='gender'
                                            id='gender-prefNotSay'
                                            value='Prefer not to say'
                                            checked={candidate.gender === 'Prefer not to say'}
                                            readOnly
                                        />
                                        <label className='candidate-page-rad-label' htmlFor='gender-prefNotSay'>
                                            Prefer not to say
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Nationality
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.nationality}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ACCOUNT SETTINGS CARD */}
                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Account Settings
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Industry
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.industry}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Owner
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.owner}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Access
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-checkbox-container'>
                                    {['#1', '#2', '#3', '#4', '#5'].map((accessValue) => (
                                        <div className='candidate-page-checkbox-single-answer' key={accessValue}>
                                            <input 
                                                type='checkbox'
                                                checked={candidate.access.includes(accessValue)}
                                                // onChange={(e) => e.preventDefault()}
                                                readOnly
                                            />
                                            <label className='candidate-page-checkbox-label'>
                                                {accessValue}
                                            </label>
                                        </div>    
                                    ))}      
                                </div>
                            </div>
                        </div>
                    </div>
                        

                    {/* CONTACT DETAILS CARD */}
                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Contact Details
                        </div>
                    </div>
                    
                    <div className='candidate-page-card-container'>
                        
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Email Address
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.email}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Mobile Number
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.number}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Contact preference
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-checkbox-container'>
                                    {['Mobile', 'Email'].map((accessValue) => (
                                        <div className='candidate-page-checkbox-single-answer' key={accessValue}>
                                            <input 
                                                type='checkbox'
                                                checked={candidate.contactPref.includes(accessValue)}
                                                // onChange={(e) => e.preventDefault()}
                                                readOnly
                                            />
                                            <label className='candidate-page-checkbox-label'>
                                                {accessValue}
                                            </label>
                                        </div>    
                                    ))}      
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CURRENT ADDRESS */}
                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Current Address
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Address Line 1
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.address1}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Address Line 2
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.address2}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Address Line 3
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.address3}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                City or Town
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.cityTown}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                County
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.county}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Post code
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.postCode}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Move in date
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.movedIn}
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    {/* WORK ELIGIBILITY CARD */}
                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Work eligibility
                        </div>
                    </div>
                    
                    <div className='candidate-page-card-container'>
                        
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                NI number
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.niNumber}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Permit needed
                            </div>

                            <div className='candidate-page-detail-answer'>

                                <div className='candidate-page-rad-answer-container'>
                                    <div className='candidate-page-rad-single-answer'>
                                        <input
                                            type='radio'
                                            name='permitNeeded'
                                            checked={candidate.permitNeeded === 'Yes'}
                                            readOnly
                                        />
                                        <label className='candidate-page-rad-label'>
                                            Yes
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer'>
                                        <input
                                            type='radio'
                                            name='permitNeeded'
                                            checked={candidate.permitNeeded === 'No'}
                                            readOnly
                                        />
                                        <label className='candidate-page-rad-label'>
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {candidate.permitNeeded === 'Yes' &&
                            <>
                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Work Permit
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.workPermit}
                                        </div>
                                    </div>
                                </div>

                                {(candidate.workPermit === 'EU pre-settled status' ||
                                candidate.workPermit === 'EU settled status') &&
                                    <>
                                        <div className='candidate-page-detail-container'>
                                            <div className='candidate-page-detail-label'>
                                                EUSS share code
                                            </div>

                                            <div className='candidate-page-detail-answer'>
                                                <div className='candidate-page-detail-answer-container'>
                                                    {candidate.permitShareCode}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='candidate-page-detail-container'>
                                            <div className='candidate-page-detail-label'>
                                                Permit number
                                            </div>

                                            <div className='candidate-page-detail-answer'>
                                                <div className='candidate-page-detail-answer-container'>
                                                    {candidate.permitNumber}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='candidate-page-detail-container'>
                                            <div className='candidate-page-detail-label'>
                                                Permit expiry date
                                            </div>

                                            <div className='candidate-page-detail-answer'>
                                                <div className='candidate-page-detail-answer-container'>
                                                    {candidate.permitExpiry}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='candidate-page-detail-container'>
                                            <div className='candidate-page-detail-label'>
                                                Upload
                                            </div>

                                            <div className='candidate-page-detail-answer'>
                                                <div className='candidate-page-detail-answer-container'>
                                                    <Link className='link-secondary'>
                                                        View Document
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                }
                            </>
                        }

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Criminal Convictions
                            </div>

                            <div className='candidate-page-detail-answer'>

                                <div className='candidate-page-rad-answer-container'>
                                    <div className='candidate-page-rad-single-answer'>
                                        <input
                                            type='radio'
                                            name='criminalConvictions'
                                            id='criminal-yes'
                                            value='Yes'
                                            checked={candidate.criminalConvictions === 'Yes'}
                                            readOnly
                                        />
                                        <label className='candidate-page-rad-label'>
                                            Yes
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer'>
                                        <input
                                            type='radio'
                                            name='criminalConvictions'
                                            id='criminal-no'
                                            value='No'
                                            checked={candidate.criminalConvictions === 'No'}
                                            readOnly
                                        />
                                        <label className='candidate-page-rad-label'>
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {candidate.criminalConvictions === 'Yes' && 
                            <div className='candidate-page-detail-container'>
                                <div className='candidate-page-detail-label'>
                                    Details
                                </div>

                                <div className='candidate-page-detail-answer'>
                                    <div className='candidate-page-detail-answer-container' style={{ height: 100 }}>
                                        {candidate.criminalConvictionsDetails}
                                    </div>
                                </div>
                            </div>
                        
                        }
                    </div>
                </div>
            </div>

        </>
    )
}