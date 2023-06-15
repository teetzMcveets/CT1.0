import React from 'react';
import './Licenses.css';

export default function LicensesForm ({
    candidate,
    updatedLicenses,
    handleOnChange,
    edit,
    save,
    handleLicenseCategory,
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

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Licenses Categories
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
                                                checked={updatedLicenses.contactPref.includes(licenseCategoryValue)}
                                                onChange={(e) => handleLicenseCategory(e, licenseCategoryValue)}
                                            />
                                            <label className='candidate-page-checkbox-label'>
                                                {licenseCategoryValue}
                                            </label>
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