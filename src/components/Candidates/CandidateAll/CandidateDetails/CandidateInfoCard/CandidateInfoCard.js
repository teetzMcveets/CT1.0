import React from 'react';
import './CandidateInfoCard.css';

export default function CandidateInfoCard ({ candidate }) {

    return (
        <>
            <div className='info-card'>


                <div className='info-container'>
                    <p style={{ display: 'flex', justifyContent: 'center', fontSize: 14 }}>{candidate.firstName} {candidate.lastName}</p>
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
                            | Owner 
                        </label>
                        <div>
                            {candidate.owner}
                        </div>
                    </div>
                    <div className='info-details'>
                        <label className='info-label'>
                            | Industry 
                        </label>
                        <div>
                            {candidate.industry}
                        </div>
                    </div>
                    <div className='info-details'>
                        <label className='info-label'>
                            | Status 
                        </label>
                        <div>
                            {candidate.status} 
                        </div>
                    </div>
                </div>
                

            </div>
            
        </>
    )
}