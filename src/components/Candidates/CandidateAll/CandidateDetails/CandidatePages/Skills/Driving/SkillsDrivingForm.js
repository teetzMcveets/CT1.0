import React from 'react';
import '../../CandidateDetailsForm.css';

export default function SkillsDrivingForm ({
    save,
    edit,
    handleOnChange,
    handleValueChange,
    updatedSkills,
}) {
    const otherVehiclesArray = [
        'CE (class one)',
        'C (class two)',
        'C1 (7.5t)',
        'B (van)',
        'Other', 
    ]

    const trailersArray = [
        'Box',
        'Car Transporter',
        'Container',
        'Curtainsider',
        'Double Decker',
        'Draw Bar A Frame',
        'Draw Bar Close Couple',
        'Flat Bed',
        'Fridge',
        'Skips Chains',
        'Skips Roll on Roll off',
        'Tail Lift',
        'Tanker',
        'Tipper',
    ];

    const gearboxArray = [
        'Automatic',
        'Manual',
        'Splitter',
        'Straight',
    ]

    const loadsArray = [
        'Automotive',
        'Cages',
        'Cash Handling',
        'Food chilled / frozen',
        'Furniture',
        'Gen Haulage (pelletized)',
        'Glass',
        'Parcels',
        'Steel Bar',
        'Steel Coil',
        'Steel Oiled / Pickled',
        'Steel Sheet',
        'Steel Tubes',
        'White Goods',
        'Other',
    ]

    const certificatesArray = [
        'Epic Card',
        'HIAB',
        'IPAF',
        'Level 4 (airport)',
        'Moffett',
        'RHIDS (container)',
    ]

    const workCriteriaArray = [
        'Chain',
        'Handball',
        'Night Out',
        'Tramping',
        'Pallet network / palletline',
        'Rope',
        'Sheet',
        'Shunting Onsite',
        'Strap',
    ]

    const chunkSize = 3;
    const otherVehiclesChunk = [];
    const trailersChunks = [];
    const gearboxChunks= [];
    const loadsChunks = [];
    const certificateChunks = [];
    const workCriteriaChunks = [];

    
    for (let i = 0; i < otherVehiclesArray.length; i += chunkSize) {
        otherVehiclesChunk.push(otherVehiclesArray.slice(i, i+chunkSize));
    };
    for (let i = 0; i < trailersArray.length; i += chunkSize) {
        trailersChunks.push(trailersArray.slice(i, i+chunkSize));
    };
    for (let i = 0; i < gearboxArray.length; i += chunkSize) {
        gearboxChunks.push(gearboxArray.slice(i, i+chunkSize));
    };
    for (let i = 0; i < loadsArray.length; i += chunkSize) {
        loadsChunks.push(loadsArray.slice(i, i+chunkSize));
    };
    for (let i = 0; i < certificatesArray.length; i += chunkSize) {
        certificateChunks.push(certificatesArray.slice(i, i+chunkSize));
    };
    for (let i = 0; i < workCriteriaArray.length; i += chunkSize) {
        workCriteriaChunks.push(workCriteriaArray.slice(i, i+chunkSize));
    };

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
                            Other vehicles you will drive
                        </div>
                    </div>

                    <div className='candidate-page-card-container' >
                        {otherVehiclesChunk.map((chunk, idx) => (
                            <div className='skills-box-container' key={`otherVehicles-group-${idx}`} >
                                {chunk.concat(Array(3 - chunk.length).fill(null)).map((otherVehiclesValue, index) => (
                                    otherVehiclesValue ? (
                                        <div className='skills-single-line skills-single-line-edit' key={otherVehiclesValue}>
                                            <input 
                                                type='checkbox'
                                                id={`otherVehicles-${otherVehiclesValue}`}
                                                checked={updatedSkills.otherVehicles.includes(otherVehiclesValue)}
                                                onChange={(e) => handleValueChange(e, otherVehiclesValue, "otherVehicles", "skills")}
                                            />
                                            <label className='skills-box-label' htmlFor={`otherVehicles-${otherVehiclesValue}`}>
                                                {otherVehiclesValue}
                                            </label>
                                        </div>
                                    ) : (
                                        <div key={`empty-${index}`} className='skills-single-line skills-single-line-edit'></div>
                                    )
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Trailers
                        </div>
                    </div>

                    <div className='candidate-page-card-container' >
                        {trailersChunks.map((chunk, idx) => (
                            <div className='skills-box-container' key={`trailer-group-${idx}`} >
                                {chunk.concat(Array(3 - chunk.length).fill(null)).map((trailersValue, index) => (
                                    trailersValue ? (
                                        <div className='skills-single-line skills-single-line-edit' key={trailersValue}>
                                            <input 
                                                type='checkbox'
                                                id={`trailer-${trailersValue}`}
                                                checked={updatedSkills.trailers.includes(trailersValue)}
                                                onChange={(e) => handleValueChange(e, trailersValue, "trailers", "skills")}
                                            />
                                            <label className='skills-box-label' htmlFor={`trailer-${trailersValue}`}>
                                                {trailersValue}
                                            </label>
                                        </div>
                                    ) : (
                                        <div key={`empty-${index}`} className='skills-single-line skills-single-line-edit'></div>
                                    )
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Gearboxes
                        </div>
                    </div>

                    <div className='candidate-page-card-container' >
                        {gearboxChunks.map((chunk, idx) => (
                            <div className='skills-box-container' key={`gearbox-group-${idx}`} >
                                {chunk.concat(Array(3 - chunk.length).fill(null)).map((gearboxesValue, index) => (
                                    gearboxesValue ? (
                                        <div className='skills-single-line skills-single-line-edit' key={gearboxesValue}>
                                            <input 
                                                type='checkbox'
                                                id={`gearbox-${gearboxesValue}`}
                                                checked={updatedSkills.gearboxes.includes(gearboxesValue)}
                                                onChange={(e) => handleValueChange(e, gearboxesValue, "gearboxes", "skills")}
                                            />
                                            <label className='skills-box-label' htmlFor={`gearbox-${gearboxesValue}`}>
                                                {gearboxesValue}
                                            </label>
                                        </div>
                                    ) : (
                                        <div key={`empty-${index}`} className='skills-single-line skills-single-line-edit'></div>
                                    )
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Loads
                        </div>
                    </div>

                    <div className='candidate-page-card-container' >
                        {loadsChunks.map((chunk, idx) => (
                            <div className='skills-box-container' key={`gearbox-group-${idx}`} >
                                {chunk.concat(Array(3 - chunk.length).fill(null)).map((loadsChunks, index) => (
                                    loadsChunks ? (
                                        <div className='skills-single-line skills-single-line-edit' key={loadsChunks}>
                                            <input 
                                                type='checkbox'
                                                id={`loads-${loadsChunks}`}
                                                checked={updatedSkills.loads.includes(loadsChunks)}
                                                onChange={(e) => handleValueChange(e, loadsChunks, "loads", "skills")}
                                            />
                                            <label className='skills-box-label' htmlFor={`loads-${loadsChunks}`}>
                                                {loadsChunks}
                                            </label>
                                        </div>
                                    ) : (
                                        <div key={`empty-${index}`} className='skills-single-line skills-single-line-edit'></div>
                                    )
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Certificates
                        </div>
                    </div>

                    <div className='candidate-page-card-container' >
                        {certificateChunks.map((chunk, idx) => (
                            <div className='skills-box-container' key={`certificates-group-${idx}`} >
                                {chunk.concat(Array(3 - chunk.length).fill(null)).map((certificateChunks, index) => (
                                    certificateChunks ? (
                                        <div className='skills-single-line skills-single-line-edit' key={certificateChunks}>
                                            <input 
                                                type='checkbox'
                                                id={`certificate-${certificateChunks}`}
                                                checked={updatedSkills.certificates.includes(certificateChunks)}
                                                onChange={(e) => handleValueChange(e, certificateChunks, "certificate", "skills")}
                                            />
                                            <label className='skills-box-label' htmlFor={`certificate-${certificateChunks}`}>
                                                {certificateChunks}
                                            </label>
                                        </div>
                                    ) : (
                                        <div key={`empty-${index}`} className='skills-single-line skills-single-line-edit'></div>
                                    )
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className='card-detail-title'>
                        <div className='card-title'>
                            Work Criteria
                        </div>
                    </div>

                    <div className='candidate-page-card-container' >
                        {workCriteriaChunks.map((chunk, idx) => (
                            <div className='skills-box-container' key={`certificates-group-${idx}`} >
                                {chunk.concat(Array(3 - chunk.length).fill(null)).map((workCriteriaChunks, index) => (
                                    workCriteriaChunks ? (
                                        <div className='skills-single-line skills-single-line-edit' key={workCriteriaChunks}>
                                            <input 
                                                type='checkbox'
                                                id={`workCriteria-${workCriteriaChunks}`}
                                                checked={updatedSkills.workCriteria.includes(workCriteriaChunks)}
                                                onChange={(e) => handleValueChange(e, workCriteriaChunks, "workCriteria", "skills")}
                                            />
                                            <label className='skills-box-label' htmlFor={`workCriteria-${workCriteriaChunks}`}>
                                                {workCriteriaChunks}
                                            </label>
                                        </div>
                                    ) : (
                                        <div key={`empty-${index}`} className='skills-single-line skills-single-line-edit'></div>
                                    )
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </>
    )
}