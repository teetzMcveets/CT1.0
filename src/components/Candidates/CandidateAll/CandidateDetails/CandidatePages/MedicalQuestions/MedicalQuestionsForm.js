import React from 'react';
import '../CandidateDetailsForm.css';

export default function MedicalQuestionsForm ({
    save,
    edit,
    candidate,
    updatedMedicalQuestions,
    handleOnChange,
}) {
    
    return (
        <>
            <div>
                <div>
                    <div className='edit-button-container'>
                        <div>
                            <button
                                className='button-secondary'
                                onClick={save}
                            >
                                <i className='fas fa-save'></i>
                            </button>
                            
                        </div>
                        
                        <button 
                            className='button-secondary'
                            onClick={edit}    
                        >
                            <i className='fas fa-times'></i>
                        </button>
                    </div>
                </div>
                <div style={{ width: 500 }}>
                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Medical Questions
                        </div>
                    </div>

                    <div className='medical-card-container'>

                        
                        <div className='detail-container medical-detail-container'>
                            <div className='medical-detail-container'>
                                Do you suffer from any of the following:
                            </div>
                            
                            <div className='medical-detail-label'>
                                Diabetes
                            </div>

                            <div className='rad-detail-answer'>
                                <div className='medical-rad-container'>
                                    <div className='rad-detail rad-detail-edit'>
                                        <div className='rad-detail-input'>
                                            <input 
                                                type='radio'
                                                name='diabetes'
                                                id='diabetesYes'
                                                value='Yes'
                                                checked={updatedMedicalQuestions.diabetes === 'Yes'}
                                                onChange={(e) => handleOnChange('diabetes', e.target.value)}
                                            />
                                        </div>
                                        <div className='rad-detail-label'>
                                            <label htmlFor='diabetesYes'>
                                                Yes
                                            </label>
                                        </div>
                                    </div>
                                    <div className='rad-detail rad-detail-edit'>
                                        <div className='rad-detail-input'>
                                            <input 
                                                type='radio'
                                                name='diabetes'
                                                id='diabetesNo'
                                                value='No'
                                                checked={updatedMedicalQuestions.diabetes === 'No'}
                                                onChange={(e) => handleOnChange('diabetes', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='rad-detail-label' htmlFor='diabetesNo'>
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='detail-container medical-detail-container'>
                            
                            <div className='medical-detail-label'>
                                Heart or circulatory problems
                            </div>

                            <div className='medical-detail-answer'>
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