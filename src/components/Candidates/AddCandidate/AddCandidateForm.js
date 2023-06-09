import React from 'react';

export default function AddCandidateForm ({
    onAddCandidate,
    onInputChange,
    candidate,
    // onPhoneChange,
    onBack,
}) {

    // const firstFiveRef = useRef(null);
    // const nextThreeRef1 = useRef(null);
    // const nextThreeRef2 = useRef(null);

    // const [joinedNumber, setJoinedNumber] = useState({
    //     firstFive: '',
    //     nextThree1: '',
    //     nextThree2: '',
    // })

    // const handleNumberInput = (e) => {

    // }



    return (
        <>
            <div className='add-candidate-container'>
                <div className='top-container'>

                    <div className='return-button'>
                        <button 
                            className='button-primary'
                            onClick={onBack}    
                        >
                            Back
                        </button>
                    </div>

                </div>

                <div className='form'>
                    <form onSubmit={onAddCandidate}>

                        <div className='new-candidate-details-title'>
                            <div className='form-box-title'>
                                <p>New candidate details</p>
                            </div>
                        </div>

                        <div className='add-candidate-card'>
                            
                            {/* INDUSTRY */}
                            <div className='add-candidate-detail-container'>
                                
                                <label className='add-candidate-label'>
                                        Industry
                                </label>

                                <div className='add-input-container'>
                                    <select
                                        name='industry'
                                        className='add-candidate-input'
                                        value={candidate.industry}
                                        onChange={onInputChange}
                                        required
                                    >
                                        <option value=''>Please select...</option>
                                        <option value='Driving'>Driving</option>
                                        <option value='Industrial'>Industrial</option>
                                    </select>
                                </div>
                            </div>

                            {/* OWNER */}
                            <div className='add-candidate-detail-container'>
                                
                                <label className='add-candidate-label'>
                                    Owner
                                </label>

                                <div className='add-input-container'>
                                    <select 
                                        name='owner'
                                        type='text'
                                        className='add-candidate-input'
                                        value={candidate.owner}
                                        onChange={onInputChange}
                                        required
                                    >
                                        <option value=''>Please select...</option>
                                        <option value='#1'># 1</option>
                                        <option value='#2'># 2</option>
                                        <option value='#3'># 3</option>
                                        <option value='#4'># 4</option>
                                        <option value='#5'># 5</option>
                                    </select>
                                </div>
                            </div>

                            {/* FIRST NAME */}
                            <div className='add-candidate-detail-container'>

                                <label className='add-candidate-label'>
                                    First name
                                </label>

                                <div className='add-input-container'>
                                    <input 
                                        type='text'
                                        className='add-candidate-input'
                                        name='firstName'
                                        value={candidate.firstName}
                                        onChange={onInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* MIDDLE NAMES */}
                            <div className='add-candidate-detail-container'>

                                <label className='add-candidate-label'>
                                        Middle names               
                                </label>

                                <div className='add-input-container'>
                                    <input 
                                        type='text'
                                        className='add-candidate-input'
                                        placeholder='Optional'
                                        name='middleNames'
                                        value={candidate.middleNames}
                                        onChange={onInputChange}
                                    />
                                </div>
                            </div>

                            {/* LAST NAME */}
                            <div className='add-candidate-detail-container'>

                                <label className='add-candidate-label'>
                                    Last name
                                </label>

                                <div className='add-input-container'>
                                    <input 
                                        type='text'
                                        className='add-candidate-input'
                                        name='lastName'
                                        value={candidate.lastName}
                                        onChange={onInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* DATE OF BIRTH */}
                            <div className='add-candidate-detail-container'>

                                <label className='add-candidate-label'>
                                    Date of birth
                                </label>

                                <div className='add-input-container'>
                                    <input 
                                        type='date'
                                        className='add-candidate-input-date'
                                        name='dateOfBirth'
                                        value={candidate.dateOfBirth}
                                        onChange={onInputChange}
                                        required
                                    />
                                </div>

                            </div>

                            {/* GENDER */}
                            <div className='add-candidate-detail-container'>
                                
                                <label className='add-candidate-label'>
                                    Gender
                                </label>
                                
                                <div className='add-input-container'>
                                    <div className='rad-single-container'>

                                        <div className='add-rad-single-answer'>
                                            <input 
                                                type='radio'
                                                id='male'
                                                name='gender'
                                                value='Male'
                                                onChange={onInputChange}
                                                required
                                            />
                                            <label
                                                htmlFor='male'
                                                className='add-rad-label'
                                            >
                                                Male
                                            </label>
                                        </div>

                                        <div className='add-rad-single-answer'>
                                            <input 
                                                type='radio'
                                                id='female'
                                                name='gender'
                                                value='Female'
                                                onChange={onInputChange}
                                            />
                                            <label
                                                htmlFor='female'
                                                className='add-rad-label'
                                            >
                                                Female
                                            </label>
                                        </div>

                                        <div className='add-rad-single-answer'>
                                            <input 
                                                type='radio'
                                                id='notSay'
                                                name='gender'
                                                value='Prefer not to say'
                                                onChange={onInputChange}
                                            />
                                            <label
                                                htmlFor='notSay'
                                                className='add-rad-label'
                                            >
                                                Prefer to not say
                                            </label>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            {/* EMAIL */}
                            <div className='add-candidate-detail-container'>
                            
                                <label className='add-candidate-label'>
                                    Email Address
                                </label>

                                <div className='add-input-container'>
                                    <input 
                                        type='email'
                                        className='add-candidate-input'
                                        name='email'
                                        value={candidate.email}
                                        onChange={onInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* MOBILE  TEST */}
                            {/* <div className='form-label-input'>
                                <label className='candidate-label'>
                                    Mobile Number
                                </label>
                                <div className='input-container'>
                                        <input 
                                            placeholder='+44'
                                            className='add-candidate-input number-code'
                                            disabled
                                        />
                                        <input
                                            ref={firstFiveRef} 
                                            type='tel'
                                            className='add-candidate-input first-five'
                                            minLength='5'
                                            maxLength='5'
                                            name='firstFive'
                                            onChange={(e) => onPhoneChange(e, nextThreeRef1)}
                                        />
                                        <input 
                                            ref={nextThreeRef1}
                                            type='tel'
                                            className='add-candidate-input next-three'
                                            minLength='3'
                                            maxLength='3'
                                            name='nextThree1'
                                            onChange={(e) => onPhoneChange(e, nextThreeRef2)}
                                        />
                                        <input 
                                            ref={nextThreeRef2}
                                            type='tel'
                                            className='add-candidate-input next-three'
                                            minLength='3'
                                            maxLength='3'
                                            name='nextThree2'
                                            onChange={onInputChange}
                                        />
                                </div>
                            </div> */}

                            {/* MOBILE  */}
                            <div className='add-candidate-detail-container'>

                                <label className='add-candidate-label'>
                                    Mobile Number
                                </label>

                                <div className='add-input-container'>
                                    <input 
                                        type='tel'
                                        className='add-candidate-input'
                                        name='number'
                                        value={candidate.number}
                                        onChange={onInputChange}
                                        required
                                    />
                                </div>
                            </div>


                        </div>

                        <div className='create-button-container'>
                            <button type='submit' className='button-primary'>
                                Create Candidate
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}