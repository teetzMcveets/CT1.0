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

    console.log(workHistoryDetails)

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
                                    <button className='button-secondary small-button'>
                                        <i className='fas fa-pencil-alt'></i>
                                    </button>
                                </div>
                                <div className='work-history-table-data wh-col-eight'>
                                    <button className='button-secondary small-button'>
                                        <i class="fas fa-trash-alt"></i>
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
                                                    <div>
                                                        For reference
                                                    </div>

                                                        

                                                        <div className='work-history-table-expanded-row'>
                                                            <div className='wh-ref-expanding-half'>
                                                                <div className='wh-ref-label'>
                                                                    Contact Name
                                                                </div>
                                                                <div className=''>
                                                                    <div className='wh-expanding-answer'>
                                                                        {work.refContactName}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='wh-ref-expanding-half'>
                                                                <div className=''>
                                                                    Contact Position
                                                                </div>
                                                                <div className=''>
                                                                    <div className='wh-expanding-answer'>
                                                                        {work.refContactPosition}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                    <div className='work-history-table-expanded-row'>
                                                        <div className='work-history-table-data wh-expanding-label-row-one'>
                                                            Contact Number
                                                        </div>
                                                        <div className='work-history-table-data wh-expanded-answers-row-one'>
                                                            <div className='wh-expanding-answer-smaller'>
                                                                {work.refContactNumber}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='work-history-table-expanded-row'>
                                                        <div className='work-history-table-data wh-expanding-label-row-one'>
                                                            Contact Number
                                                        </div>
                                                        <div className='work-history-table-data wh-expanded-answers-row-one'>
                                                            <div className='wh-expanding-answer-smaller'>
                                                                {work.refContactEmail}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                            {work.isAgency &&
                                                <>
                                                    <div>
                                                        Agency contracts worked
                                                    </div>
                                                    <div className='work-history-table-expanded-row'>
                                                        <div className='work-history-table-data wh-expanding-label-row-one'>
                                                            Client name
                                                        </div>
                                                        <div className='work-history-table-data wh-expanded-answers-row-one'>
                                                            <div className='wh-expanding-answer-smaller'>
                                                                {work.clientOne}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='work-history-table-expanded-row'>
                                                        <div className='work-history-table-data wh-expanding-label-row-one'>
                                                            Client contact name
                                                        </div>
                                                        <div className='work-history-table-data wh-expanded-answers-row-one'>
                                                            <div className='wh-expanding-answer-smaller'>
                                                                {work.clientOneName}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='work-history-table-expanded-row'>
                                                        <div className='work-history-table-data wh-expanding-label-row-one'>
                                                            Client name
                                                        </div>
                                                        <div className='work-history-table-data wh-expanded-answers-row-one'>
                                                            <div className='wh-expanding-answer-smaller'>
                                                                {work.clientTwo}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='work-history-table-expanded-row'>
                                                        <div className='work-history-table-data wh-expanding-label-row-one'>
                                                            Client contact name
                                                        </div>
                                                        <div className='work-history-table-data wh-expanded-answers-row-one'>
                                                            <div className='wh-expanding-answer-smaller'>
                                                                {work.clientTwoName}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='work-history-table-expanded-row'>
                                                        <div className='work-history-table-data wh-expanding-label-row-one'>
                                                            Client name
                                                        </div>
                                                        <div className='work-history-table-data wh-expanded-answers-row-one'>
                                                            <div className='wh-expanding-answer-smaller'>
                                                                {work.clientThree}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='work-history-table-expanded-row'>
                                                        <div className='work-history-table-data wh-expanding-label-row-one'>
                                                            Client contact name
                                                        </div>
                                                        <div className='work-history-table-data wh-expanded-answers-row-one'>
                                                            <div className='wh-expanding-answer-smaller'>
                                                                {work.clientThreeName}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='work-history-table-expanded-row'>
                                                        <div className='work-history-table-data wh-expanding-label-row-one'>
                                                            Client name
                                                        </div>
                                                        <div className='work-history-table-data wh-expanded-answers-row-one'>
                                                            <div className='wh-expanding-answer-smaller'>
                                                                {work.clientFour}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='work-history-table-expanded-row'>
                                                        <div className='work-history-table-data wh-expanding-label-row-one'>
                                                            Client contact name
                                                        </div>
                                                        <div className='work-history-table-data wh-expanded-answers-row-one'>
                                                            <div className='wh-expanding-answer-smaller'>
                                                                {work.clientFourName}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='work-history-table-expanded-row'>
                                                        <div className='work-history-table-data wh-expanding-label-row-one'>
                                                            Client name
                                                        </div>
                                                        <div className='work-history-table-data wh-expanded-answers-row-one'>
                                                            <div className='wh-expanding-answer-smaller'>
                                                                {work.clientFive}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='work-history-table-expanded-row'>
                                                        <div className='work-history-table-data wh-expanding-label-row-one'>
                                                            Client contact name
                                                        </div>
                                                        <div className='work-history-table-data wh-expanded-answers-row-one'>
                                                            <div className='wh-expanding-answer-smaller'>
                                                                {work.clientFiveName}
                                                            </div>
                                                        </div>
                                                    </div>
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