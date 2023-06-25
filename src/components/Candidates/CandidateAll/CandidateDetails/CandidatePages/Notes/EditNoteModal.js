import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function EditNoteModal({isOpen, note, onChange, onSubmit, onRequestClose}) {
    if (!note) return null;
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
            style={customStyles} // use the custom styles
        >
            <h2>Edit Note</h2>
            <input 
                type="text" 
                className="modal-input" 
                value={note.content} 
                onChange={onChange} 
            />
            <button 
                className="modal-submit" 
                onClick={onSubmit}
            >
                Submit
            </button>
        </Modal>
    );
}


