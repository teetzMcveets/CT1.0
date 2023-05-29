import React from 'react';
import { Link } from 'react-router-dom';
import '../CandidateDetailsForm.css';
import { nationalities } from '../../../../../../utilities/nationalitiesArray';

export default function PrimaryQuestionsForm ({ candidate, updatedPrimaryQuestions, handleOnChange, edit, save }) {

    return (
        <>  
            <div style={{ display: 'flex'}}>
                <div>
                    <div className='edit-button-container'>
                        <div>
                            <button
                                className='button-secondary'
                                onClick={save}
                            >
                                <i className='fas fa-save'></i>
                            </button>
                            
                        </div>
                        
                        <button 
                            className='button-secondary'
                            onClick={edit}    
                        >
                            <i className='fas fa-times'></i>
                        </button>
                    </div>
                </div>
                <div>
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
                                <input 
                                    type='text'
                                    className='candidate-details-edit-input'
                                    value={updatedPrimaryQuestions.firstName}
                                    onChange={(e) => handleOnChange('firstName', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='detail-container'>
                            <div className='detail-label'>
                                Middle names
                            </div>

                            <div className='detail-answer'>
                            <input 
                                type='text'
                                className='candidate-details-edit-input'
                                value={updatedPrimaryQuestions.middleNames}
                                onChange={(e) => handleOnChange('middleNames', e.target.value)}
                            />
                            </div>
                        </div>

                        <div className='detail-container'>
                            <div className='detail-label'>
                                Last name
                            </div>

                            <div className='detail-answer'>
                                <input 
                                    type='text'
                                    className='candidate-details-edit-input'
                                    value={updatedPrimaryQuestions.lastName}
                                    onChange={(e) => handleOnChange('lastName', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='detail-container'>
                            <div className='detail-label'>
                                Date of birth
                            </div>

                            <div className='detail-answer'>
                                <input 
                                    type='date'
                                    className='candidate-details-edit-input'
                                    value={updatedPrimaryQuestions.dateOfBirth}
                                    onChange={(e) => handleOnChange('dateOfBirth', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='detail-container'>
                            <div className='detail-label'>
                                Gender
                            </div>

                            <div className='rad-detail-answer'>
                                <div>
                                    <div className='rad-detail rad-detail-edit'>
                                        <div className='rad-detail-input'>
                                            <input 
                                                type='radio'
                                                name='gender'
                                                id='gender-male'
                                                value='Male'
                                                checked={updatedPrimaryQuestions.gender === 'Male'}
                                                onChange={(e) => handleOnChange('gender', e.target.value)}
                                            />
                                        </div>
                                        <div className='rad-detail-label'>
                                            <label htmlFor='gender-male'>
                                                Male
                                            </label>
                                        </div>
                                    </div>
                                    <div className='rad-detail rad-detail-edit'>
                                        <div className='rad-detail-input'>
                                            <input 
                                                type='radio'
                                                name='gender'
                                                id='gender-female'
                                                value='Female'
                                                checked={updatedPrimaryQuestions.gender === 'Female'}
                                                onChange={(e) => handleOnChange('gender', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='rad-detail-label' htmlFor='gender-female'>
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                    <div className='rad-detail rad-detail-edit'>
                                        <div className='rad-detail-input'>
                                            <input 
                                                type='radio'
                                                name='gender'
                                                id='gender-prefNotSay'
                                                value='Prefer not to say'
                                                checked={updatedPrimaryQuestions.gender === 'Prefer not to say'}
                                                onChange={(e) => handleOnChange('gender', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='rad-detail-label' htmlFor='gender-prefNotSay'>
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
                                    <div className='rad-detail rad-detail-edit'>
                                        <div className='rad-detail-input'>
                                            <input 
                                                type='radio'
                                                name='nationality'
                                                id='nationality-british'
                                                value='British'
                                                checked={updatedPrimaryQuestions.nationality === 'British'}
                                                onChange={(e) => handleOnChange('nationality', e.target.value)}
                                            />
                                        </div>
                                        <div className='rad-detail-label'>
                                            <label htmlFor='nationality-british'>
                                                British
                                            </label>
                                        </div>
                                    </div>
                                    <div className='rad-detail rad-detail-edit'>
                                        <div className='rad-detail-input'>
                                            <input 
                                                type='radio'
                                                name='nationality'
                                                id='nationality-other'
                                                value='Other'
                                                checked={updatedPrimaryQuestions.nationality === 'Other'}
                                                onChange={(e) => handleOnChange('nationality', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='rad-detail-label' htmlFor='nationality-other'>
                                                Other
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {updatedPrimaryQuestions.nationality !== 'British' &&

                            <div className='detail-container'>
                                <div className='detail-label'>
                                    Please Choose    
                                </div>

                                <div className='detail-answer'>
                                    <select 
                                        type='text'
                                        className='candidate-details-edit-input'
                                        value={updatedPrimaryQuestions.nationality}
                                        onChange={(e) => handleOnChange('nationality', e.target.value)}
                                    >
                                        <option value=''>Please select...</option> 
                                        {nationalities.map((nationality) => 
                                            <option key={nationality} value={nationality}>{nationality}</option>
                                        )}

                                    </select>
                                </div>
                            </div>  
                        }

                        


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
                                <select 
                                    type='text'
                                    className='candidate-details-edit-input'
                                    value={updatedPrimaryQuestions.industry}
                                    onChange={(e) => handleOnChange('industry', e.target.value)}
                                >
                                    {(candidate.industry === 'Driving' ? (
                                        <>
                                            <option value='Driving'>Driving</option>
                                            <option value='Industrial'>Industrial</option>
                                        </>
                                    ) : (
                                        <>
                                            <option value='Industrial'>Industrial</option>
                                            <option value='Driving'>Driving</option>
                                        </>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className='detail-container'>
                            <div className='detail-label'>
                                Owner
                            </div>

                            <div className='detail-answer'>
                                <select 
                                    type='text'
                                    className='candidate-details-edit-input'
                                    value={updatedPrimaryQuestions.owner}
                                    onChange={(e) => handleOnChange('owner', e.target.value)}
                                >
                                    <option value={candidate.owner}>{candidate.owner}</option>
                                    <option value='#1'>#1</option>
                                    <option value='#2'>#2</option>
                                    <option value='#3'>#3</option>
                                    <option value='#4'>#4</option>
                                    <option value='#5'>#5</option>
                                </select>
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
                </div>
            </div>
        </>
    )
}