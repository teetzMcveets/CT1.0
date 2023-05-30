import React from 'react';
import '../CandidateDetailsForm.css';

export default function PreferenceQuestions ({
    candidate,
    edit,

}) {

    return (
        <>
            <div style={{ display: 'flex'}}>
                <div>
                    <div className='edit-button-container'>
                        <div>
                            <button 
                                className='button-secondary'
                                onClick={edit}
                            >
                                <i className='fas fa-pencil-alt'></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Interview Questions
                        </div>
                    </div>

                    <div className='card-container'>
                        
                        <div className='detail-container'>
                            <div className='detail-label'>
                                First Name
                            </div>

                            <div className='detail-answer'>
                                <div className='answer-border'>
                                    {candidate.firstName}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}