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
                                        readOnly
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
                                        readOnly
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
                                        <div className='candidate-page-detail-answer-container medical-details-input'>
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
                                        readOnly
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
                                        readOnly
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
                                        <div className='candidate-page-detail-answer-container medical-details-input'>
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
                                        readOnly
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
                                        readOnly
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
                                        <div className='candidate-page-detail-answer-container medical-details-input'>
                                            {candidate.stomachIntestinalYes}
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
                                        readOnly
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
                                        readOnly
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
                                        <div className='candidate-page-detail-answer-container medical-details-input'>
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
                                        readOnly
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
                                        readOnly
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
                                        <div className='candidate-page-detail-answer-container medical-details-input'>
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
                                        readOnly
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
                                        readOnly
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
                                        <div className='candidate-page-detail-answer-container medical-details-input'>
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
                                        readOnly
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
                                        readOnly
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
                                        <div className='candidate-page-detail-answer-container medical-details-input'>
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
                                        readOnly
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
                                        readOnly
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
                                        <div className='candidate-page-detail-answer-container medical-details-input'>
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
                                        readOnly
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
                                        readOnly
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
                                        <div className='candidate-page-detail-answer-container medical-details-input'>
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
                                        readOnly
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
                                        readOnly
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
                                        <div className='candidate-page-detail-answer-container medical-details-input'>
                                            {candidate.expectingMotherYes}
                                        </div>
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                If you have worked at night before, did this cause any illness
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='nightCauseIllness'
                                        value='Yes'
                                        checked={candidate.nightCauseIllness === 'Yes'}
                                        readOnly
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='nightCauseIllness'
                                        value='No'
                                        checked={candidate.nightCauseIllness === 'No'}
                                        readOnly
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {candidate.nightCauseIllness === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer'>
                                        <div className='candidate-page-detail-answer-container medical-details-input'>
                                            {candidate.nightCauseIllnessYes}
                                        </div>
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Would you like to discuss these with an Occupational Health Adviser
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='OHADiscussion'
                                        value='Yes'
                                        checked={candidate.OHADiscussion === 'Yes'}
                                        readOnly
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='OHADiscussion'
                                        value='No'
                                        checked={candidate.OHADiscussion === 'No'}
                                        readOnly
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Declaration
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        
                        <div className='candidate-page-medical-declaration'>
                            
                            <div className='candidate-page-declaration-words'>
                                I certify that all the answers given above are true to the best of my knowledge and belief. I understand that no medical details will be divulged without my permission to any person outside Occupational Health, but an opinion about my fitness for night work will be issued to management.
                            </div>
                            
                            <div className='candidate-page-detail-container'>
                                <div className='candidate-page-detail-label'>
                                    Agreed
                                </div>

                                <div className='candidate-page-detail-answer'>
                                    <div className='candidate-page-detail-answer-container-date'>
                                        <input
                                            type='checkbox'
                                            disabled
                                        />
                                        <label className='candidate-page-checkbox-label'>
                                            {candidate.medicalAgreementTimestamp}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            For Occupational Health
                        </div>
                    </div>
                    
                    <div className='candidate-page-card-container'>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Suitable to continue night working
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='continueNightWorking'
                                        value='Yes'
                                        checked={candidate.continueNightWorking === 'Yes'}
                                        readOnly
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='continueNightWorking'
                                        value='No'
                                        checked={candidate.continueNightWorking === 'No'}
                                        readOnly
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Requires OHA telephone review
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='OHATelephoneReview'
                                        value='Yes'
                                        checked={candidate.OHATelephoneReview === 'Yes'}
                                        readOnly
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='OHATelephoneReview'
                                        value='No'
                                        checked={candidate.OHATelephoneReview === 'No'}
                                        readOnly
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Requires OHA night worker health assessment
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='OHAHealthAssessment'
                                        value='Yes'
                                        checked={candidate.OHAHealthAssessment === 'Yes'}
                                        readOnly
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='OHAHealthAssessment'
                                        value='No'
                                        checked={candidate.OHAHealthAssessment === 'No'}
                                        readOnly
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Requires OHP referral
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='OHPReferral'
                                        value='Yes'
                                        checked={candidate.OHPReferral === 'Yes'}
                                        readOnly
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer'>
                                    <input 
                                        type='radio'
                                        name='OHPReferral'
                                        value='No'
                                        checked={candidate.OHPReferral === 'No'}
                                        readOnly
                                    />
                                    <label className='candidate-page-medical-rad-label'>
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Date OHA Answers
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container-date'>
                                    {candidate.OHADateConfirmed}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Recall Date
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container-date'>
                                    {candidate.OHARecallDate}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}