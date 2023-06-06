import React from 'react';
import '../CandidateDetailsForm.css';

export default function BankDetails ({ candidate, edit}) {

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
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.payrollMethod}
                                </div>
                            </div>
                        </div>
                    

                        {candidate.payrollMethod === 'Limited Company' &&
                            <>
                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Your company name
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.LTDCompanyName}
                                        </div>
                                    </div>
                                </div>

                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Your company reg number
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.LTDCompanyNumber}
                                        </div>
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
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.LTDIncorporationDate}
                                        </div>
                                    </div>
                                </div>

                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Your company VAT number
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='GB-box'>
                                            GB
                                        </div>
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.LTDCompanyVATNumber}
                                        </div>
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

                        {candidate.payrollMethod === 'PAYE' &&
                            <>
                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Employee statement
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                    </div>
                                </div>

                                <div className='candidate-page-detail-container employee-statement-container'>
                                    <div className='candidate-page-emp-statement'>
                                        <div className='emp-statement-box-one'>
                                            <input 
                                                type='radio'
                                                name='employeeStatement'
                                                id='employeeStatement-A'
                                                value='A'
                                                checked={candidate.employeeStatement === 'A'}
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
                                    <div className='candidate-page-emp-statement'>
                                        <div className='emp-statement-box-one'>
                                            <input 
                                                type='radio'
                                                name='employeeStatement'
                                                id='employeeStatement-B'
                                                value='B'
                                                checked={candidate.employeeStatement === 'B'}
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
                                    <div className='candidate-page-emp-statement'>
                                        <div className='emp-statement-box-one'>
                                            <input 
                                                type='radio'
                                                name='employeeStatement'
                                                id='employeeStatement-C'
                                                value='C'
                                                checked={candidate.employeeStatement === 'C'}
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
                                
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}