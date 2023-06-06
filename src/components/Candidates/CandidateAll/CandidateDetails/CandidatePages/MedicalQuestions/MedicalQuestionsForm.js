import React from 'react';
import '../CandidateDetailsForm.css';
import getToday from '../../../../../../utilities/getToday';

export default function MedicalQuestionsForm ({
    save,
    edit,
    candidate,
    updatedMedicalQuestions,
    handleOnChange,
    handleMedicalAgreementChange,
    getOneYearAhead,
}) {
    
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
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='diabetes'
                                        id='diabetes-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.diabetes === 'Yes'}
                                        onChange={(e) => handleOnChange('diabetes', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='diabetes-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='diabetes'
                                        id='diabetes-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.diabetes === 'No'}
                                        onChange={(e) => handleOnChange('diabetes', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='diabetes-no'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {updatedMedicalQuestions.diabetes === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer medical-details-input'>
                                        <input
                                            type='text'
                                            className='candidate-page-input'
                                            value={updatedMedicalQuestions.diabetesYes}
                                            onChange={(e) => handleOnChange('diabetesYes', e.target.value)}
                                        />
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Heart or circulatory problems
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='heartCirculatory'
                                        id='heartCirculatory-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.heartCirculatory === 'Yes'}
                                        onChange={(e) => handleOnChange('heartCirculatory', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='heartCirculatory-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='heartCirculatory'
                                        id='heartCirculatory-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.heartCirculatory === 'No'}
                                        onChange={(e) => handleOnChange('heartCirculatory', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='heartCirculatory-no'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {updatedMedicalQuestions.heartCirculatory === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer medical-details-input'>
                                        <input
                                            type='text'
                                            className='candidate-page-input'
                                            value={updatedMedicalQuestions.heartCirculatoryYes}
                                            onChange={(e) => handleOnChange('heartCirculatoryYes', e.target.value)}
                                        />
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Stomach or intestinal problems (such as an ulcer)
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='stomachIntestinal'
                                        id='stomachIntestinal-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.stomachIntestinal === 'Yes'}
                                        onChange={(e) => handleOnChange('stomachIntestinal', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='stomachIntestinal-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='stomachIntestinal'
                                        id='stomachIntestinal-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.stomachIntestinal === 'No'}
                                        onChange={(e) => handleOnChange('stomachIntestinal', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='stomachIntestinal-no'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {updatedMedicalQuestions.stomachIntestinal === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer medical-details-input'>
                                        <input
                                            type='text'
                                            className='candidate-page-input'
                                            value={updatedMedicalQuestions.stomachIntestinalYes}
                                            onChange={(e) => handleOnChange('stomachIntestinalYes', e.target.value)}
                                        />
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Any medical condition which causes difficulty sleeping
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='difficultySleeping'
                                        id='difficultySleeping-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.difficultySleeping === 'Yes'}
                                        onChange={(e) => handleOnChange('difficultySleeping', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='difficultySleeping-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='difficultySleeping'
                                        id='difficultySleeping-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.difficultySleeping === 'No'}
                                        onChange={(e) => handleOnChange('difficultySleeping', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='difficultySleeping-no'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {updatedMedicalQuestions.difficultySleeping === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer medical-details-input'>
                                        <input
                                            type='text'
                                            className='candidate-page-input'
                                            value={updatedMedicalQuestions.difficultySleepingYes}
                                            onChange={(e) => handleOnChange('difficultySleepingYes', e.target.value)}
                                        />
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Chronic chest disorders where night time symptoms may be particularly troublesome
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='chronicChestNight'
                                        id='chronicChestNight-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.chronicChestNight === 'Yes'}
                                        onChange={(e) => handleOnChange('chronicChestNight', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='chronicChestNight-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='chronicChestNight'
                                        id='chronicChestNight-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.chronicChestNight === 'No'}
                                        onChange={(e) => handleOnChange('chronicChestNight', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='chronicChestNight-no'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {updatedMedicalQuestions.chronicChestNight === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer medical-details-input'>
                                        <input
                                            type='text'
                                            className='candidate-page-input'
                                            value={updatedMedicalQuestions.chronicChestNightYes}
                                            onChange={(e) => handleOnChange('chronicChestNightYes', e.target.value)}
                                        />
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Any medical condition requiring medication on a strict timetable
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='conditionMedicationTime'
                                        id='conditionMedicationTime-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.conditionMedicationTime === 'Yes'}
                                        onChange={(e) => handleOnChange('conditionMedicationTime', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='conditionMedicationTime-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='conditionMedicationTime'
                                        id='conditionMedicationTime-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.conditionMedicationTime === 'No'}
                                        onChange={(e) => handleOnChange('conditionMedicationTime', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='conditionMedicationTime-no'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {updatedMedicalQuestions.conditionMedicationTime === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer medical-details-input'>
                                        <input
                                            type='text'
                                            className='candidate-page-input'
                                            value={updatedMedicalQuestions.conditionMedicationTimeYes}
                                            onChange={(e) => handleOnChange('conditionMedicationTimeYes', e.target.value)}
                                        />
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Any medical condition where the timing of meals is particularly important
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='conditionMealsTime'
                                        id='conditionMealsTime-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.conditionMealsTime === 'Yes'}
                                        onChange={(e) => handleOnChange('conditionMealsTime', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='conditionMealsTime-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='conditionMealsTime'
                                        id='conditionMealsTime-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.conditionMealsTime === 'No'}
                                        onChange={(e) => handleOnChange('conditionMealsTime', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='conditionMealsTime-no'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {updatedMedicalQuestions.conditionMealsTime === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer medical-details-input'>
                                        <input
                                            type='text'
                                            className='candidate-page-input'
                                            value={updatedMedicalQuestions.conditionMealsTimeYes}
                                            onChange={(e) => handleOnChange('conditionMealsTimeYes', e.target.value)}
                                        />
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Any mental health problems which may be affected by night work
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='mentalHealthNights'
                                        id='mentalHealthNights-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.mentalHealthNights === 'Yes'}
                                        onChange={(e) => handleOnChange('mentalHealthNights', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='mentalHealthNights-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='mentalHealthNights'
                                        id='mentalHealthNights-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.mentalHealthNights === 'No'}
                                        onChange={(e) => handleOnChange('mentalHealthNights', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='mentalHealthNights-no'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {updatedMedicalQuestions.mentalHealthNights === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer medical-details-input'>
                                        <input
                                            type='text'
                                            className='candidate-page-input'
                                            value={updatedMedicalQuestions.mentalHealthNightsYes}
                                            onChange={(e) => handleOnChange('mentalHealthNightsYes', e.target.value)}
                                        />
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Any other medical conditions which may affect your ability to work safely at night
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='otherConditionsNight'
                                        id='otherConditionsNight-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.otherConditionsNight === 'Yes'}
                                        onChange={(e) => handleOnChange('otherConditionsNight', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='otherConditionsNight-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='otherConditionsNight'
                                        id='otherConditionsNight-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.otherConditionsNight === 'No'}
                                        onChange={(e) => handleOnChange('otherConditionsNight', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='otherConditionsNight-no'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {updatedMedicalQuestions.otherConditionsNight === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer medical-details-input'>
                                        <input
                                            type='text'
                                            className='candidate-page-input'
                                            value={updatedMedicalQuestions.otherConditionsNightYes}
                                            onChange={(e) => handleOnChange('otherConditionsNightYes', e.target.value)}
                                        />
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Are you a new or expecting mother
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='expectingMother'
                                        id='expectingMother-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.expectingMother === 'Yes'}
                                        onChange={(e) => handleOnChange('expectingMother', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='expectingMother-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='expectingMother'
                                        id='expectingMother-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.expectingMother === 'No'}
                                        onChange={(e) => handleOnChange('expectingMother', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='expectingMother-no'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {updatedMedicalQuestions.expectingMother === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer medical-details-input'>
                                        <input
                                            type='text'
                                            className='candidate-page-input'
                                            value={updatedMedicalQuestions.expectingMotherYes}
                                            onChange={(e) => handleOnChange('expectingMotherYes', e.target.value)}
                                        />
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                If you have worked at night before, did this cause any illness
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='nightCauseIllness'
                                        id='nightCauseIllness-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.nightCauseIllness === 'Yes'}
                                        onChange={(e) => handleOnChange('nightCauseIllness', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='nightCauseIllness-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='nightCauseIllness'
                                        id='nightCauseIllness-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.nightCauseIllness === 'No'}
                                        onChange={(e) => handleOnChange('nightCauseIllness', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='nightCauseIllness-no'>
                                        No
                                    </label>
                                </div>
                            </div>
                            {updatedMedicalQuestions.nightCauseIllness === 'Yes' &&
                                <>
                                    <div className='candidate-page-medical-detail-label'>
                                        Details
                                    </div>

                                    <div className='candidate-page-detail-answer medical-details-input'>
                                        <input
                                            type='text'
                                            className='candidate-page-input'
                                            value={updatedMedicalQuestions.nightCauseIllnessYes}
                                            onChange={(e) => handleOnChange('nightCauseIllnessYes', e.target.value)}
                                        />
                                    </div>
                                </>
                            }
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                            Would you like to discuss these with an Occupational Health Adviser
                            </div>

                            <div className='candidate-page-medical-detail-answer'>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='OHADiscussion'
                                        id='OHADiscussion-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.OHADiscussion === 'Yes'}
                                        onChange={(e) => handleOnChange('OHADiscussion', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='OHADiscussion-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='OHADiscussion'
                                        id='OHADiscussion-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.OHADiscussion === 'No'}
                                        onChange={(e) => handleOnChange('OHADiscussion', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='OHADiscussion-no'>
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
                                    <div className='candidate-page-detail-answer-container-date candidate-page-agreement-edit'>
                                        <input
                                            type='checkbox'
                                            checked={!!updatedMedicalQuestions.medicalAgreementTimestamp}
                                            onChange={handleMedicalAgreementChange}
                                        />
                                        <label className='candidate-page-checkbox-label edit'>
                                            {updatedMedicalQuestions.medicalAgreementTimestamp}
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
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='continueNightWorking'
                                        id='continueNightWorking-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.continueNightWorking === 'Yes'}
                                        onChange={(e) => handleOnChange('continueNightWorking', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='continueNightWorking-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='continueNightWorking'
                                        id='continueNightWorking-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.continueNightWorking === 'No'}
                                        onChange={(e) => handleOnChange('continueNightWorking', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='continueNightWorking-no'>
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
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='OHATelephoneReview'
                                        id='OHATelephoneReview-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.OHATelephoneReview === 'Yes'}
                                        onChange={(e) => handleOnChange('OHATelephoneReview', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='OHATelephoneReview-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='OHATelephoneReview'
                                        id='OHATelephoneReview-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.OHATelephoneReview === 'No'}
                                        onChange={(e) => handleOnChange('OHATelephoneReview', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='OHATelephoneReview-no'>
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
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='OHAHealthAssessment'
                                        id='OHAHealthAssessment-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.OHAHealthAssessment === 'Yes'}
                                        onChange={(e) => handleOnChange('OHAHealthAssessment', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='OHAHealthAssessment-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='OHAHealthAssessment'
                                        id='OHAHealthAssessment-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.OHAHealthAssessment === 'No'}
                                        onChange={(e) => handleOnChange('OHAHealthAssessment', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='OHAHealthAssessment-no'>
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
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='OHPReferral'
                                        id='OHPReferral-yes'
                                        value='Yes'
                                        checked={updatedMedicalQuestions.OHPReferral === 'Yes'}
                                        onChange={(e) => handleOnChange('OHPReferral', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='OHPReferral-yes'>
                                        Yes
                                    </label>
                                </div>
                                <div className='candidate-page-rad-single-answer medical-rad-answer-edit'>
                                    <input 
                                        type='radio'
                                        name='OHPReferral'
                                        id='OHPReferral-no'
                                        value='No'
                                        checked={updatedMedicalQuestions.OHPReferral === 'No'}
                                        onChange={(e) => handleOnChange('OHPReferral', e.target.value)}
                                    />
                                    <label className='candidate-page-medical-rad-label' htmlFor='OHPReferral-no'>
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
                                <input 
                                    type='date'
                                    className='candidate-page-input-date'
                                    value={updatedMedicalQuestions.OHAdateConfirmed}
                                    onChange={(e) => {
                                        handleOnChange('OHAdateConfirmed', e.target.value);
                                        handleOnChange('OHARecallDate', getOneYearAhead(e.target.value));
                                    }}
                                />
                                <button 
                                    className='button-primary'
                                    onClick={() => {
                                        const today = getToday();
                                        handleOnChange('OHAdateConfirmed', today);
                                        handleOnChange('OHARecallDate', getOneYearAhead(today));
                                    }}
                                >
                                    Today
                                </button>
                            </div>
                        </div>

                        <div className='candidate-page-medical-detail-container'>
                            <div className='candidate-page-medical-detail-label'>
                                Recall Date
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input 
                                    type='date'
                                    disabled
                                    className='candidate-page-input-date candidate-page-disabled-input'
                                    value={updatedMedicalQuestions.OHARecallDate}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}