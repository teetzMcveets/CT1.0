import React, { useState } from 'react';
import './WorkHistory.css';
import EditWorkModal from './EditWorkHistoryModal';

export default function WorkHistory ({
    workHistory, 
    onAddWorkHistory,
    onDeleteWorkHistory,
    onEdit,
    isEditMode,
    currentWorkHistory,
    onModalChange,
    onModalSubmit,
    onModalClose,
}) {

    const [workHistoryInput, setWorkHistoryInput] = useState('');

    const handleInputChange = (e) => {
        setWorkHistoryInput(e.target.value);
    }

    const handleAddWorkHistory = () => {
        onAddWorkHistory(workHistoryInput);
        setWorkHistoryInput('');
    }

    return (
        <>
            <div className='work-history-container'>

                <div className='add-work-history-button-container'>
                    <button className='button-primary' onClick={handleAddWorkHistory}>
                        Add
                    </button>
                </div>
            </div>
        </>
    )
}