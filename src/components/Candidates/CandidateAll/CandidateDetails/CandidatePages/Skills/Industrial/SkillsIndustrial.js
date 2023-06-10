import React from 'react';
import '../../CandidateDetailsForm.css';

export default function SkillsIndustrial ({
    edit,
    candidate,
}) {
    const workEnvironmentArray = [
        'Indoor',
        'Outdoor',
        'Hot',
        'Chilled',
        'Freezer',
        'Remove Jewellery',
        'Handball',
        'Heavy Lifting',
        'Dusty',
        'Meat',
    ]

    const chunkSize = 3;
    const workEnvironmentChunk = [];

    for (let i = 0; i < workEnvironmentArray.length; i += chunkSize) {
        workEnvironmentChunk.push(workEnvironmentArray.slice(i, i+chunkSize));
    }

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
                            Work Environment
                        </div>
                    </div>

                    <div className='candidate-page-card-container' >
                        {workEnvironmentChunk.map((chunk, idx) => (
                            <div className='skills-box-container' key={`otherVehicles-group-${idx}`} >
                                {chunk.concat(Array(3 - chunk.length).fill(null)).map((workEnvironmentValue, index) => (
                                    workEnvironmentValue ? (
                                        <div className='skills-single-line' key={workEnvironmentValue}>
                                            <input 
                                                type='checkbox'
                                                id={`workEnvironment-${workEnvironmentValue}`}
                                                checked={candidate.workEnvironment.includes(workEnvironmentValue)}
                                            />
                                            <label className='skills-box-label' htmlFor={`workEnvironment-${workEnvironmentValue}`}>
                                                {workEnvironmentValue}
                                            </label>
                                        </div>
                                    ) : (
                                        <div key={`empty-${index}`} className='skills-single-line'></div>
                                    )
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Avoid or Additional
                        </div>
                    </div>

                    <div className='candidate-page-card-container' >

                        <div className='industrial-additional-details'>
                            <div className='answer-border candidate-page-input-text noEdit'>
                                {candidate.additionalComments}
                            </div>
                        </div>  

                    </div>
                
                </div>
            </div>
        </>
    )
}