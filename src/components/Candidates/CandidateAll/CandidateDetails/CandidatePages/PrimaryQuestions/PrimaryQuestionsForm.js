import React from 'react';
import { Link } from 'react-router-dom';
import '../CandidateDetailsForm.css';
import { nationalities } from '../../../../../../utilities/nationalitiesArray';

export default function PrimaryQuestionsForm ({ 
    candidate,
    updatedPrimaryQuestions, 
    handleOnChange, 
    edit, 
    save,
    handleAccessChange,
    handleContactPrefChange,
 }) {

    return (
        <>  
            <div className='candidate-page-left-container'>
                <div className='candidate-page-button-container'>
                    <button
                        className='button-secondary'
                        onClick={save}
                    >
                        <i className='fas fa-save'></i>
                    </button>

                    <div style={{ height: 'var(--med2)' }}></div>
                        
                    <button 
                        className='button-secondary'
                        onClick={edit}    
                    >
                        <i className='fas fa-times'></i>
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
                                <input 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedPrimaryQuestions.firstName}
                                    onChange={(e) => handleOnChange('firstName', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Middle names
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedPrimaryQuestions.middleNames}
                                    onChange={(e) => handleOnChange('middleNames', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Last name
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedPrimaryQuestions.lastName}
                                    onChange={(e) => handleOnChange('lastName', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Date of birth
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input 
                                    type='date'
                                    className='candidate-page-input-date'
                                    value={updatedPrimaryQuestions.dateOfBirth}
                                    onChange={(e) => handleOnChange('dateOfBirth', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Gender
                            </div>

                            <div className='candidate-page-detail-answer'>

                                <div className='candidate-page-rad-answer-container'>
                                    
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='gender'
                                            id='gender-male'
                                            value='Male'
                                            checked={updatedPrimaryQuestions.gender === 'Male'}
                                            onChange={(e) => handleOnChange('gender', e.target.value)}
                                        />
                                        <label htmlFor='gender-male' className='candidate-page-rad-label'>
                                            Male
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='gender'
                                            id='gender-female'
                                            value='Female'
                                            checked={updatedPrimaryQuestions.gender === 'Female'}
                                            onChange={(e) => handleOnChange('gender', e.target.value)}
                                        />
                                        <label className='candidate-page-rad-label' htmlFor='gender-female'>
                                            Female
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='gender'
                                            id='gender-prefNotSay'
                                            value='Prefer not to say'
                                            checked={updatedPrimaryQuestions.gender === 'Prefer not to say'}
                                            onChange={(e) => handleOnChange('gender', e.target.value)}
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
                                <select 
                                    type='text'
                                    className='candidate-page-input'
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
                                <select 
                                    type='text'
                                    className='candidate-page-input'
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

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Owner
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <select 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedPrimaryQuestions.owner}
                                    onChange={(e) => handleOnChange('owner', e.target.value)}
                                >
                                    <option value='#1'>#1</option>
                                    <option value='#2'>#2</option>
                                    <option value='#3'>#3</option>
                                    <option value='#4'>#4</option>
                                    <option value='#5'>#5</option>
                                </select>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Access
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-checkbox-container candidate-page-checkbox-answer-edit'>
                                    {['#1', '#2', '#3', '#4', '#5'].map((accessValue) => (
                                        <div className='candidate-page-checkbox-single-answer' key={accessValue}>
                                            <input 
                                                type='checkbox'
                                                checked={updatedPrimaryQuestions.access.includes(accessValue)}
                                                onChange={(e) => handleAccessChange(e, accessValue)}
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
                            <input 
                                    type='email'
                                    className='candidate-page-input'
                                    value={updatedPrimaryQuestions.email}
                                    onChange={(e) => handleOnChange('email', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Mobile Number
                            </div>

                            <div className='candidate-page-detail-answer'>
                            <input 
                                    type='tel'
                                    className='candidate-page-input'
                                    value={updatedPrimaryQuestions.number}
                                    onChange={(e) => handleOnChange('number', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Contact preference
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-checkbox-container candidate-page-checkbox-answer-edit'>
                                    {['Mobile', 'Email'].map((contactPrefValue) => (
                                        <div className='candidate-page-checkbox-single-answer' key={contactPrefValue}>
                                            <input 
                                                type='checkbox'
                                                checked={updatedPrimaryQuestions.contactPref.includes(contactPrefValue)}
                                                onChange={(e) => handleContactPrefChange(e, contactPrefValue)}
                                            />
                                            <label className='candidate-page-checkbox-label'>
                                                {contactPrefValue}
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
                                <input 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedPrimaryQuestions.address1}
                                    onChange={(e) => handleOnChange('address1', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Address Line 2
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedPrimaryQuestions.address2}
                                    onChange={(e) => handleOnChange('address2', e.target.value)}
                                />
                            </div>
                        </div>
                        
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Address Line 3
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedPrimaryQuestions.address3}
                                    onChange={(e) => handleOnChange('address3', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                City or Town
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedPrimaryQuestions.cityTown}
                                    onChange={(e) => handleOnChange('cityTown', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                County
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedPrimaryQuestions.county}
                                    onChange={(e) => handleOnChange('county', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Post code
                            </div>

                            <div className='candidate-page-detail-answer'>
                            <input 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedPrimaryQuestions.postCode}
                                    onChange={(e) => handleOnChange('postCode', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Move in date
                            </div>

                            <div className='candidate-page-detail-answer'>
                            <input 
                                    type='date'
                                    className='candidate-page-input-date'
                                    value={updatedPrimaryQuestions.movedIn}
                                    onChange={(e) => handleOnChange('movedIn', e.target.value)}
                                />
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
                                <input 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedPrimaryQuestions.niNumber}
                                    onChange={(e) => handleOnChange('niNumber', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Permit needed
                            </div>

                            <div className='candidate-page-detail-answer'>

                                <div className='candidate-page-rad-answer-container'>

                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='permitNeeded'
                                            id='permit-needed-yes'
                                            value='Yes'
                                            checked={updatedPrimaryQuestions.permitNeeded === 'Yes'}
                                            onChange={(e) => handleOnChange('permitNeeded', e.target.value)}
                                        />
                                        <label htmlFor='permit-needed-yes' className='candidate-page-rad-label'>
                                            Yes
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='permitNeeded'
                                            id='permit-needed-no'
                                            value='No'
                                            checked={updatedPrimaryQuestions.permitNeeded === 'No'}
                                            onChange={(e) => handleOnChange('permitNeeded', e.target.value)}
                                        />
                                        <label className='candidate-page-rad-label' htmlFor='permit-needed-no'>
                                            No
                                        </label>
                                    </div>    
                                </div>
                            </div>
                        </div>

                        {updatedPrimaryQuestions.permitNeeded === 'Yes' && 
                            <>
                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Work Permit
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <select 
                                            type='text'
                                            className='candidate-page-input'
                                            value={updatedPrimaryQuestions.workPermit}
                                            onChange={(e) => handleOnChange('workPermit', e.target.value)}
                                        >
                                            <option value=''>Please select...</option>
                                            <option value='Citizenship'>Citizenship</option>
                                            <option value='EU pre-settled status'>EU pre-settled status</option>
                                            <option value='EU settled status'>EU settled status</option>
                                            <option value='UK citizen'>UK citizen</option>
                                            <option value='Other'>Other</option>
                                        </select>
                                    </div>
                                </div>

                                {(updatedPrimaryQuestions.workPermit === 'EU pre-settled status' || 
                                updatedPrimaryQuestions.workPermit === 'EU settled status') &&
                                    <>
                                        <div className='candidate-page-detail-container'>
                                            <div className='candidate-page-detail-label'>
                                                EUSS share code
                                            </div>

                                            <div className='candidate-page-detail-answer'>
                                                <input 
                                                    type='text'
                                                    className='candidate-page-input'
                                                    value={updatedPrimaryQuestions.permitShareCode}
                                                    onChange={(e) => handleOnChange('permitShareCode', e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className='candidate-page-detail-container'>
                                            <div className='candidate-page-detail-label'>
                                                Permit number
                                            </div>

                                            <div className='candidate-page-detail-answer'>
                                                <input 
                                                    type='text'
                                                    className='candidate-page-input'
                                                    value={updatedPrimaryQuestions.permitNumber}
                                                    onChange={(e) => handleOnChange('permitNumber', e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className='candidate-page-detail-container'>
                                            <div className='candidate-page-detail-label'>
                                                Permit expiry date
                                            </div>

                                            <div className='candidate-page-detail-answer'>
                                                <input 
                                                    type='date'
                                                    className='candidate-page-input-date'
                                                    value={updatedPrimaryQuestions.permitExpiry}
                                                    onChange={(e) => handleOnChange('permitExpiry', e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className='candidate-page-detail-container'>
                                            <div className='candidate-page-detail-label'>
                                                Upload
                                            </div>
                                            <div className='candidate-page-detail-answer'>
                                                <div className='candidate-page-input'>
                                                    <Link className='link-secondary'>
                                                        View Document
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }

                                {updatedPrimaryQuestions.workPermit === 'Other' &&
                                    <>
                                        <div className='candidate-page-detail-container'>
                                            <div className='candidate-page-detail-label'>
                                                Details
                                            </div>

                                            <div className='candidate-page-detail-answer'>
                                                <input 
                                                    type='text'
                                                    className='candidate-page-input'
                                                    value={updatedPrimaryQuestions.workPermitOther}
                                                    onChange={(e) => handleOnChange('workPermitOther', e.target.value)}
                                                />
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

                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='criminalConvictions'
                                            id='criminal-convictions-yes'
                                            value='Yes'
                                            checked={updatedPrimaryQuestions.criminalConvictions === 'Yes'}
                                            onChange={(e) => handleOnChange('criminalConvictions', e.target.value)}
                                        />
                                        <label htmlFor='criminal-convictions-yes' className='candidate-page-rad-label'>
                                            Yes
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='criminalConvictions'
                                            id='criminal-convictions-no'
                                            value='No'
                                            checked={updatedPrimaryQuestions.criminalConvictions === 'No'}
                                            onChange={(e) => handleOnChange('criminalConvictions', e.target.value)}
                                        />
                                        <label className='candidate-page-rad-label' htmlFor='criminal-convictions-no'>
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {updatedPrimaryQuestions.criminalConvictions === 'Yes' &&
                            <>
                                 <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <textarea 
                                            className='candidate-page-input-text'
                                            rows='5'
                                            cols='10'
                                            value={updatedPrimaryQuestions.criminalConvictionsDetails}
                                            onChange={(e) => handleOnChange('criminalConvictionsDetails', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </>
                        }
                    </div>

                    <div className='save-button-container'>
                        <div className='button-space-between'>
                            <button
                                className='button-primary'
                                onClick={save}
                            >
                                Save Details
                            </button>
                            <button
                                className='button-primary'
                                onClick={edit}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}