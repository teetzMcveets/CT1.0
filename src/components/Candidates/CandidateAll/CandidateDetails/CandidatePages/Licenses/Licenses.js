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



                    </div>

                </div>
            </div>
        </>
    )
}