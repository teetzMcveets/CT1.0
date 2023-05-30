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
    otherNationality
 }) {

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

                        {(otherNationality || candidate.nationality !== '' ) &&

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
                            <input 
                                    type='email'
                                    className='candidate-details-edit-input'
                                    value={updatedPrimaryQuestions.email}
                                    onChange={(e) => handleOnChange('email', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='detail-container'>
                            <div className='detail-label'>
                                Mobile Number
                            </div>

                            <div className='detail-answer'>
                            <input 
                                    type='tel'
                                    className='candidate-details-edit-input'
                                    value={updatedPrimaryQuestions.number}
                                    onChange={(e) => handleOnChange('number', e.target.value)}
                                />
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
                            <input 
                                    type='text'
                                    className='candidate-details-edit-input'
                                    value={updatedPrimaryQuestions.address1}
                                    onChange={(e) => handleOnChange('address1', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='detail-container'>
                            <div className='detail-label'>
                                Address Line 2
                            </div>

                            <div className='detail-answer'>
                            <input 
                                    type='text'
                                    className='candidate-details-edit-input'
                                    value={updatedPrimaryQuestions.address2}
                                    onChange={(e) => handleOnChange('address2', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='detail-container'>
                            <div className='detail-label'>
                                Address Line 3
                            </div>

                            <div className='detail-answer'>
                            <input 
                                    type='text'
                                    className='candidate-details-edit-input'
                                    value={updatedPrimaryQuestions.address3}
                                    onChange={(e) => handleOnChange('address3', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='detail-container'>
                            <div className='detail-label'>
                                City or Town
                            </div>

                            <div className='detail-answer'>
                            <input 
                                    type='text'
                                    className='candidate-details-edit-input'
                                    value={updatedPrimaryQuestions.cityTown}
                                    onChange={(e) => handleOnChange('cityTown', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='detail-container'>
                            <div className='detail-label'>
                                County
                            </div>

                            <div className='detail-answer'>
                            <input 
                                    type='text'
                                    className='candidate-details-edit-input'
                                    value={updatedPrimaryQuestions.county}
                                    onChange={(e) => handleOnChange('county', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='detail-container'>
                            <div className='detail-label'>
                                Post code
                            </div>

                            <div className='detail-answer'>
                            <input 
                                    type='text'
                                    className='candidate-details-edit-input'
                                    value={updatedPrimaryQuestions.postCode}
                                    onChange={(e) => handleOnChange('postCode', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='detail-container'>
                            <div className='detail-label'>
                                Move in date
                            </div>

                            <div className='detail-answer'>
                            <input 
                                    type='date'
                                    className='candidate-details-edit-input'
                                    value={updatedPrimaryQuestions.movedIn}
                                    onChange={(e) => handleOnChange('movedIn', e.target.value)}
                                />
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
                            <input 
                                    type='text'
                                    className='candidate-details-edit-input'
                                    value={updatedPrimaryQuestions.niNumber}
                                    onChange={(e) => handleOnChange('niNumber', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='detail-container'>
                            <div className='detail-label'>
                                Permit needed
                            </div>

                            <div className='rad-detail-answer'>
                                <div>
                                    <div className='rad-detail rad-detail-edit'>
                                        <div className='rad-detail-input'>
                                            <input 
                                                type='radio'
                                                name='permitNeeded'
                                                id='permit-needed-yes'
                                                value='Yes'
                                                checked={updatedPrimaryQuestions.permitNeeded === 'Yes'}
                                                onChange={(e) => handleOnChange('permitNeeded', e.target.value)}
                                            />
                                        </div>
                                        <div className='rad-detail-label'>
                                            <label htmlFor='permit-needed-yes'>
                                                Yes
                                            </label>
                                        </div>
                                    </div>
                                    <div className='rad-detail rad-detail-edit'>
                                        <div className='rad-detail-input'>
                                            <input 
                                                type='radio'
                                                name='permitNeeded'
                                                id='permit-needed-no'
                                                value='No'
                                                checked={updatedPrimaryQuestions.permitNeeded === 'No'}
                                                onChange={(e) => handleOnChange('permitNeeded', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='rad-detail-label' htmlFor='permit-needed-no'>
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {updatedPrimaryQuestions.permitNeeded === 'Yes' && 
                            <>
                                <div>
                                    <div className='detail-container'>
                                        <div className='detail-label'>
                                            Work Permit
                                        </div>

                                        <div className='detail-answer'>
                                            <select 
                                                type='text'
                                                className='candidate-details-edit-input'
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
                                </div>

                                {(updatedPrimaryQuestions.workPermit === 'EU pre-settled status' || 
                                updatedPrimaryQuestions.workPermit === 'EU settled status') &&
                                    <>
                                        <div className='detail-container'>
                                            <div className='detail-label'>
                                                EUSS share code
                                            </div>

                                            <div className='detail-answer'>
                                                <input 
                                                    type='text'
                                                    className='candidate-details-edit-input'
                                                    value={updatedPrimaryQuestions.permitShareCode}
                                                    onChange={(e) => handleOnChange('permitShareCode', e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className='detail-container'>
                                            <div className='detail-label'>
                                                Permit number
                                            </div>

                                            <div className='detail-answer'>
                                                <input 
                                                    type='text'
                                                    className='candidate-details-edit-input'
                                                    value={updatedPrimaryQuestions.permitNumber}
                                                    onChange={(e) => handleOnChange('permitNumber', e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className='detail-container'>
                                            <div className='detail-label'>
                                                Permit expiry date
                                            </div>

                                            <div className='detail-answer'>
                                                <input 
                                                    type='date'
                                                    className='candidate-details-edit-input'
                                                    value={updatedPrimaryQuestions.permitExpiry}
                                                    onChange={(e) => handleOnChange('permitExpiry', e.target.value)}
                                                />
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
                                    </>
                                }

                                {updatedPrimaryQuestions.workPermit === 'Other' &&
                                    <>
                                        <div className='detail-container'>
                                            <div className='detail-label'>
                                                Details
                                            </div>

                                            <div className='detail-answer'>
                                                <input 
                                                    type='text'
                                                    className='candidate-details-edit-input'
                                                    value={updatedPrimaryQuestions.workPermitOther}
                                                    onChange={(e) => handleOnChange('workPermitOther', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </>
                                }
                            </>
                        }
                        

                        

                        <div className='detail-container'>
                            <div className='detail-label'>
                                Criminal Convictions
                            </div>

                            <div className='rad-detail-answer'>
                                <div>
                                    <div className='rad-detail rad-detail-edit'>
                                        <div className='rad-detail-input'>
                                            <input 
                                                type='radio'
                                                name='criminalConvictions'
                                                id='criminal-convictions-yes'
                                                value='Yes'
                                                checked={updatedPrimaryQuestions.criminalConvictions === 'Yes'}
                                                onChange={(e) => handleOnChange('criminalConvictions', e.target.value)}
                                            />
                                        </div>
                                        <div className='rad-detail-label'>
                                            <label htmlFor='criminal-convictions-yes'>
                                                Yes
                                            </label>
                                        </div>
                                    </div>
                                    <div className='rad-detail rad-detail-edit'>
                                        <div className='rad-detail-input'>
                                            <input 
                                                type='radio'
                                                name='criminalConvictions'
                                                id='criminal-convictions-no'
                                                value='No'
                                                checked={updatedPrimaryQuestions.criminalConvictions === 'No'}
                                                onChange={(e) => handleOnChange('criminalConvictions', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='rad-detail-label' htmlFor='criminal-convictions-no'>
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {updatedPrimaryQuestions.criminalConvictions === 'Yes' &&
                            <>
                                 <div className='detail-container'>
                                            <div className='detail-label'>
                                                Details
                                            </div>

                                            <div className='detail-answer'>
                                                <textarea 
                                                    className='candidate-details-edit-input'
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
                </div>
            </div>
        </>
    )
}