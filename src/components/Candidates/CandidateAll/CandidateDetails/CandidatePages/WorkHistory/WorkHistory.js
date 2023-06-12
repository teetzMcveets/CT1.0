import React from 'react';
import './WorkHistory.css';
import WorkHistoryModal from './WorkHistoryModal';

export default function WorkHistory ({
    onAddClick,
    isWorkHistoryModalOpen,
    onModalClose,
}) {

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
                    />
                }

                <div className='work-history-card'>
                    <div className='work-history-table'>
                        <div className='work-history-rowOne'>
                            <div>
                                Company Name
                            </div>
                            <div>
                                Start Date
                            </div>
                            <div>
                                End Date
                            </div>
                            <div>
                                <button className='button-secondary'>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}