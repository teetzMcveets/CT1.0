import React from 'react';
import './CandidateInfoCard.css';
import { useNavigate } from 'react-router-dom';

export default function CandidateInfoCard ({ candidate }) {
    const navigate = useNavigate();

    const handleOnBackClick = () => {
        navigate('/candidates')
    }

    return (
        <>
            <div className='info-card'>
                <div style={{ position: 'fixed', left: '80px' }}>
                    <button onClick={handleOnBackClick} className='button-primary'>
                        Back to candidates...
                    </button>
                </div>

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