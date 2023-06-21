import React, { useState } from 'react';
import './WorkHistory.css';
import AddWorkHistoryModal from './AddWorkHistoryModal';

export default function WorkHistory ({
    candidate,
    onAddClick,
    onDeleteClick,
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
                    <AddWorkHistoryModal
                        onModalClose={onModalClose}
                        onModalSave={onSaveModal}
                    />
                }

                <div className='work-history-table-header'>
                    <div className='work-history-table-data wh-col-one'>
                        Company
                    </div>
                    <div className='work-history-table-data wh-col-two'>
                        Position
                    </div>
                    <div className='work-history-table-data wh-col-three'>
                        Start
                    </div>
                    <div className='work-history-table-data wh-col-four'>
                        End
                    </div>
                    <div className='work-history-table-data wh-col-five'>
                        Ref
                    </div>
                    <div className='work-history-table-data wh-col-six'>
                        Agency
                    </div>
                    <div className='work-history-table-data wh-col-seven'>
                        
                    </div>
                    <div className='work-history-table-data wh-col-eight'>

                    </div>
                    <div className='work-history-table-data wh-col-nine'>

                    </div>
                </div>

                {workHistoryDetails.length > 0 ? (
                    workHistoryDetails.map((work, index) => (
                        <div key={index} className='work-history-card'>
                            <div className='work-history-table-row'>
                                <div className='work-history-table-data wh-col-one'>
                                    {work.company}
                                </div>
                                <div className='work-history-table-data wh-col-two'>
                                    {work.jobTitle}
                                </div>
                                <div className='work-history-table-data wh-col-three'>
                                    {work.startDate}
                                </div>
                                <div className='work-history-table-data wh-col-four'>
                                    {work.isStillEmployed ? 'Still Employed' : work.endDate}
                                </div>
                                <div className='work-history-table-data wh-col-five'>
                                    {work.useAsRef ? <div className='tick-icon'>&#10003;</div> : '' }
                                </div>
                                <div className='work-history-table-data wh-col-six'>
                                    {work.isAgency === 'Yes' ? <div className='tick-icon'>&#10003;</div> : '' }
                                </div>
                                <div className='work-history-table-data wh-col-seven'>
                                    <button className='button-secondary small-button' >
                                        <i className='fas fa-pencil-alt'></i>
                                    </button>
                                </div>
                                <div className='work-history-table-data wh-col-eight'>
                                    <button className='button-secondary small-button' onClick={() => onDeleteClick(work.id)}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                                <div className='work-history-table-data wh-col-nine'>
                                    <button 
                                        className='button-third small-button'
                                        onClick={() => handleExpandClick(index)}
                                    >
                                        {/* <i className='fas fa-plus'></i> */}
                                        <i className={`fas ${expandedIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                                    </button>
                                </div>
                            </div>
                            {expandedIndex === index &&
                                <>
                                        <div className='expanding-container'>
                                            <div className='work-history-table-expanded-row'>
                                                <div className='work-history-table-data wh-expanding-label-row-one'>
                                                        Address / Area
                                                </div>
                                                <div className='work-history-table-data wh-expanded-answers-row-one'>
                                                    <div className='wh-expanding-answer'>
                                                        {work.address}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='work-history-table-expanded-row'>
                                                <div className='work-history-table-data wh-expanding-label-row-one'>
                                                        Role / Duties
                                                </div>
                                                <div className='work-history-table-data wh-expanded-answers-row-one'>
                                                    <div className='wh-expanding-answer-larger'>
                                                        {work.roleDuties}
                                                    </div>
                                                </div>
                                            </div>


                                            {work.useAsRef &&
                                                <>
                                                    <div style={{ paddingTop: '15px'}}>
                                                        For reference
                                                    </div>

                                                    <div className='work-history-table-expanded-row'>
                                                        <div className='wh-ref-expanding-half' style={{ width: '50%' }}>
                                                            <div className='wh-ref-label' style={{ width: '40%' }}>
                                                                Contact Name
                                                            </div>
                                                            <div className='wh-ref-answer-container' style={{ width: '60%' }}>
                                                                <div className='wh-expanding-answer'>
                                                                    {work.refContactName}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='wh-ref-expanding-half' style={{ width: '50%' }}>
                                                            <div className='wh-ref-label' style={{ width: '40%' }}>
                                                                Contact Position
                                                            </div>
                                                            <div className='wh-ref-answer-container' style={{ width: '60%' }}>
                                                                <div className='wh-expanding-answer'>
                                                                    {work.refContactPosition}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='work-history-table-expanded-row'>
                                                        <div className='wh-ref-expanding-half' style={{ width: '40%' }}>
                                                            <div className='wh-ref-label' style={{ width: '50%' }}>
                                                                Contact number
                                                            </div>
                                                            <div className='wh-ref-answer-container' style={{ width: '50%' }}>
                                                                <div className='wh-expanding-answer'>
                                                                    {work.refContactNumber}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='wh-ref-expanding-half' style={{ width: '60%' }}>
                                                            <div className='wh-ref-label' style={{ width: '35%' }}>
                                                                Contact Email
                                                            </div>
                                                            <div className='wh-ref-answer-container' style={{ width: '65%' }}>
                                                                <div className='wh-expanding-answer'>
                                                                    {work.refContactEmail}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                            {work.isAgency &&
                                                <>
                                                    <div style={{ paddingTop: '15px'}}>
                                                        Agency contracts worked
                                                    </div>

                                                    {work.clientOne &&
                                                        <div className='work-history-table-expanded-row'>
                                                            <div className='wh-ref-expanding-half' style={{ width: '50%' }}>
                                                                <div className='wh-ref-label' style={{ width: '40%' }}>
                                                                    Client One
                                                                </div>
                                                                <div className='wh-ref-answer-container' style={{ width: '60%' }}>
                                                                    <div className='wh-expanding-answer'>
                                                                        {work.clientOne}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='wh-ref-expanding-half' style={{ width: '50%' }}>
                                                                <div className='wh-ref-label' style={{ width: '40%' }}>
                                                                    Client Contact
                                                                </div>
                                                                <div className='wh-ref-answer-container' style={{ width: '60%' }}>
                                                                    <div className='wh-expanding-answer'>
                                                                        {work.clientOneName}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }

                                                    {work.clientTwo &&
                                                        <div className='work-history-table-expanded-row'>
                                                            <div className='wh-ref-expanding-half' style={{ width: '50%' }}>
                                                                <div className='wh-ref-label' style={{ width: '40%' }}>
                                                                    Client Two
                                                                </div>
                                                                <div className='wh-ref-answer-container' style={{ width: '60%' }}>
                                                                    <div className='wh-expanding-answer'>
                                                                        {work.clientTwo}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='wh-ref-expanding-half' style={{ width: '50%' }}>
                                                                <div className='wh-ref-label' style={{ width: '40%' }}>
                                                                    Client Contact
                                                                </div>
                                                                <div className='wh-ref-answer-container' style={{ width: '60%' }}>
                                                                    <div className='wh-expanding-answer'>
                                                                        {work.clientTwoName}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }

                                                    {work.clientThree &&
                                                        <div className='work-history-table-expanded-row'>
                                                            <div className='wh-ref-expanding-half' style={{ width: '50%' }}>
                                                                <div className='wh-ref-label' style={{ width: '40%' }}>
                                                                    Client Three
                                                                </div>
                                                                <div className='wh-ref-answer-container' style={{ width: '60%' }}>
                                                                    <div className='wh-expanding-answer'>
                                                                        {work.clientThree}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='wh-ref-expanding-half' style={{ width: '50%' }}>
                                                                <div className='wh-ref-label' style={{ width: '40%' }}>
                                                                    Client Contact
                                                                </div>
                                                                <div className='wh-ref-answer-container' style={{ width: '60%' }}>
                                                                    <div className='wh-expanding-answer'>
                                                                        {work.clientThreeName}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }

                                                    {work.clientFour &&
                                                        <div className='work-history-table-expanded-row'>
                                                            <div className='wh-ref-expanding-half' style={{ width: '50%' }}>
                                                                <div className='wh-ref-label' style={{ width: '40%' }}>
                                                                    Client Four
                                                                </div>
                                                                <div className='wh-ref-answer-container' style={{ width: '60%' }}>
                                                                    <div className='wh-expanding-answer'>
                                                                        {work.clientFour}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='wh-ref-expanding-half' style={{ width: '50%' }}>
                                                                <div className='wh-ref-label' style={{ width: '40%' }}>
                                                                    Client Contact
                                                                </div>
                                                                <div className='wh-ref-answer-container' style={{ width: '60%' }}>
                                                                    <div className='wh-expanding-answer'>
                                                                        {work.clientFourName}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }

                                                    {work.clientFive &&
                                                        <div className='work-history-table-expanded-row'>
                                                            <div className='wh-ref-expanding-half' style={{ width: '50%' }}>
                                                                <div className='wh-ref-label' style={{ width: '40%' }}>
                                                                    Client Five
                                                                </div>
                                                                <div className='wh-ref-answer-container' style={{ width: '60%' }}>
                                                                    <div className='wh-expanding-answer'>
                                                                        {work.clientFive}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='wh-ref-expanding-half' style={{ width: '50%' }}>
                                                                <div className='wh-ref-label' style={{ width: '40%' }}>
                                                                    Client Contact
                                                                </div>
                                                                <div className='wh-ref-answer-container' style={{ width: '60%' }}>
                                                                    <div className='wh-expanding-answer'>
                                                                        {work.clientFiveName}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                    
                                                </>
                                            }
                                            
                                            
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