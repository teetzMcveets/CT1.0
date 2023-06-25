import React, { useState } from 'react';
import './CandidateNotes.css';
import EditNoteModal from './EditNoteModal'

export default function CandidateNotes ({
    notes,
    onAddNote,
    onDeleteNote,
    onEdit,
    isEditMode,
    currentNote,
    onModalChange,
    onModalSubmit,
    onModalClose,
}) {

    const [noteInput, setNoteInput] = useState('');

    const handleInputChange = (e) => {
        setNoteInput(e.target.value);
    }

    const handleAddNote = () => {
        onAddNote(noteInput);
        setNoteInput('');
    }

    return (
        <>
            <div className='notes-container'>
                <div className='notes-title-container'>
                    Notes
                </div>
                {notes.map(note => (
                    <div key={note.id} className='added-note-container'>
                        <div className='added-note-content'>
                            <p>{note.content}</p>
                        </div>
                        <div className='added-note-buttons'>
                            <p className='note-date-text'>{note.date}</p>
                            <div className='button-container-candidate-notes'>
                                <button className='button-secondary small-button' onClick={() => onEdit(note)}>
                                    <i className='fas fa-pencil-alt'></i>
                                </button>
                                <button className='button-secondary small-button' onClick={() => onDeleteNote(note.id)}>
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='add-new-note-container'>
                    <textarea
                        value={noteInput} 
                        onChange={handleInputChange} 
                        className='added-note-input'
                        placeholder='Add note here...'
                        
                    />
                    <div className='add-note-button-container'>
                        <button onClick={handleAddNote} className='button-primary'>Add Note</button>
                    </div>
                </div>
            </div>
            <EditNoteModal
                isOpen={isEditMode}
                note={currentNote}
                onChange={onModalChange}
                onSubmit={onModalSubmit}
                onRequestClose={onModalClose}
            />
        </>
    );
};
