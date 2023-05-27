import React from 'react';
import { Link } from 'react-router-dom';
import './CandidateInfoCard.css';

export default function CandidateInfoCard ({ candidate }) {

    return (
        <>
            <div className='info-card'>

                <div className='info-container'>
                    <div className='default-photo'></div>
                    <div className='add-photo-text'>
                        <Link to='#' className='link-primary'>
                            Add Photo +
                        </Link>
                    </div>
                </div>
                <div className='info-container'>
                    <div className='info-details'>
                        <label className='info-label'>
                            ID
                        </label>
                        <div>
                            {candidate.id}
                        </div>
                    </div>
                    <div className='info-details'>
                        <label className='info-label'>
                            Owner
                        </label>
                        <div>
                            {candidate.owner}
                        </div>
                    </div>
                    <div className='info-details'>
                        <label className='info-label'>
                            Industry
                        </label>
                        <div>
                            {candidate.industry}
                        </div>
                    </div>
                    <div className='info-details'>
                        <label className='info-label'>
                            Status
                        </label>
                        <div>
                            {candidate.status}
                        </div>
                    </div>
                </div>
                <div className='info-container'>
                    <div className='back-button-details-container'>
                        <button className='button-secondary'>
                            <i className='fas fa-pencil-alt'></i>
                        </button>
                        <button className='button-secondary'>
                            <i className='fas fa-times'></i>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}