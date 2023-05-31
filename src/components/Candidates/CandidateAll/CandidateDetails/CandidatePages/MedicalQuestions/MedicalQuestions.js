import React from 'react';

export default function MedicalQuestions ({ candidate, edit }) {

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
                            Medical Questions
                        </div>
                    </div>

                    <div className='medical-card-container'>

                        
                        
                        <div className='detail-container medical-detail-container'>
                            <div className='detail-container'>
                                Do you suffer from any of the following:
                            </div>
                            
                            <div className='medical-detail-label'>
                                First Name
                            </div>

                            <div className='medical-detail-answer'>
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