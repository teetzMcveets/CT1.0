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
                            Bank Details
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Account holder name
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedBankDetails.accountHolderName}
                                    onChange={(e) => handleOnChange('accountHolderName', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Bank account number
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input 
                                    type='tel'
                                    className='candidate-page-input'
                                    value={updatedBankDetails.accountNumber}
                                    onChange={(e) => handleOnChange('accountNumber', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Bank account sort code
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input 
                                    type='tel'
                                    className='candidate-page-input'
                                    value={updatedBankDetails.sortCode}
                                    onChange={(e) => handleOnChange('sortCode', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

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
                                    <option value='Limited Company'>Limited Company</option>
                                    <option value='PAYE'>PAYE</option>
                                    <option value='Umbrella'>Umbrella</option>
                                </select>
                            </div>
                        </div>

                        {updatedBankDetails.payrollMethod === 'Limited Company' &&
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

                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Your Company VAT number
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='GB-box'>
                                            GB
                                        </div>
                                        <input 
                                            type='tel'
                                            className='candidate-page-input-date'
                                            value={updatedBankDetails.LTDCompanyVATNumber}
                                            onChange={(e) => handleOnChange('LTDCompanyVATNumber', e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                    </div>

                                    <div className='candidate-page-detail-answer bank-detail-description-text'>
                                        <div className='one'>
                                            UK VAT reg number is co,posed of 9 or 12 digits.
                                        </div>
                                        <div className='two'>
                                            GB prefix is not needed.
                                        </div>
                                        <div>
                                            eg. 999999973 or 999999999973
                                        </div>
                                    </div>
                                </div>

                            </>
                        }

                        {updatedBankDetails.payrollMethod === 'PAYE' &&
                            <>
                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Employee statement
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                    </div>
                                </div>

                                <div className='candidate-page-detail-container employee-statement-container'>
                                    <div className='candidate-page-emp-statement candidate-page-emp-statement-edit'>
                                        <div className='emp-statement-box-one'>
                                            <input 
                                                type='radio'
                                                name='employeeStatement'
                                                id='employeeStatement-A'
                                                value='A'
                                                checked={updatedBankDetails.employeeStatement === 'A'}
                                                onChange={(e) => handleOnChange('employeeStatement', e.target.value)}
                                            />
                                        </div>
                                        <div className='emp-statement-box-two'>
                                            <label htmlFor='employeeStatement-A'>
                                                A -
                                            </label>
                                        </div>
                                        <div className='emp-statement-box-three'>
                                            <label htmlFor='employeeStatement-A'>
                                                This is my first job since last 6 April and I have not been receiving taxable Jobseeker's Allowance, Employment and Support Allowance, taxable incapacity Benefit, State or Occupational Pension.
                                            </label>
                                        </div>
                                    </div>
                                    <div className='candidate-page-emp-statement candidate-page-emp-statement-edit'>
                                        <div className='emp-statement-box-one'>
                                            <input 
                                                type='radio'
                                                name='employeeStatement'
                                                id='employeeStatement-B'
                                                value='B'
                                                checked={updatedBankDetails.employeeStatement === 'B'}
                                                onChange={(e) => handleOnChange('employeeStatement', e.target.value)}
                                            />
                                        </div>
                                        <div className='emp-statement-box-two' >
                                            <label htmlFor='employeeStatement-B'>
                                                B -
                                            </label>
                                        </div>
                                        <div className='emp-statement-box-three' >
                                            <label htmlFor='employeeStatement-B'>
                                                This is now my only job but since last 6 April I have had another job, or received taxable Jobseeker's Allowance, Employment and Support Allowance or taxable Incapacity Benefit. I do not receive a State or Occupational Pension.
                                            </label>
                                        </div>
                                    </div>
                                    <div className='candidate-page-emp-statement candidate-page-emp-statement-edit'>
                                        <div className='emp-statement-box-one'>
                                            <input 
                                                type='radio'
                                                name='employeeStatement'
                                                id='employeeStatement-C'
                                                value='C'
                                                checked={updatedBankDetails.employeeStatement === 'C'}
                                                onChange={(e) => handleOnChange('employeeStatement', e.target.value)}
                                            />
                                        </div>
                                        <div className='emp-statement-box-two' >
                                            <label htmlFor='employeeStatement-C'>
                                                C -
                                            </label>
                                        </div>
                                        <div className='emp-statement-box-three' >
                                            <label htmlFor='employeeStatement-C'>
                                                As well as my new job, I have another job ir receive a State or Occupational Pension
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Do you have a student loan which is not fully repaid
                                    </div>

                                    <div className='candidate-page-detail-answer'>

                                        <div className='candidate-page-rad-answer-container'>
                                            
                                            <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                                <input 
                                                    type='radio'
                                                    name='studentLoanPaid'
                                                    id='studentLoanPaid-yes'
                                                    value='Yes'
                                                    checked={updatedBankDetails.studentLoanPaid === 'Yes'}
                                                    onChange={(e) => handleOnChange('studentLoanPaid', e.target.value)}
                                                />
                                                <label htmlFor='studentLoanPaid-yes' className='candidate-page-rad-label'>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                                <input 
                                                    type='radio'
                                                    name='studentLoanPaid'
                                                    id='studentLoanPaid-no'
                                                    value='No'
                                                    checked={updatedBankDetails.studentLoanPaid === 'No'}
                                                    onChange={(e) => handleOnChange('studentLoanPaid', e.target.value)}
                                                />
                                                <label className='candidate-page-rad-label' htmlFor='studentLoanPaid-no'>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Did you finish your studies before the last 6 April
                                    </div>

                                    <div className='candidate-page-detail-answer'>

                                        <div className='candidate-page-rad-answer-container'>
                                            
                                            <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                                <input 
                                                    type='radio'
                                                    name='finishStudies'
                                                    id='finishStudies-yes'
                                                    value='Yes'
                                                    checked={updatedBankDetails.finishStudies === 'Yes'}
                                                    onChange={(e) => handleOnChange('finishStudies', e.target.value)}
                                                />
                                                <label htmlFor='finishStudies-yes' className='candidate-page-rad-label'>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                                <input 
                                                    type='radio'
                                                    name='finishStudies'
                                                    id='finishStudies-no'
                                                    value='No'
                                                    checked={updatedBankDetails.finishStudies === 'No'}
                                                    onChange={(e) => handleOnChange('finishStudies', e.target.value)}
                                                />
                                                <label className='candidate-page-rad-label' htmlFor='finishStudies-no'>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </>
                        }

                        {updatedBankDetails.payrollMethod === 'Umbrella' &&
                            <>
                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Umbrella Company
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <select 
                                            type='text'
                                            className='candidate-page-input'
                                            value={updatedBankDetails.umbrellaCompany}
                                            onChange={(e) => handleOnChange('umbrellaCompany', e.target.value)}
                                        >
                                            <option value=''>Please select</option>
                                            <option value='HGV EDM'>HGV EDM</option>
                                            <option value='HirePAY LTD'>HirePAY LTD</option>
                                            <option value='HirePAYE'>HirePAYE</option>
                                            <option value='Nova'>Nova</option>
                                            <option value='Pegasus Outsource'>Pegasus Outsource</option>
                                            <option value='PJ Payroll Services'>PJ Payroll Services</option>
                                            <option value='Thames Outsourcing'>Thames Outsourcing</option>
                                        </select>
                                    </div>
                                </div>
                            </>
                        }
                    </div>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Pay Information
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Pay method
                            </div>

                            <div className='candidate-page-detail-answer'>

                                <div className='candidate-page-rad-answer-container'>
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='payMethod'
                                            id='payMethod-bacs'
                                            value='BACS'
                                            checked={updatedBankDetails.payMethod === 'BACS'}
                                            onChange={(e) => handleOnChange('payMethod', e.target.value)}
                                        />
                                        <label htmlFor='payMethod-bacs' className='candidate-page-rad-label'>
                                            BACS
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='payMethod'
                                            id='payMethod-cash'
                                            value='Cash'
                                            checked={updatedBankDetails.payMethod === 'Cash'}
                                            onChange={(e) => handleOnChange('payMethod', e.target.value)}
                                        />
                                        <label className='candidate-page-rad-label' htmlFor='payMethod-cash'>
                                            Cash
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='payMethod'
                                            id='payMethod-ppc'
                                            value='Pre-paid Card'
                                            checked={updatedBankDetails.payMethod === 'Pre-paid Card'}
                                            onChange={(e) => handleOnChange('payMethod', e.target.value)}
                                        />
                                        <label className='candidate-page-rad-label' htmlFor='payMethod-ppc'>
                                            Pre-paid Card
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>   
                            <div className='candidate-page-detail-label'>
                                P60 received
                            </div>

                            <div className='candidate-page-detail-answer'>

                                <div className='candidate-page-rad-answer-container'>
                                <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='p60Received'
                                            id='p60Received-yes'
                                            value='Yes'
                                            checked={updatedBankDetails.p60Received === 'Yes'}
                                            onChange={(e) => handleOnChange('p60Received', e.target.value)}
                                        />
                                        <label htmlFor='p60Received-yes' className='candidate-page-rad-label'>
                                            Yes
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='p60Received'
                                            id='p60Received-no'
                                            value='No'
                                            checked={updatedBankDetails.p60Received === 'No'}
                                            onChange={(e) => handleOnChange('p60Received', e.target.value)}
                                        />
                                        <label className='candidate-page-rad-label' htmlFor='p60Received-no'>
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>   
                            <div className='candidate-page-detail-label'>
                                Apprentice
                            </div>

                            <div className='candidate-page-detail-answer'>

                                <div className='candidate-page-rad-answer-container'>
                                <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='apprentice'
                                            id='apprentice-yes'
                                            value='Yes'
                                            checked={updatedBankDetails.apprentice === 'Yes'}
                                            onChange={(e) => handleOnChange('apprentice', e.target.value)}
                                        />
                                        <label htmlFor='apprentice-yes' className='candidate-page-rad-label'>
                                            Yes
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='apprentice'
                                            id='apprentice-no'
                                            value='No'
                                            checked={updatedBankDetails.apprentice === 'No'}
                                            onChange={(e) => handleOnChange('apprentice', e.target.value)}
                                        />
                                        <label className='candidate-page-rad-label' htmlFor='apprentice-no'>
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                        

                </div>
            </div>
        </>
    )
}