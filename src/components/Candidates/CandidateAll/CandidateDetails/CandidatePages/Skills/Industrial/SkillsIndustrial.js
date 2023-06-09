import React from 'react';
import '../../CandidateDetailsForm.css';

export default function SkillsIndustrial ({
    edit,
    candidate,
}) {

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
                
                
                
                </div>
            </div>
        </>
    )
}