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

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Heart or circulatory problems
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='heartCirculatory'
                                        value='Yes'
                                        checked={candidate.heartCirculatory === 'Yes'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='heartCirculatory'
                                        value='No'
                                        checked={candidate.heartCirculatory === 'No'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {candidate.heartCirculatory === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.heartCirculatoryYes}
                                        </div>
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Stomach or intestinal problems (such as an ulcer)
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='stomachIntestinal'
                                        value='Yes'
                                        checked={candidate.stomachIntestinal === 'Yes'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='stomachIntestinal'
                                        value='No'
                                        checked={candidate.stomachIntestinal === 'No'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {candidate.stomachIntestinal === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.heartCirculatoryYes}
                                        </div>
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Any medical condition which causes difficulty sleeping
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='difficultySleeping'
                                        value='Yes'
                                        checked={candidate.difficultySleeping === 'Yes'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='difficultySleeping'
                                        value='No'
                                        checked={candidate.difficultySleeping === 'No'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {candidate.difficultySleeping === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.difficultySleepingYes}
                                        </div>
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Chronic chest disorders where night time symptoms may be particularly troublesome
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='chronicChestNight'
                                        value='Yes'
                                        checked={candidate.chronicChestNight === 'Yes'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='chronicChestNight'
                                        value='No'
                                        checked={candidate.chronicChestNight === 'No'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {candidate.chronicChestNight === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.chronicChestNightYes}
                                        </div>
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Any medical condition requiring medication on a strict timetable
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='conditionMedicationTime'
                                        value='Yes'
                                        checked={candidate.conditionMedicationTime === 'Yes'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='conditionMedicationTime'
                                        value='No'
                                        checked={candidate.conditionMedicationTime === 'No'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {candidate.conditionMedicationTime === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.conditionMedicationTimeYes}
                                        </div>
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Any medical condition where the timing of meals is particularly important
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='conditionMealsTime'
                                        value='Yes'
                                        checked={candidate.conditionMealsTime === 'Yes'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='conditionMealsTime'
                                        value='No'
                                        checked={candidate.conditionMealsTime === 'No'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {candidate.conditionMealsTime === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.conditionMealsTimeYes}
                                        </div>
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Any mental health problems which may be affected by night work
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='mentalHealthNights'
                                        value='Yes'
                                        checked={candidate.mentalHealthNights === 'Yes'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='mentalHealthNights'
                                        value='No'
                                        checked={candidate.mentalHealthNights === 'No'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {candidate.mentalHealthNights === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.mentalHealthNightsYes}
                                        </div>
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Any other medical conditions which may affect your ability to work safely at night
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='otherConditionsNight'
                                        value='Yes'
                                        checked={candidate.otherConditionsNight === 'Yes'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='otherConditionsNight'
                                        value='No'
                                        checked={candidate.otherConditionsNight === 'No'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {candidate.otherConditionsNight === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.otherConditionsNightYes}
                                        </div>
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Are you a new or expecting mother
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='expectingMother'
                                        value='Yes'
                                        checked={candidate.expectingMother === 'Yes'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='expectingMother'
                                        value='No'
                                        checked={candidate.expectingMother === 'No'}
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {candidate.expectingMother === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='candidate-page-detail-answer-container'>
                                            {candidate.expectingMotherYes}
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