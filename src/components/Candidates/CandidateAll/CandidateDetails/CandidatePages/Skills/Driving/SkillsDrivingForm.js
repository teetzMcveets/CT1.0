import React from 'react';
import '../../CandidateDetailsForm.css';

export default function SkillsDrivingForm ({
    save,
    edit,
    handleOnChange,
    handleTrailersChange,
    updatedSkills,
}) {

    const trailersArray = [
        'Box',
        'Car Transporter',
        'Container',
        'Curtainsider',
        'Double Decker',
        'Draw Bar A Frame',
        'Draw Bar Close Couple',
        'Flat Bed',
        'Fridge',
        'Skips Chains',
        'Skips Roll on Roll off',
        'Tail Lift',
        'Tanker',
        'Tipper',
    ];

    const chunkSize = 3;
    const trailersChunks = [];

    for (let i = 0; i < trailersArray.length; i += chunkSize) {
        trailersChunks.push(trailersArray.slice(i, i+chunkSize));
    }

    return (
        <>
            <div className='candidate-page-left-container'>
                <div className='candidate-page-button-container'>
                    <button
                        className='button-secondary'
                        onClick={save}
                    >
                        <i className='fas fa-save'></i>
                    </button>

                    <div style={{ height: 'var(--med2)' }}></div>
                        
                    <button 
                        className='button-secondary'
                        onClick={edit}    
                    >
                        <i className='fas fa-times'></i>
                    </button>
                </div>
            </div>

            <div className='candidate-page-right-candidate'>
                <div className='candidate-page-full-page'>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Trailers
                        </div>
                    </div>

                    
                        <div className='candidate-page-card-container' >
                            {trailersChunks.map((chunk, idx) => (
                                <div className='skills-box-container' key={`trailer-group-${idx}`} >
                                    {chunk.map(trailersValue => (
                                        <div className='skills-single-line skills-single-line-edit' key={trailersValue}>
                                            <input 
                                                type='checkbox'
                                                id={`trailer-${trailersValue}`}
                                                checked={updatedSkills.trailers.includes(trailersValue)}
                                                onChange={(e) => handleTrailersChange(e, trailersValue)}
                                            />
                                            <label className='skills-box-label' htmlFor={`trailer-${trailersValue}`}>
                                                {trailersValue}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            ))}
                            
                        </div>
                </div>
            </div>
        </>
    )
}