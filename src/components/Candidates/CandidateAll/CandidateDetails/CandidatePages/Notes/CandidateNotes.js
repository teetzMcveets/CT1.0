import React, { useState } from 'react';

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
            <div className='candidate-page-left-container'>

            </div>

            <div className='candidate-page-right-candidate'>
                <div className='candidate-page-full-page'>
                    <h2>Notes</h2>
                    {notes.map(note => (
                        <>
                            <p>{note.content}</p>
                            <p>{note.date}</p>
                            <button onClick={() => handleEditNote(note.id)}>Edit</button>
                            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                        </>
                    ))}
                    <input value={noteInput} onChange={handleInputChange} />
                    <button onClick={() => handleAddNote}>Add</button>
                </div>
            </div>
        </>
    )
}