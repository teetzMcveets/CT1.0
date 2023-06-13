import React, { useState } from 'react';
import './WorkHistory.css';
import WorkHistoryModal from './WorkHistoryModal';

export default function WorkHistory ({
    candidate,
    onAddClick,
    isWorkHistoryModalOpen,
    onModalClose,
    onSaveModal,
}) {

    const [expandedIndex, setExpandedIndex] = useState(-1);
    const workHistoryDetails = candidate?.workHistory || [];

    const handleExpandClick = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
    }

    return (
        <>
            <div className='work-history-container'>

                <div className='add-work-history-button-container'>
                    <button className='button-primary' onClick={onAddClick}>
                        Add
                    </button>
                </div>

                {isWorkHistoryModalOpen &&
                    <WorkHistoryModal
                        onModalClose={onModalClose}
                        onModalSave={onSaveModal}
                    />
                }

                <div className='work-history-card'>
                    <div className='work-history-table'>
                        <div className='work-history-row-header'>
                            <div className='wh-col-one'>
                                Company Name
                            </div>
                            <div className='wh-col-two'>
                                Position
                            </div>
                            <div className='wh-col-three'>
                                Start Date
                            </div>
                            <div className='wh-col-four'>
                                End Date
                            </div>
                            <div className='wh-col-five'>
                                Reference
                            </div>
                            <div className='wh-col-six'>
                                Agency
                            </div>
                            <div className='wh-col-seven'>
                                <button className='invisible-button' disabled>
                                    
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {workHistoryDetails.length > 0 ? (
                    workHistoryDetails.map((work, index) => (
                        <div key={index} className='work-history-card'>
                            <div className='work-history-table'>
                                <div className='work-history-row'>
                                    <div className='wh-col-one'>
                                        {work.company}
                                    </div>
                                    <div className='wh-col-two'>
                                        {work.jobTitle}
                                    </div>
                                    <div className='wh-col-three'>
                                        {work.startDate}
                                    </div>
                                    <div className='wh-col-four'>
                                        {work.isStillEmployed ? 'Still Employed' : work.endDate}
                                    </div>
                                    <div className='wh-col-five'>
                                        {work.useAsRef ? <div className='tick-icon'>&#10003;</div> : '' }
                                    </div>
                                    <div className='wh-col-six'>
                                        {work.isAgency === 'Yes' ? <div className='tick-icon'>&#10003;</div> : '' }
                                    </div>
                                    <div className='wh-col-seven'>
                                        <button 
                                            className='button-secondary small-button'
                                            onClick={() => handleExpandClick(index)}
                                        >
                                            {/* <i className='fas fa-plus'></i> */}
                                            <i className={`fas ${expandedIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {expandedIndex === index &&
                                <>
                                    <div className='work-history-table'>
                                        <div className='expanding-container'>
                                            <div className='address-row'>
                                                {work.address}
                                            </div>
                                            
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    ))
                ) : (
                    <div className='work-history-card'>
                        <div className='work-history-table'>
                            <div className='work-history-rowOne'>
                                <div>
                                    {/* EMPTY PLACEHOLDER IF NO WORK HISTORY */}
                                </div>
                                {/* OTHER EMPTY PLACEHOLDERS... */}
                            </div>
                        </div>
                    </div>
                )}
                
                
            </div>
        </>
    )
}