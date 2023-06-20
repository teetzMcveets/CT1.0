import React from 'react';
import { Link } from 'react-router-dom';
import './Licenses.css';

export default function Licenses ({
    candidate,
    edit,
    updatedLicenses,
    selectedEndorsements,
    offenseDate,
    points,
}) {
    console.log(candidate.licenseEndorsements)

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
                    
                    {/* Front of license */}
                    <div className='card-detail-title'>
                        <div className='card-title'>
                            License Front
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        <div className='candidate-page-detail-container'>
                            
                            <div className='candidate-page-detail-label'>
                                Upload front of license
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                First name on license
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.licenseNameNotSame}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                            </div>

                            <div className='candidate-page-detail-answer' style={{ marginTop: -15, color: 'var(--text2)' }}>
                                (if not {candidate.firstName})
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                License number (5)
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.licenseNumber}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                License issue number
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container' style={{ width: 100 }}>
                                    {candidate.licenseIssueNumber}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                            </div>

                            <div className='candidate-page-detail-answer' style={{ marginTop: -15, color: 'var(--text2)' }}>
                                (last digits of license number after the space)
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Issue date (4a)
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.licenseIssueDate}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Expiration date (4b)
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.licenseExpiryDate}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* License bank */}

                    
                    {/* License check */}
                    <div className='card-detail-title'>
                        <div className='card-title'>
                            License Check
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>
                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Upload license check
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.licenseCheck}
                                </div>
                            </div>
                        </div>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Expiration date
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-detail-answer-container'>
                                    {candidate.licenseCheckExpires}
                                </div>
                            </div>
                        </div>
                    </div>

                    {selectedEndorsements && selectedEndorsements.length > 0 && (
                        <>
                            <div className='card-detail-title'>
                                <div className='card-title'>
                                    License Endorsements
                                </div>
                            </div>


                            <div className='candidate-page-card-container'>
                                
                                {selectedEndorsements.map((endorsement, index) => (
                                    <div key={index} className='candidate-page-detail-container endorsement-direction'>
                                        <div className='endorsement-container'>
                                            <div className='value-remove-container'>
                                                <div className='endorsement-value'>
                                                    {endorsement.value}
                                                </div>
                                                <div className='link-container'>
                                                    <Link className='empty-link-disabled'>
                                                        BLANK
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className='details-dates-container'>
                                                <div className='endorsement-details'>
                                                    {endorsement.details}
                                                </div>
                                                <div className='endorsement-date-container'>
                                                    <label className='endorsement-date'>
                                                        Date of offense
                                                    </label>
                                                    <div className='candidate-page-detail-answer-container offense-date-endorsement'>
                                                        {candidate.offenseDate}
                                                    </div>
                                                </div>
                                                <div className='endorsement-point-container'>
                                                    <label className='endorsement-points'>
                                                        Points
                                                    </label>
                                                    <div className='candidate-page-detail-answer-container'>
                                                        {candidate.points}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </>
                    )}

                    
                    {/* <div className='card-detail-title'>
                        <div className='card-title'>
                            License Endorsements
                        </div>
                    </div>


                    <div className='candidate-page-card-container'>
                        
                        {selectedEndorsements.map((endorsement, index) => (
                            <div key={index} className='candidate-page-detail-container endorsement-direction'>
                                <div className='endorsement-container'>
                                    <div className='value-remove-container'>
                                        <div className='endorsement-value'>
                                            {endorsement.value}
                                        </div>
                                        <div className='link-container'>
                                            <Link className='empty-link-disabled'>
                                                BLANK
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='details-dates-container'>
                                        <div className='endorsement-details'>
                                            {endorsement.details}
                                        </div>
                                        <div className='endorsement-date-container'>
                                            <label className='endorsement-date'>
                                                Date of offense
                                            </label>
                                            <div className='candidate-page-detail-answer-container offense-date-endorsement'>
                                                {candidate.offenseDate}
                                            </div>
                                        </div>
                                        <div className='endorsement-point-container'>
                                            <label className='endorsement-points'>
                                                Points
                                            </label>
                                            <div className='candidate-page-detail-answer-container'>
                                                {candidate.points}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div> */}

                    {/* THIS IS WHERE THE UPLOADS AND STUFF ARE */}
                    {updatedLicenses.licenseCategory.includes('CE - class one') &&
                        <>
                            <div className='card-detail-title'>
                                <div className='card-title'>
                                    CE - class one
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