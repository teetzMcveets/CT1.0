import React from 'react';
import './CandidateList.css';
import { Link } from 'react-router-dom';

export default function CandidateList ({ candidates, handleArchiveClick }) {

    return (
        <>
            <div className='candidates-list-container'>

                <div className='candidate-list-detail-container'>
                {Object.values(candidates)
                    .sort((a, b) => a.firstName.localeCompare(b.firstName))
                    .map(candidate => {
                        const isArchived = candidate.status === 'Archived';

                        return (
                            <>
                                <Link 
                                    to={isArchived ? '#' : `/candidates/${candidate.id}`} 
                                    key={candidate.id} 
                                    className={`candidate-card-link ${isArchived ? 'archived-candidate' : ''}`}>
                                        <div className={`candidate-details-card ${isArchived ? 'archived-candidate' : ''}`}>
                                            <div className='candidate-card-details'>
                                                <div className='first-column'>
                                                    
                                                    <div className='candidate-single-detail'>
                                                        <p className='p-top name'>{candidate.firstName} {candidate.lastName}</p>
                                                    </div>

                                                    <div className='candidate-single-detail'>
                                                        <p>
                                                            <span className={`id-key ${isArchived ? 'archived-span' : ''}`}>
                                                                ID:    
                                                            </span>
                                                            {candidate.id}
                                                        </p>
                                                    </div>

                                                </div>

                                                <div className='second-column'> 

                                                    <div className='candidate-single-detail'>
                                                        <p className='p-top'>{candidate.number}</p>
                                                    </div>

                                                    <div className='candidate-single-detail'>
                                                        <p>
                                                            <span className={`id-key ${isArchived ? 'archived-span' : ''}`}>
                                                                Owner: 
                                                            </span>  
                                                            {candidate.owner}
                                                        </p>
                                                    </div>

                                                </div>

                                                <div className='third-column'> 

                                                    <div className='candidate-single-detail'>
                                                        <p className='p-top'>{candidate.email}</p>
                                                    </div>

                                                    <div className='candidate-single-detail'>
                                                        <p>
                                                            <span className={`id-key ${isArchived ? 'archived-span' : ''}`}>
                                                                Profile: 
                                                            </span>        
                                                            {candidate.profile}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='candidate-archive-container'> 
                                                <button 
                                                    className={`archive-button ${isArchived ? 'unarchive-button' : ''}`}
                                                    onClick={(e) => handleArchiveClick(candidate.id, e)}
                                                >
                                                    <i className="fas fa-folder"></i>
                                                </button>
                                            </div>
                                        </div> 
                                    </Link>  
                                </>
                            )
                        })}
                </div>
                
            </div>
        </>
    )
}
