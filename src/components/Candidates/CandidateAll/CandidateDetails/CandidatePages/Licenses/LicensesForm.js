import React from 'react';
import './Licenses.css';

export default function LicensesForm ({
    candidate,
    updatedLicenses,
    handleOnChange,
    edit,
    save,
    handleLicenseCategory,
    endorsementOptions,
    selectValue,
    handleSelect,
    selectedEndorsements,
    handleOffenseDateChange,
    handlePointsChange,
    handleRemoveEndorsement,
}) {

    console.log(updatedLicenses.licenseCheckExpires)
 
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

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            License Front
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Upload front of license
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input
                                    type='file'
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                4B Expiration date
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input
                                    type='date'
                                    className='candidate-page-input-date'
                                    value={updatedLicenses.licenseExpires4B}
                                    onChange={(e) => handleOnChange('licenseExpires4B', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            License Back
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Select categories you have
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-checkbox-container candidate-page-checkbox-answer-edit'>
                                    {['CE - class one', 'C - class two', 'C1 - 7.5 tonne', 'B - van'].map((licenseCategoryValue) => (
                                        <div className='candidate-page-checkbox-single-answer' key={licenseCategoryValue}>
                                            <input 
                                                type='checkbox'
                                                id={`licenseCategory-${licenseCategoryValue}`}
                                                checked={updatedLicenses.licenseCategory.includes(licenseCategoryValue)}
                                                onChange={(e) => handleLicenseCategory(e, licenseCategoryValue)}
                                            />
                                            <label className='candidate-page-checkbox-label'  htmlFor={`licenseCategory-${licenseCategoryValue}`}>
                                                {licenseCategoryValue}
                                            </label>
                                        </div>    
                                    ))}      
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            License Check
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Upload license check
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input
                                    type='file'
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Expiration date
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input
                                    type='date'
                                    className='candidate-page-input-date'
                                    value={updatedLicenses.licenseCheckExpires}
                                    onChange={(e) => handleOnChange('licenseCheckExpires', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                        
                    
                    <div className='card-detail-title'>
                        <div className='card-title'>
                            License Endorsements
                        </div>
                    </div>
                    

                    <div className='candidate-page-card-container'>

                        {/* <div className='candidate-page-detail-container endorsement-direction'> */}

                            {selectedEndorsements.map((endorsement, index) => (
                                <div key={index} className='candidate-page-detail-container endorsement-direction'>
                                    <div className='endorsement-container'>
                                        <div className='value-remove-container'>
                                            <div className='endorsement-value'>
                                                {endorsement.value}
                                            </div>
                                            <div className='link-container'>
                                                <button
                                                    onClick={() => handleRemoveEndorsement(index)}
                                                    className='button-third'
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>

                                        <div className='details-dates-container'>
                                            <div className='endorsement-details'>
                                                {endorsement.details}
                                            </div>
                                            <div className='endorsement-date-container'>
                                                <label className='endorsement-date'>
                                                    Date of offense
                                                </label>
                                                <input 
                                                    type='date'
                                                    className='candidate-page-input-date shorter-date-input'
                                                    onChange={e => handleOffenseDateChange(index, e.target.value)}
                                                />
                                            </div>
                                            <div className='endorsement-point-container'>
                                                <label className='endorsement-points'>
                                                    Points
                                                </label>
                                                <select
                                                    type='text'
                                                    className='candidate-page-input'
                                                    onChange={e => handlePointsChange(index, parseInt(e.target.value))}
                                                >
                                                    <option value=''>Please select...</option>
                                                    <option value='1'>1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5</option>
                                                    <option value='6'>6</option>
                                                    <option value='7'>7</option>
                                                    <option value='8'>8</option>
                                                    <option value='9'>9</option>
                                                    <option value='10'>10</option>
                                                    <option value='11'>11</option>
                                                    <option value='12'>12</option>
                                                    <option value='Ban'>Ban</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}     
                        {/* </div> */}

                        <div className='candidate-page-detail-container'>
                            <div className='endorsement-selection-container'>
                                <select
                                    type='text'
                                    className='candidate-page-input'
                                    value={selectValue}
                                    onChange={handleSelect}
                                >
                                    <option value=''>Add endorsement...</option>
                                    {endorsementOptions.map(endorsement => (
                                        <option key={endorsement.value} value={endorsement.value}>{endorsement.label}</option>
                                    ))}
                                </select>
                            </div>                       

                        </div>
                    </div>

                    {/* THIS IS WHERE THE UPLOADS AND STUFF ARE */}
                    {updatedLicenses.licenseCategory.includes('CE - class one') &&
                        <>
                            <div className='card-detail-title'>
                                <div className='card-title'>
                                    CE - class one
                                </div>
                            </div>

                            <div className='candidate-page-card-container'>

                            </div>
                        </>
                    } 

                </div>
            </div>
        </>
    )
}