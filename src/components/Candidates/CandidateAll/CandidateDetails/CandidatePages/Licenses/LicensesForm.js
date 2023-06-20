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

    console.log(updatedLicenses.licenseCategory)
 
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
                                <div className='file-input-container'>
                                <input
                                    type='file'
                                    className='file-input'
                                />
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                First name on license
                            </div>
            

                            <div className='candidate-page-detail-answer'>
                                <input
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedLicenses.licenseNameNotSame}
                                    onChange={(e) => handleOnChange('licenseNameNotSame', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                            </div>
            

                            <div className='candidate-page-detail-answer' style={{ marginTop: -15, color: 'var(--text2)' }}>
                                (if not {candidate.firstName})
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                License number (5)
                            </div>
            

                            <div className='candidate-page-detail-answer'>
                                <input
                                    type='tel'
                                    className='candidate-page-input'
                                    value={updatedLicenses.licenseNumber}
                                    onChange={(e) => handleOnChange('licenseNumber', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                License issue number
                            </div>
            

                            <div className='candidate-page-detail-answer'>
                                <input
                                    type='tel'
                                    className='candidate-page-input'
                                    style={{ width: 100 }}
                                    value={updatedLicenses.licenseIssueNumber}
                                    onChange={(e) => handleOnChange('licenseIssueNumber', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                            </div>

                            <div className='candidate-page-detail-answer' style={{ marginTop: -15, color: 'var(--text2)', fontSize: 12 }}>
                                (last digits of license number after the space)
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Issue date (4a)
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input
                                    type='date'
                                    className='candidate-page-input-date'
                                    value={updatedLicenses.licenseIssueDate}
                                    onChange={(e) => handleOnChange('licenseIssueDate', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Expiration date (4b)
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input
                                    type='date'
                                    className='candidate-page-input-date'
                                    value={updatedLicenses.licenseExpiryDate}
                                    onChange={(e) => handleOnChange('licenseExpiryDate', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    

                    {/* LICENSE BACK*/}

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            License Back
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Upload back of license
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='file-input-container'>
                                <input
                                    type='file'
                                    className='file-input'
                                />
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Select categories you have
                            </div>
                        </div>

                        <div className='candidate-page-detail-answer' style={{ width: '100%' }}>
                            <div className='license-back-checkbox-container license-back-checkbox-edit'>
                                {['CE', 'C', 'C1', 'B'].map((licenseCategoryValue) => {
                                    
                                    const validFromDateKey = `licenseBack${licenseCategoryValue}ValidFrom`;
                                    const validToDateKey = `licenseBack${licenseCategoryValue}ValidTo`;


                                    return (
                                        <div className='license-back-checkboxes' key={licenseCategoryValue}>
                                            <div className='license-back-left-box'>
                                                <input
                                                    type='checkbox'
                                                    id={`licenseBack-${licenseCategoryValue}`}
                                                    checked={updatedLicenses.licenseCategory.includes(licenseCategoryValue)}
                                                    onChange={(e) => handleLicenseCategory(e, licenseCategoryValue)}
                                                />
                                                <label style={{ paddingLeft: 5 }} htmlFor={`licenseBack-${licenseCategoryValue}`}>
                                                    {licenseCategoryValue}
                                                </label>
                                            </div>
                                            <div className='license-back-right-box'>
                                                {updatedLicenses.licenseCategory.includes(licenseCategoryValue) &&
                                                    <>
                                                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', padding: '10px 20px' }}>
                                                            <div style={{ paddingRight: 10 }}>
                                                                Valid from
                                                            </div>

                                                            <div>
                                                                <input
                                                                    type='date'
                                                                    className='candidate-page-input-date'
                                                                    style={{ width: '100%' }}
                                                                    value={updatedLicenses[validFromDateKey]}
                                                                    onChange={(e) => handleOnChange(validFromDateKey, e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', padding: '10px 20px' }}>
                                                            <div style={{ paddingRight: 10 }}>
                                                                Valid to
                                                            </div>

                                                            <div>
                                                                <input
                                                                    type='date'
                                                                    className='candidate-page-input-date'
                                                                    style={{ width: '100%' }}
                                                                    value={updatedLicenses[validToDateKey]}
                                                                    onChange={(e) => handleOnChange(validToDateKey, e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                            
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* <div className='license-back-checkboxes'>
                            <div className='license-back-left-box'>
                                <input
                                    type='checkbox'
                                />
                                <label style={{ paddingLeft: 5, fontWeight: 'bold' }}>
                                    C
                                </label>
                            </div>

                            <div className='license-back-date-box'>
                                
                            </div>
                        </div>

                        <div className='license-back-checkboxes'>
                            <div className='license-back-left-box'>
                                <input
                                    type='checkbox'
                                />
                                <label style={{ paddingLeft: 5, fontWeight: 'bold' }}>
                                    C1
                                </label>
                            </div>

                            <div className='license-back-date-box'>

                            </div>
                        </div>

                        <div className='license-back-checkboxes'>
                            <div className='license-back-left-box'>
                                <input
                                    type='checkbox'
                                />
                                <label style={{ paddingLeft: 5, fontWeight: 'bold' }}>
                                    B
                                </label>
                            </div>

                            <div className='license-back-date-box'>
                                
                            </div>
                        </div> */}

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
                                <div className='file-input-container'>
                                    <input
                                        type='file'
                                    />
                                </div>
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