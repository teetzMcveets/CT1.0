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
                    

                        {candidate.payrollMethod === 'limitedCompany' &&
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
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}