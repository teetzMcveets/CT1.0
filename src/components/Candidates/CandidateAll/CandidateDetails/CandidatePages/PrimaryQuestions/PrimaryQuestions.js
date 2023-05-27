import React from 'react';

export default function PrimaryQuestions ({ candidate, }) {

    return (
        <>
            <div className='back-button-details-container'>
                <button className='button-secondary'>
                    <i className='fas fa-pencil-alt'></i>
                </button>
                <button className='button-secondary'>
                    <i className='fas fa-times'></i>
                </button>
            </div>

            <div className='card-detail-title'>
                <div className='card-title'>
                    About You
                </div>
            </div>

            <div className='card-container'>
                
                <div className='detail-container'>
                    <div className='detail-label'>
                        First Name
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.firstName}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Middle names
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.middleNames}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Last name
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.lastName}
                        </div>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-label'>
                        Date of birth
                    </div>

                    <div className='detail-answer'>
                        <div className='answer-border'>
                            {candidate.dateOfBirth}
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}