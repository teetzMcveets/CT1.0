import React, { useState } from 'react';

const WorkHistoryModal = ({ 
    onModalClose, 
    onSave 
}) => {

    const [company, setCompany] = useState('');
    const [isAgency, setIsAgency] = useState('');
    const [area, setArea] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [roleDetails, setRoleDetails] = useState('');
    const [useAsRef, setUseAsRef] = useState(false);

    const handleWorkHistorySave = () => {
        const workHistory = { 
            company, 
            isAgency, 
            area, 
            jobTitle, 
            startDate, 
            endDate, 
            roleDetails, 
            useAsRef 
        };
        onSave(workHistory);
    };

    return (
        <>
            <div className="work-history-modal">
                <div className="modal-content">

                    <div className='modal-title-container'>
                        <div className='modal-title'>
                            Add Work History
                        </div>
                    </div>

                    <div className='modal-card-container'>

                        <div className='modal-single-detail-row'>
                            <div className='candidate-page-detail-label WHM-label'>
                                Company
                            </div>
                            <div className='candidate-page-detail-answer WHM-input-container'>
                                <input 
                                    type='text'
                                    className='candidate-page-input WHM-input'
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='modal-single-detail-row'>
                            <div className='candidate-page-detail-label WHM-label'>
                                Agency
                            </div>
                            <div className='candidate-page-detail-answer WHM-input-container WHM-checkbox-container'>
                                <input 
                                    type='checkbox'
                                />
                            </div>
                        </div>
                        

                    
                        <div className='WHM-button-container'>
                            <div className='WHM-button-half-container'>
                                <button 
                                    onClick={handleWorkHistorySave}
                                    className='button-primary'
                                >
                                    Save
                                </button>
                            </div>
                            <div>
                                <button 
                                    onClick={onModalClose}
                                    className='button-primary'
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkHistoryModal;