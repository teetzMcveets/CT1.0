import React from 'react';

export default function MedicalQuestions ({ candidate, edit }) {

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
                            Medical Questions
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>

                        <div className='candidate-page-detail-container'>
                            Do you suffer from any of these conditions?
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Diabetes
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='diabetes'
                                        value='Yes'
                                        checked={candidate.diabetes === 'Yes'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='diabetes'
                                        value='No'
                                        checked={candidate.diabetes === 'No'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {candidate.diabetes === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.diabetesYes}
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}