import React from 'react';

export default function AddCandidateForm () {

    return (
        <>
            <div className='top-container'>

                <div className='return-button'>
                    <button className='button-primary'>
                        Back
                    </button>
                </div>

                <div className='page-title'>
                    <h2>Add New Worker</h2>
                </div>

            </div>

            <div className='form'>
                <form>

                    <div className='new-candidate-details-title'>
                        <div className='form-box-title'>
                            <p>New candidate details</p>
                        </div>
                    </div>

                    <div className='form-card-placement'>
                        <div className='form-label-input'>
                            <label className='candidate-label'>
                                Industry
                            </label>
                            <div className='input-container'>
                                <input 
                                    type='text'
                                    className='add-candidate-input'
                                />
                            </div>
                        </div>
                        <div className='form-label-input'>
                            <label className='candidate-label'>
                                Owner
                            </label>
                            <div className='input-container'>
                                <input 
                                    type='text'
                                    className='add-candidate-input'
                                />
                            </div>
                        </div>
                        <div className='form-label-input'>
                            <label className='candidate-label'>
                                First name
                            </label>
                            <div className='input-container'>
                                <input 
                                    type='text'
                                    className='add-candidate-input'
                                />
                            </div>
                        </div>

                        <div className='form-label-input'>
                            <label className='candidate-label'>
                                    Middle names               
                             </label>
                            <div className='input-container'>
                                <input 
                                    type='text'
                                    className='add-candidate-input'
                                    placeholder='Optional'
                                />
                            </div>
                        </div>

                        <div className='form-label-input'>
                            <label className='candidate-label'>
                                Last name
                            </label>
                            <div className='input-container'>
                                <input 
                                    type='text'
                                    className='add-candidate-input'
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}