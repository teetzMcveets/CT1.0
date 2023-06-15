import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Licenses.css';
import endorsements from '../../../../../../utilities/endorsements';

export default function LicensesForm ({
    candidate,
    updatedLicenses,
    handleOnChange,
    edit,
    save,
    handleLicenseCategory,
}) {

    const endorsementOptions = endorsements;
    console.log(endorsementOptions)
    const [selectedEndorsements, setSelectedEndorsements] = useState([]);
    const [offenseDate, setOffenseDate] = useState('');
    const [points, setPoints] = useState('');
    const [selectValue, setSelectValue] = useState('');

    const handleSelect = (e) => {
        const endorsementValue = e.target.value;
        const endorsement = endorsementOptions.find(item => item.value === endorsementValue);
        setSelectedEndorsements([...selectedEndorsements, endorsement]);
        setSelectValue('');
    }

    const handleOffenseDateChange = (index, date) => {
        setOffenseDate(prevState => {
            const newState = [...prevState];
            newState[index] = date;
            return newState;
        })
    }

    const handlePointsChange = (index, point) => {
        setPoints(prevState => {
            const newState = [...prevState];
            newState[index] = point;
            return newState;
        })
    }
 
    return (
        <>
            <div className='candidate-page-left-container'>
                <div className='candidate-page-button-container'>
                    <button
                        className='button-secondary'
                        onClick={save}
                    >
                        <i className='fas fa-save'></i>
                    </button>

                    <div style={{ height: 'var(--med2)' }}></div>
                        
                    <button 
                        className='button-secondary'
                        onClick={edit}    
                    >
                        <i className='fas fa-times'></i>
                    </button>
                </div>
            </div>

            <div className='candidate-page-right-candidate'>
                <div className='candidate-page-full-page'>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Licenses Categories
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>

                        <div className='candidate-page-detail-container'>
                            <div className='candidate-page-detail-label'>
                                Select categories you have
                            </div>

                            <div className='candidate-page-detail-answer'>
                                <div className='candidate-page-checkbox-container candidate-page-checkbox-answer-edit'>
                                    {['CE - class one', 'C - class two', 'C1 - 7.5 tonne', 'B - van'].map((licenseCategoryValue) => (
                                        <div className='candidate-page-checkbox-single-answer' key={licenseCategoryValue}>
                                            <input 
                                                type='checkbox'
                                                id={`licenseCategory-${licenseCategoryValue}`}
                                                checked={updatedLicenses.licenseCategory.includes(licenseCategoryValue)}
                                                onChange={(e) => handleLicenseCategory(e, licenseCategoryValue)}
                                            />
                                            <label className='candidate-page-checkbox-label'  htmlFor={`licenseCategory-${licenseCategoryValue}`}>
                                                {licenseCategoryValue}
                                            </label>
                                        </div>    
                                    ))}      
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            License Endorsements
                        </div>
                    </div>

                    <div className='candidate-page-card-container'>

                        {/* <div className='candidate-page-detail-container endorsement-direction'> */}

                            {selectedEndorsements.map((endorsement, index) => (
                                <div className='candidate-page-detail-container endorsement-direction'>
                                    <div key={index} className='endorsement-container'>
                                        <div className='value-remove-container'>
                                            <div className='endorsement-value'>
                                                {endorsement.value}
                                            </div>
                                            <div className='link-container'>
                                                <Link className='link-secondary'>
                                                    Remove
                                                </Link>
                                            </div>
                                        </div>

                                        <div className='details-dates-container'>
                                            <div className='endorsement-details'>
                                                {endorsement.details}
                                            </div>
                                            <div className='endorsement-date-container'>
                                                <label className='endorsement-date'>
                                                    Date of offense
                                                </label>
                                                <input 
                                                    type='date'
                                                    className='candidate-page-input-date shorter-date-input'
                                                    onChange={e => handleOffenseDateChange(index, e.target.value)}
                                                />
                                            </div>
                                            <div className='endorsement-point-container'>
                                                <label className='endorsement-points'>
                                                    Points
                                                </label>
                                                <select
                                                    type='text'
                                                    className='candidate-page-input'
                                                    onChange={e => handlePointsChange(index, parseInt(e.target.value))}
                                                >
                                                    <option value=''>Please select...</option>
                                                    <option value='1'>1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5</option>
                                                    <option value='6'>6</option>
                                                    <option value='7'>7</option>
                                                    <option value='8'>8</option>
                                                    <option value='9'>9</option>
                                                    <option value='10'>10</option>
                                                    <option value='11'>11</option>
                                                    <option value='12'>12</option>
                                                    <option value='Ban'>Ban</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}     
                        {/* </div> */}

                        <div className='candidate-page-detail-container'>
                            <div className='endorsement-selection-container'>
                                <select
                                    type='text'
                                    className='candidate-page-input'
                                    value={selectValue}
                                    onChange={handleSelect}
                                >
                                    <option value=''>Add endorsement...</option>
                                    {endorsementOptions.map(endorsement => (
                                        <option key={endorsement.value} value={endorsement.value}>{endorsement.label}</option>
                                    ))}
                                </select>
                            </div>                       

                        </div>
                    </div>

                    {/* THIS IS WHERE THE UPLOADS AND STUFF ARE */}
                    {updatedLicenses.licenseCategory.includes('CE - class one') &&
                        <>
                            <div className='card-detail-title'>
                                <div className='card-title'>
                                    CE - class one
                                </div>
                            </div>

                            <div className='candidate-page-card-container'>

                            </div>
                        </>
                    } 

                </div>
            </div>
        </>
    )
}