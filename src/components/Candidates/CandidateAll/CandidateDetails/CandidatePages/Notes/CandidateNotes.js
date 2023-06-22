import React, { useState } from 'react';
import './CandidateNotes.css';

export default function CandidateNotes ({
    notes,
    onAddNote,
    onEditNote,
    onDeleteNote,
}) {

    const [noteInput, setNoteInput] = useState('');

    const handleInputChange = (e) => {
        setNoteInput(e.target.value);
    }

    const handleAddNote = () => {
        onAddNote(noteInput);
        setNoteInput('');
    }

    const handleEditNote = (id) => {
        const newContent = prompt('Enter new content');
        if (newContent) onEditNote(id, newContent);
    }

    return (
        <>
            <div className='notes-container'>
                <div className='notes-title-container'>
                    Notes
                </div>
                {notes.map(note => (
                    <div key={note.id} className='added-note-container'>
                        <div>
                            <p>{note.content}</p>
                        </div>
                        <div className='added-note-buttons'>
                            <p className='note-date-text'>{note.date}</p>
                            <div>
                                <button className='button-primary' onClick={() => handleEditNote(note.id)}>Edit</button>
                                <button className='button-primary' onClick={() => onDeleteNote(note.id)}>Delete</button>
                            </div>
                        </div>
                </div>
                ))}
                <input value={noteInput} onChange={handleInputChange} />
                <button onClick={handleAddNote}>Add Note</button>
            </div>
        </>
    );
};