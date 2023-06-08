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
                            Bank Details
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Account holder name
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.accountHolderName}
                                </div>
                            </div>
                        </div>
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Bank account number
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.accountNumber}
                                </div>
                            </div>
                        </div>
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Bank account sort code
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.sortCode}
                                </div>
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

                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Do you have a student loan which is not fully repaid
                                    </div>

                                    <div className='candidate-page-detail-answer'>

                                        <div className='candidate-page-rad-answer-container'>
                                            
                                            <div className='candidate-page-rad-single-answer'>
                                                <input 
                                                    type='radio'
                                                    name='studentLoanPaid'
                                                    id='studentLoanPaid-yes'
                                                    value='Yes'
                                                    checked={candidate.studentLoanPaid === 'Yes'}
                                                />
                                                <label htmlFor='studentLoanPaid-yes' className='candidate-page-rad-label'>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className='candidate-page-rad-single-answer'>
                                                <input 
                                                    type='radio'
                                                    name='studentLoanPaid'
                                                    id='studentLoanPaid-no'
                                                    value='No'
                                                    checked={candidate.studentLoanPaid === 'No'}
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
                                            
                                            <div className='candidate-page-rad-single-answer'>
                                                <input 
                                                    type='radio'
                                                    name='finishStudies'
                                                    id='finishStudies-yes'
                                                    value='Yes'
                                                    checked={candidate.finishStudies === 'Yes'}
                                                />
                                                <label htmlFor='finishStudies-yes' className='candidate-page-rad-label'>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className='candidate-page-rad-single-answer'>
                                                <input 
                                                    type='radio'
                                                    name='finishStudies'
                                                    id='finishStudies-no'
                                                    value='No'
                                                    checked={candidate.finishStudies === 'No'}
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

                        {candidate.payrollMethod === 'Umbrella' &&
                            <>
                                <div className='candidate-page-detail-container'>
                                    <div className='candidate-page-detail-label'>
                                        Industry
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.umbrellaCompany}
                                        </div>
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
                                    <div className='candidate-page-rad-single-answer'>
                                        <input 
                                            type='radio'
                                            name='payMethod'
                                            id='payMethod-bacs'
                                            value='BACS'
                                            checked={candidate.payMethod === 'BACS'}
                                        />
                                        <label htmlFor='payMethod-bacs' className='candidate-page-rad-label'>
                                            BACS
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer'>
                                        <input 
                                            type='radio'
                                            name='payMethod'
                                            id='payMethod-cash'
                                            value='Cash'
                                            checked={candidate.payMethod === 'Cash'}
                                        />
                                        <label className='candidate-page-rad-label' htmlFor='payMethod-cash'>
                                            Cash
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer'>
                                        <input 
                                            type='radio'
                                            name='payMethod'
                                            id='payMethod-ppc'
                                            value='Pre-paid Card'
                                            checked={candidate.payMethod === 'Pre-paid Card'}
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
                                    <div className='candidate-page-rad-single-answer'>
                                        <input 
                                            type='radio'
                                            name='p60Received'
                                            id='p60Received-yes'
                                            value='Yes'
                                            checked={candidate.p60Received === 'Yes'}
                                        />
                                        <label htmlFor='p60Received-yes' className='candidate-page-rad-label'>
                                            Yes
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer'>
                                        <input 
                                            type='radio'
                                            name='p60Received'
                                            id='p60Received-no'
                                            value='No'
                                            checked={candidate.p60Received === 'No'}
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
                                P60 received
                            </div>

                            <div className='candidate-page-detail-answer'>

                                <div className='candidate-page-rad-answer-container'>
                                    <div className='candidate-page-rad-single-answer'>
                                        <input 
                                            type='radio'
                                            name='apprentice'
                                            id='apprentice-yes'
                                            value='Yes'
                                            checked={candidate.apprentice === 'Yes'}
                                        />
                                        <label htmlFor='apprentice-yes' className='candidate-page-rad-label'>
                                            Yes
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer'>
                                        <input 
                                            type='radio'
                                            name='apprentice'
                                            id='apprentice-no'
                                            value='No'
                                            checked={candidate.apprentice === 'No'}
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