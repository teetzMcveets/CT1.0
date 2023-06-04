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

                        <div>
                            <div>
                                Diabetes
                            </div>

                            <div>
                                <div>
                                    <input 
                                        type='radio'
                                    />
                                    <label className='candidate-page-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div>
                                    <input 
                                        type='radio'
                                    />
                                    <label className='candidate-page-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}