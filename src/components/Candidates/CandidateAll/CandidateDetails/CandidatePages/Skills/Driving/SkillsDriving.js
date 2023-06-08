import React from 'react';
import '../../CandidateDetailsForm.css';

export default function SkillsDriving () {

    return (
        <>
            <div className='candidate-page-left-container'>
                <div className='candidate-page-button-container'>
                    <button 
                        className='button-secondary'
                        // onClick={edit}
                    >
                        <i className='fas fa-pencil-alt'></i>
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

                    <div className='candidate-page-card-container'>
                        <div className='skills-box-container'>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                    id='box'
                                />
                                <label className='skills-box-label' htmlFor='box'>
                                    Box
                                </label>
                            </div>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                />
                                <label className='skills-box-label'>
                                    Box
                                </label>
                            </div>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                />
                                <label className='skills-box-label'>
                                    Box
                                </label>
                            </div>
                        </div>

                        <div className='skills-box-container'>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                />
                                <label className='skills-box-label'>
                                    Box
                                </label>
                            </div>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                />
                                <label className='skills-box-label'>
                                    Box
                                </label>
                            </div>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                />
                                <label className='skills-box-label'>
                                    Box
                                </label>
                            </div>
                        </div>

                        <div className='skills-box-container'>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                />
                                <label className='skills-box-label'>
                                    Box
                                </label>
                            </div>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                />
                                <label className='skills-box-label'>
                                    Box
                                </label>
                            </div>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                />
                                <label className='skills-box-label'>
                                    Box
                                </label>
                            </div>
                        </div>
                    </div>
                
                
                
                </div>
            </div>
        </>
    )
}