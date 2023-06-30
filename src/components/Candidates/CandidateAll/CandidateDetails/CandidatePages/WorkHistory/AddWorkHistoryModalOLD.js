import React, { useState } from 'react';

const AddWorkHistoryModal = ({ 
    onModalClose, 
    onModalSave,
}) => {

    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isStillEmployed, setIsStillEmployed] = useState(false);
    const [roleDuties, setRoleDuties] = useState('')
    const [useAsRef, setUseAsRef] = useState(false);
    const [isAgency, setIsAgency] = useState('');

    //USE AS REF
    const [refContactName, setRefContactName] = useState('');
    const [refContactPosition, setRefContactPosition] = useState('');
    const [refContactNumber, setRefContactNumber] = useState('');
    const [refContactEmail, setRefContactEmail] = useState('');

    // IS AGENCY
    const [clientOne, setClientOne] = useState('');
    const [clientOneName, setClientOneName] = useState('');
    const [clientTwo, setClientTwo] = useState('');
    const [clientTwoName, setClientTwoName] = useState('');
    const [clientThree, setClientThree] = useState('');
    const [clientThreeName, setClientThreeName] = useState('');
    const [clientFour, setClientFour] = useState('');
    const [clientFourName, setClientFourName] = useState('');
    const [clientFive, setClientFive] = useState('');
    const [clientFiveName, setClientFiveName] = useState('');

    const handleWorkHistorySave = () => {
        const workHistory = { 
            company,
            address,
            jobTitle,
            startDate,
            endDate,
            isStillEmployed,
            roleDuties,
            useAsRef,
            isAgency,
            refContactName,
            refContactPosition,
            refContactNumber,
            refContactEmail,
            clientOne,
            clientOneName,
            clientTwo,
            clientTwoName,
            clientThree,
            clientThreeName,
            clientFour,
            clientFourName,
            clientFive,
            clientFiveName,
        };
        onModalSave(workHistory);
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
                        
                        <div className='modal-detail-row'>
                            <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                <label className='modal-detail-label'>
                                    Company
                                </label>
                                <div className='modal-detail-input-container'>
                                    <input 
                                        type='text'
                                        className='modal-detail-input'
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                <label className='modal-detail-label'>
                                    Job Title
                                </label>
                                <div className='modal-detail-input-container'>
                                    <input 
                                        type='text'
                                        className='modal-detail-input'
                                        value={jobTitle}
                                        onChange={(e) => setJobTitle(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='modal-single-detail-container'>
                            <label className='modal-detail-label'>
                                Address / Area / Post Code
                            </label>
                            <div className='modal-detail-input-container'>
                                <input 
                                    type='text'
                                    className='modal-detail-input'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <div className='modal-single-detail-container' style={{ width: '33%' }}>
                                <label className='modal-detail-label'>
                                    Start Date
                                </label>
                                <div className='modal-detail-input-container'>
                                    <input 
                                        type='date'
                                        className='modal-detail-input-date'
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='modal-single-detail-container' style={{ width: '67%' }}>
                                <label className='modal-detail-label'>
                                    End Date
                                </label>
                                <div className='modal-detail-input-container'>
                                    <input 
                                        type='date'
                                        className={`modal-detail-input-date ${isStillEmployed ? 'disabled' : ''}`}
                                        value={isStillEmployed ? 'Still Employed' : endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        disabled={isStillEmployed}
                                    />
                                    <div className='checkbox-container'>
                                        <input 
                                            type='checkbox'
                                            id='still-employed'
                                            checked={isStillEmployed}
                                            onChange={(e) => setIsStillEmployed(e.target.checked)}
                                        />
                                        <label className='modal-checkbox-label' htmlFor='still-employed'>
                                            Still Employed
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='modal-single-detail-container'>
                            <label className='modal-detail-label'>
                                Role duties
                            </label>
                            <div className='modal-detail-input-container'>
                                <textarea 
                                    type='text'
                                    className='modal-detail-input modal-text-area'
                                    value={roleDuties}
                                    onChange={(e) => setRoleDuties(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='modal-single-detail-container'>
                            <label className='modal-detail-label'>
                                Use As Reference
                            </label>
                            <div className='modal-detail-input-container'>
                                <input 
                                    type='checkbox'
                                    id='use-as-ref'
                                    checked={useAsRef}
                                    onChange={(e) => setUseAsRef(e.target.checked)}
                                />
                            </div>
                        </div>

                        {useAsRef &&
                            <>
                                <div className='modal-detail-row'>
                                    <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                        <label className='modal-detail-label'>
                                            Contact Name
                                        </label>
                                        <div className='modal-detail-input-container'>
                                            <input 
                                                type='text'
                                                className='modal-detail-input'
                                                value={refContactName}
                                                onChange={(e) => setRefContactName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                        <label className='modal-detail-label'>
                                            Contact Position
                                        </label>
                                        <div className='modal-detail-input-container'>
                                            <input 
                                                type='text'
                                                className='modal-detail-input'
                                                value={refContactPosition}
                                                onChange={(e) => setRefContactPosition(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='modal-detail-row'>
                                    <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                        <label className='modal-detail-label'>
                                            Contact Number
                                        </label>
                                        <div className='modal-detail-input-container'>
                                            <input 
                                                type='text'
                                                className='modal-detail-input'
                                                value={refContactNumber}
                                                onChange={(e) => setRefContactNumber(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                        <label className='modal-detail-label'>
                                            Contact Email
                                        </label>
                                        <div className='modal-detail-input-container'>
                                            <input 
                                                type='text'
                                                className='modal-detail-input'
                                                value={refContactEmail}
                                                onChange={(e) => setRefContactEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        }

                        <div className='modal-single-detail-container'>
                            <label className='modal-detail-label'>
                                Agency
                            </label>
                            <div className='modal-detail-input-container'>
                                <div className='candidate-page-rad-answer-container'>
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='agency'
                                            id='agency-yes'
                                            value='Yes'
                                            checked={isAgency === 'Yes'}
                                            onChange={(e) => setIsAgency(e.target.value)}
                                        />
                                        <label htmlFor='agency-yes' className='candidate-page-rad-label'>
                                            Yes
                                        </label>
                                    </div>
                                    <div className='candidate-page-rad-single-answer candidate-page-rad-answer-edit'>
                                        <input 
                                            type='radio'
                                            name='agency'
                                            id='agency-no'
                                            value='No'
                                            checked={isAgency === 'No'}
                                            onChange={(e) => setIsAgency(e.target.value)}
                                        />
                                        <label className='candidate-page-rad-label' htmlFor='agency-no'>
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>                        

                        {isAgency === 'Yes' &&
                            <>
                                <div className='modal-subtitle-container'>
                                    <div>
                                        Clients Worked At
                                    </div>
                                </div>

                                <div style={{ display: 'flex' }}>
                                    <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                        <label className='modal-detail-label'>
                                            Client One
                                        </label>
                                        <div className='modal-detail-input-container'>
                                            <input 
                                                type='text'
                                                className='modal-detail-input'
                                                value={clientOne}
                                                onChange={(e) => setClientOne(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                        <label className='modal-detail-label'>
                                            Contact Name
                                        </label>
                                        <div className='modal-detail-input-container'>
                                            <input 
                                                type='text'
                                                className='modal-detail-input'
                                                value={clientOneName}
                                                onChange={(e) => setClientOneName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex' }}>
                                    <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                        <label className='modal-detail-label'>
                                            Client Two
                                        </label>
                                        <div className='modal-detail-input-container'>
                                            <input 
                                                type='text'
                                                className='modal-detail-input'
                                                value={clientTwo}
                                                onChange={(e) => setClientTwo(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                        <label className='modal-detail-label'>
                                            Contact Name
                                        </label>
                                        <div className='modal-detail-input-container'>
                                            <input 
                                                type='text'
                                                className='modal-detail-input'
                                                value={clientTwoName}
                                                onChange={(e) => setClientTwoName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex' }}>
                                    <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                        <label className='modal-detail-label'>
                                            Client Three
                                        </label>
                                        <div className='modal-detail-input-container'>
                                            <input 
                                                type='text'
                                                className='modal-detail-input'
                                                value={clientThree}
                                                onChange={(e) => setClientThree(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                        <label className='modal-detail-label'>
                                            Contact Name
                                        </label>
                                        <div className='modal-detail-input-container'>
                                            <input 
                                                type='text'
                                                className='modal-detail-input'
                                                value={clientThreeName}
                                                onChange={(e) => setClientThreeName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex' }}>
                                    <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                        <label className='modal-detail-label'>
                                            Client Four
                                        </label>
                                        <div className='modal-detail-input-container'>
                                            <input 
                                                type='text'
                                                className='modal-detail-input'
                                                value={clientFour}
                                                onChange={(e) => setClientFour(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                        <label className='modal-detail-label'>
                                            Contact Name
                                        </label>
                                        <div className='modal-detail-input-container'>
                                            <input 
                                                type='text'
                                                className='modal-detail-input'
                                                value={clientFourName}
                                                onChange={(e) => setClientFourName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex' }}>
                                    <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                        <label className='modal-detail-label'>
                                            Client Five
                                        </label>
                                        <div className='modal-detail-input-container'>
                                            <input 
                                                type='text'
                                                className='modal-detail-input'
                                                value={clientFive}
                                                onChange={(e) => setClientFive(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='modal-single-detail-container' style={{ width: '50%' }}>
                                        <label className='modal-detail-label'>
                                            Contact Name
                                        </label>
                                        <div className='modal-detail-input-container'>
                                            <input 
                                                type='text'
                                                className='modal-detail-input'
                                                value={clientFiveName}
                                                onChange={(e) => setClientFiveName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                
                                
                                
                                
                            </>
                        }
                    
                        <div id='modal-button-container'>
                            <div className='modal-button-container'>
                                <button 
                                    onClick={handleWorkHistorySave}
                                    className='button-primary'
                                >
                                    Save
                                </button>
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

export default AddWorkHistoryModal;