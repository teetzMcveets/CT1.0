import React from 'react';
import '../../CandidateDetailsForm.css';

export default function SkillsDriving ({
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
                                    id='trailer-box'
                                />
                                <label className='skills-box-label' htmlFor='trailer-box'>
                                    Box
                                </label>
                            </div>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                    id='trailer-carTransporter'
                                />
                                <label className='skills-box-label' htmlFor='trailer-carTransporter'>
                                    Car Transporter
                                </label>
                            </div>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                    id='trailer-container'
                                />
                                <label className='skills-box-label' htmlFor='trailer-container'>
                                    Containers
                                </label>
                            </div>
                        </div>

                        <div className='skills-box-container'>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                    id='trailer-curtainsider'
                                />
                                <label className='skills-box-label' htmlFor='trailer-curtainsider'>
                                    Curtainsider
                                </label>
                            </div>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                    id='trailer-doubleDecker'
                                />
                                <label className='skills-box-label' htmlFor='trailer-doubleDecker'>
                                    Double Decker
                                </label>
                            </div>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                    id='trailer-drawBarAFrame'
                                />
                                <label className='skills-box-label' htmlFor='trailer-drawBarAFrame'>
                                    Draw Bar A Frame
                                </label>
                            </div>
                        </div>

                        <div className='skills-box-container'>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                    id='trailer-drawBarCloseCouple'
                                />
                                <label className='skills-box-label' htmlFor='trailer-drawBarCloseCouple'>
                                    Draw Bar Close Couple
                                </label>
                            </div>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                    id='trailer-flatBed'
                                />
                                <label className='skills-box-label' htmlFor='trailer-flatBed'>
                                    Flat Bed
                                </label>
                            </div>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                    id='trailer-fridges'
                                />
                                <label className='skills-box-label' htmlFor='trailer-fridges'>
                                    Fridges
                                </label>
                            </div>
                        </div>

                        <div className='skills-box-container'>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                    id='trailer-skipsChains'
                                />
                                <label className='skills-box-label' htmlFor='trailer-skipsChains'>
                                    Skips Chains
                                </label>
                            </div>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                    id='trailer-skipsRollOnRollOff'
                                />
                                <label className='skills-box-label' htmlFor='trailer-skipsRollOnRollOff'>
                                    Skips Roll on Roll off
                                </label>
                            </div>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                    id='trailer-tailLift'
                                />
                                <label className='skills-box-label' htmlFor='trailer-tailLift'>
                                    Tail Lift
                                </label>
                            </div>
                        </div>

                        <div className='skills-box-container'>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                    id='trailer-tankers'
                                />
                                <label className='skills-box-label' htmlFor='trailer-tankers'>
                                    Tankers
                                </label>
                            </div>
                            <div className='skills-single-line'>
                                <input 
                                    type='checkbox'
                                    id='trailer-tipper'
                                />
                                <label className='skills-box-label' htmlFor='trailer-tipper'>
                                    Tipper
                                </label>
                            </div>
                            <div className='skills-single-line'>
                            </div>
                        </div>
                    </div>
                
                
                
                </div>
            </div>
        </>
    )
}