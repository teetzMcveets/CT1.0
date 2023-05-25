import React from 'react';
import './CandidateList.css';
import { Link } from 'react-router-dom';

export default function CandidateList ({ candidates }) {
    return (
        <>
            <div className='candidates-list-container'>

                <div className='candidate-list-detail-container'>
                {Object.values(candidates).map(candidate => (
                    <Link to={`/candidates/${candidate.id}`} key={candidate.id} className='candidate-card-link'>
                        <div className='candidate-details-card'>

                            <div>
                                
                                <div className='candidate-single-detail first-column'>
                                    <p className='p-top'>{candidate.firstName} {candidate.lastName}</p>
                                </div>

                                <div className='candidate-single-detail'>
                                    <p>
                                        <span className='id-key'>
                                            ID:    
                                        </span>
                                        {candidate.id}
                                    </p>
                                </div>

                            </div>

                            <div> 

                                <div className='candidate-single-detail'>
                                    <p className='p-top'>{candidate.number}</p>
                                </div>

                                <div className='candidate-single-detail'>
                                    <p>
                                        <span className='id-key'>
                                            Owner: 
                                        </span>  
                                        {candidate.owner}
                                    </p>
                                </div>

                            </div>

                            <div> 

                                <div className='candidate-single-detail'>
                                    <p className='p-top'>{candidate.email}</p>
                                </div>

                                <div className='candidate-single-detail'>
                                    <p>
                                        <span className='id-key'>
                                            Profile: 
                                        </span>        
                                        {candidate.profile}
                                    </p>
                                </div>

                            </div>

                            <div className='candidate-archive-container'> 
                                <button 
                                    className='archive-button'
                                >
                                    <i className="fas fa-folder"></i>
                                </button>
                            </div>
                            

                        </div> 
                        
                    </Link>       
                ))}
                </div>

            </div>
        </>
    )
}