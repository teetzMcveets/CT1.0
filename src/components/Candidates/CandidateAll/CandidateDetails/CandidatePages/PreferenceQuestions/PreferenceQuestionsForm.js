import React from 'react'
import '../CandidateDetailsForm.css';

export default function PreferenceQuestionsForm ({
    edit,
    save,
    candidate,
    updatedPreferenceQuestions,
    handleOnChange,
    handleValueChange,
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


                    {/* INTERVIEW QUESTIONS  */}
                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Interview Questions
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Start Date
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <input 
                                    type='date'
                                    className='candidate-page-input-date'
                                    value={updatedPreferenceQuestions.startDate}
                                    onChange={(e) => handleOnChange('startDate', e.target.value)}
                                />
                                <input 
                                    type='checkbox'
                                    style={{ margin: '0 10px 0 20px'}}
                                    id='start-work-asap'
                                />
                                <label style={{ display: 'flex', alignItems: 'center'}} htmlFor='start-work-asap'>
                                    ASAP
                                </label>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Commute type
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <select 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedPreferenceQuestions.commuteType}
                                    onChange={(e) => handleOnChange('commuteType', e.target.value)}
                                >
                                    <option value=''>Please select...</option>
                                    <option value='Own car'>Own car</option>
                                    <option value='Public transport'>Public Transport</option>
                                    <option value='Bicycle'>Bicycle</option>
                                </select>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Travel for work
                            </div>

                            <div className='candidate-page-detail-answer'>

                                <div className='candidate-page-rad-answer-container'>
                                    
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input
                                            type='radio'
                                            name='travelForWork'
                                            id='travelForWork-1'
                                            value='0-1 miles'
                                            checked={updatedPreferenceQuestions.travelForWork === '0-1 miles'}
                                            onChange={(e) => handleOnChange('travelForWork', e.target.value)}
                                        />
                                        <label htmlFor='travelForWork-1' className='candidate-page-rad-label'>
                                            0-1 miles
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='travelForWork'
                                            id='travelForWork-2'
                                            value='1-2 miles'
                                            checked={updatedPreferenceQuestions.travelForWork === '1-2 miles'}
                                            onChange={(e) => handleOnChange('travelForWork', e.target.value)}
                                        />
                                        <label className='candidate-page-rad-label' htmlFor='travelForWork-2'>
                                            1-2 miles
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                            <input 
                                                type='radio'
                                                name='travelForWork'
                                                id='travelForWork-3'
                                                value='2-4 miles'
                                                checked={updatedPreferenceQuestions.travelForWork === '2-4 miles'}
                                                onChange={(e) => handleOnChange('travelForWork', e.target.value)}
                                            />
                                            <label className='candidate-page-rad-label' htmlFor='travelForWork-3'>
                                                2-4 miles
                                            </label>
                                        </div>
                                        <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                            <input 
                                                type='radio'
                                                name='travelForWork'
                                                id='travelForWork-4'
                                                value='4-6 miles'
                                                checked={updatedPreferenceQuestions.travelForWork === '4-6 miles'}
                                                onChange={(e) => handleOnChange('travelForWork', e.target.value)}
                                            />
                                            <label className='candidate-page-rad-label' htmlFor='travelForWork-4'>
                                                4-6 miles
                                            </label>
                                        </div>
                                        <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                            <input 
                                                type='radio'
                                                name='travelForWork'
                                                id='travelForWork-5'
                                                value='6-10 miles'
                                                checked={updatedPreferenceQuestions.travelForWork === '6-10 miles'}
                                                onChange={(e) => handleOnChange('travelForWork', e.target.value)}
                                            />
                                            <label className='candidate-page-rad-label' htmlFor='travelForWork-5'>
                                                6-10 miles
                                            </label>
                                        </div>
                                        <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                            <input 
                                                type='radio'
                                                name='travelForWork'
                                                id='travelForWork-6'
                                                value='10+ miles'
                                                checked={updatedPreferenceQuestions.travelForWork === '10+ miles'}
                                                onChange={(e) => handleOnChange('travelForWork', e.target.value)}
                                            />
                                            <label className='candidate-page-rad-label' htmlFor='travelForWork-6'>
                                                10+ miles
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                PPE Owned    
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-checkbox-container candidate-page-checkbox-answer-edit'>
                                    {['HiViz', 'Safety Boots'].map((ppeOwnedValue) => (
                                        <div className='candidate-page-checkbox-single-answer' key={ppeOwnedValue}>
                                                <input 
                                                    type='checkbox'
                                                    checked={updatedPreferenceQuestions.ppeOwned.includes(ppeOwnedValue)}
                                                    // onChange={(e) => handlePPEOwnedChange(e, ppeOwnedValue)}
                                                    onChange={(e) => handleValueChange(e, ppeOwnedValue, "ppeOwned", "preference")}
                                                    id={`ppeOwned-${ppeOwnedValue}`}
                                                />
                                                <label className='candidate-page-checkbox-label' htmlFor={`ppeOwned-${ppeOwnedValue}`}>
                                                    {ppeOwnedValue}
                                                </label>
                                        </div>    
                                    ))}      
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Minimum Pay
                            </div>

                            <div className='candidate-page-detail-answer'>
                            <input 
                                    type='tel'
                                    className='candidate-page-input'
                                    value={updatedPreferenceQuestions.minPay}
                                    onChange={(e) => handleOnChange('minPay', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Smoker
                            </div>

                            <div className='candidate-page-detail-answer'>

                                <div className='candidate-page-rad-answer-container'>

                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                            <input 
                                                type='radio'
                                                name='smoker'
                                                id='smoker-yes'
                                                value='Yes'
                                                checked={updatedPreferenceQuestions.smoker === 'Yes'}
                                                onChange={(e) => handleOnChange('smoker', e.target.value)}
                                            />
                                            <label htmlFor='smoker-yes' className='candidate-page-rad-label'>
                                                Yes
                                            </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                            <input 
                                                type='radio'
                                                name='smoker'
                                                id='smoker-no'
                                                value='No'
                                                checked={updatedPreferenceQuestions.smoker === 'No'}
                                                onChange={(e) => handleOnChange('smoker', e.target.value)}
                                            />
                                            <label className='candidate-page-rad-label' htmlFor='smoker-no'>
                                                No
                                            </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        {candidate.industry === 'Industrial' && 
                            <div className='candidate-page-detail-container'>
                                <div className='candidate-page-detail-label'>
                                    License
                                </div>

                                <div className='candidate-page-detail-answer'>

                                    <div className='candidate-page-rad-answer-container'>

                                        <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                                <input 
                                                    type='radio'
                                                    name='industrialLicense'
                                                    id='industrialLicense-yes'
                                                    value='Yes'
                                                    checked={updatedPreferenceQuestions.industrialLicense === 'Yes'}
                                                    onChange={(e) => handleOnChange('industrialLicense', e.target.value)}
                                                />
                                                <label htmlFor='industrialLicense-yes' className='candidate-page-rad-label'>
                                                    Yes
                                                </label>
                                        </div>
                                        <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                                <input 
                                                    type='radio'
                                                    name='industrialLicense'
                                                    id='industrialLicense-no'
                                                    value='No'
                                                    checked={updatedPreferenceQuestions.industrialLicense === 'No'}
                                                    onChange={(e) => handleOnChange('industrialLicense', e.target.value)}
                                                />
                                                <label className='candidate-page-rad-label' htmlFor='industrialLicense-no'>
                                                    No
                                                </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                    
                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Availability Preferences
                        </div>
                    </div>
                    
                    <div className='candidate-page-card-container'>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Week days   
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-checkbox-container candidate-page-checkbox-answer-edit'>
                                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((weekDaysValue) => (
                                        <div className='candidate-page-checkbox-single-answer' key={weekDaysValue}>
                                            <input 
                                                type='checkbox'
                                                checked={updatedPreferenceQuestions.weekDays.includes(weekDaysValue)}
                                                // onChange={(e) => handleWeekDaysChange(e, weekDaysValue)}
                                                onChange={(e) => handleValueChange(e, weekDaysValue, "weekDays", "preference")}
                                                id={`${weekDaysValue}`}
                                            />
                                            <label className='candidate-page-checkbox-label' htmlFor={`${weekDaysValue}`}>
                                                {weekDaysValue}
                                            </label>
                                        </div>    
                                    ))}      
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Shifts   
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-checkbox-container candidate-page-checkbox-answer-edit'>
                                    {['Mornings', 'Afternoons', 'Nights'].map((shiftsValue) => (
                                        <div className='candidate-page-checkbox-single-answer' key={shiftsValue}>
                                            <input 
                                                type='checkbox'
                                                checked={updatedPreferenceQuestions.shifts.includes(shiftsValue)}
                                                // onChange={(e) => handleShiftsChange(e, shiftsValue)}
                                                onChange={(e) => handleValueChange(e, shiftsValue, "shifts", "preference")}
                                                id={`${shiftsValue}`}
                                            />
                                            <label className='candidate-page-checkbox-label' htmlFor={`${shiftsValue}`}>
                                                {shiftsValue}
                                            </label>
                                        </div>    
                                    ))}      
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Start window   
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <select 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedPreferenceQuestions.startWindow}
                                    onChange={(e) => handleOnChange('startWindow', e.target.value)}
                                >
                                    <option value=''>Please select...</option>
                                    <option value='00:00-04:00'>00:00-04:00</option>
                                    <option value='04:00-08:00'>04:00-08:00</option>
                                    <option value='08:00-12:00'>08:00-12:00</option>
                                    <option value='12:00-16:00'>12:00-16:00</option>
                                    <option value='16:00-20:00'>16:00-20:00</option>
                                    <option value='20:00-00:00'>20:00-00:00</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Additional Info
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Heard of us
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <select 
                                    type='text'
                                    className='candidate-page-input'
                                    value={updatedPreferenceQuestions.heardOfUs}
                                    onChange={(e) => handleOnChange('heardOfUs', e.target.value)}
                                >
                                    <option value=''>Please select...</option>
                                    <option value='Social media'>Social media</option>
                                    <option value='Our website'>Our website</option>
                                    <option value='Job search website'>Job search website</option>
                                    <option value='Word of mouth'>Word of mouth</option>
                                    <option value='Other'>Other</option>
                                </select>
                            </div>
                        </div>

                        {updatedPreferenceQuestions.heardOfUs === 'Other' &&
                            <div className='candidate-page-detail-container'>
                                <div className='candidate-page-detail-label'>
                                    Details
                                </div>

                                <div className='candidate-page-detail-answer'>
                                    <textarea 
                                        className='candidate-page-input-text'
                                        rows='5'
                                        cols='10'
                                        value={updatedPreferenceQuestions.heardOfUsOther}
                                        onChange={(e) => handleOnChange('heardOfUsOther', e.target.value)}
                                    />
                                </div>
                            </div>
                        }
                    </div>

                    <div className='save-button-container'>
                        <div className='button-space-between'>
                            <button
                                className='button-primary'
                                onClick={save}
                            >
                                Save Details
                            </button>
                            <button
                                className='button-primary'
                                onClick={edit}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}