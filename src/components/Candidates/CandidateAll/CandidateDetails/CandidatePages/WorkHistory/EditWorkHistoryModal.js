import React from 'react';
import Modal from 'react-modal';
import './'

Modal.setAppElement('#root');

export default function EditWorkHistoryModal({isOpen, workHistory, onChange, onSubmit, onRequestClose}) {
    if (!workHistory) return null;
    const customStyles = {
        content : {
            top                     : '50%',
            left                    : '50%',
            right                   : 'auto',
            bottom                  : 'auto',
            marginRight             : '-50%',
            transform               : 'translate(-50%, -50%)',
            width                   : '30%', // controls the width of the modal
            height                  : '40%', // controls the height of the modal
            background              : 'var(--BGC)',
        },
        overlay: {
            zIndex                  : 1000,
            background              : 'rgba(0, 0, 0, 0.75)',
        } // Ensures the modal sits on top of everything else
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >
            
            <h2>Edit Work History</h2>
            <div>
                <input>
                </input>
            </div>

        </Modal>
    )
}