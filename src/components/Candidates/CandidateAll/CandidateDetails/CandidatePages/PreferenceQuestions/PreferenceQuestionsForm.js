import React from 'react'

export default function PreferenceQuestionsForm ({
    edit,
    save,
    updatedPreferenceQuestions,
}) {
    return (
        <>
            <div style={{ display: 'flex'}}>
                <div>
                    <div className='edit-button-container'>
                        <div>
                            <button
                                className='button-secondary'
                                onClick={save}
                            >
                                <i className='fas fa-save'></i>
                            </button>
                            
                        </div>
                        
                        <button 
                            className='button-secondary'
                            onClick={edit}    
                        >
                            <i className='fas fa-times'></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}