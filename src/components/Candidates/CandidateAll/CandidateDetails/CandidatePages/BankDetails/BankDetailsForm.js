import React from 'react';
import '../CandidateDetailsForm.css';

export default function BankDetailsForm ({
    edit,
    save,
    handleOnChange,
    updatedBankDetails,
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
                            Payroll Method
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Your employment status
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <select 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedBankDetails.payrollMethod}
                                    onChange={(e) => handleOnChange('payrollMethod', e.target.value)}
                                >
                                    <option value=''>Please select</option>
                                    <option value='limitedCompany'>Limited Company</option>
                                    <option value='PAYE'>PAYE</option>
                                    <option value='Umbrella'>Umbrella</option>
                                </select>
                            </div>
                        </div>

                        {updatedBankDetails.payrollMethod === 'limitedCompany' &&
                            <>
                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Your company name
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <input 
                                            type='text'
                                            className='candidate-page-input'
                                            value={updatedBankDetails.LTDCompanyName}
                                            onChange={(e) => handleOnChange('LTDCompanyName', e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Your company reg number
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <input 
                                            type='tel'
                                            className='candidate-page-input'
                                            value={updatedBankDetails.LTDCompanyNumber}
                                            onChange={(e) => handleOnChange('LTDCompanyNumber', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                    </div>

                                    <div className='candidate-page-detail-answer bank-detail-description-text'>
                                        <div className='one'>
                                            UK company reg numbers start with 2 characters (optional) and 6-8 digits
                                        </div>
                                        <div className='two'>
                                            eg. 06488522 or SC06488522
                                        </div>
                                    </div>
                                </div>

                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Company incorporation date
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <input 
                                            type='date'
                                            className='candidate-page-input-date'
                                            value={updatedBankDetails.LTDIncorporationDate}
                                            onChange={(e) => handleOnChange('LTDIncorporationDate', e.target.value)}
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