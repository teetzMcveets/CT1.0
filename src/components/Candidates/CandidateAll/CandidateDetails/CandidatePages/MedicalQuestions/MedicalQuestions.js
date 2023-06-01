import React from 'react';

export default function MedicalQuestions ({ candidate, edit }) {

    return (
        <>
            <div style={{ display: 'flex' }}>
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

                    <div className='card-container'>

                            <div className='questionnaire-title'>
                                Do you Suffer any of the following - 
                            </div>
                        
                        <div className='medical-detail-container'>
                            <div className='detail-label'>
                                Diabetes
                            </div>

                            <div className='detail-answer'>
                                <div className='answer-border'>
                                    {candidate.diabetes}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}