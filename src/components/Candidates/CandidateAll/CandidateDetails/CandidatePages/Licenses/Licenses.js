import React from 'react';
import './Licenses.css';

export default function Licenses ({
    candidate,
    edit,
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
                            Licenses You Have
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Select categories you have
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-checkbox-container'>
                                    {['CE - class one', 'C - class two', 'C1 - 7.5 tonne', 'B - van'].map((licenseCategoryValue) => (
                                        <div className='candidate-page-checkbox-single-answer' key={licenseCategoryValue}>
                                            <input 
                                                type='checkbox'
                                                id={`licenseCategory-${licenseCategoryValue}`}
                                                checked={candidate.licenseCategory.includes(licenseCategoryValue)}
                                                // onChange={(e) => handleLicenseCategory(e, licenseCategoryValue)}
                                                readOnly
                                            />
                                            <label className='candidate-page-checkbox-label'  htmlFor={`licenseCategory-${licenseCategoryValue}`}>
                                                {licenseCategoryValue}
                                            </label>
                                        </div>    
                                    ))}      
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* THIS IS WHERE THE UPLOADS AND STUFF ARE */}
                    {candidate.licenseCategory.includes('CE - class one') &&
                        <>
                            <div className='card-detail-title'>
                                <div className='card-title'>
                                    CE - Class one
                                </div>
                            </div>

                            <div className='candidate-page-card-container'>

                            </div>
                        </>
                    } 
                </div>
            </div>
        </>
    )
}