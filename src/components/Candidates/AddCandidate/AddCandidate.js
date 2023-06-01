import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddCandidateForm from './AddCandidateForm';
import './AddCandidate.css';
import { addCandidate } from '../../../features/candidates/candidateSlice';

export default function AddCandidate () {
    const initialCandidate = {
        firstName: '',
        middleNames: '',
        lastName: '',
        industry: '',
        owner: '',
        status: 'Active',
        dateOfBirth: '',
        gender: '',
        email: '',
        number: '',
    }

    const [candidate, setCandidate] = useState(initialCandidate);
    const [isModified, setIsModified] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddCandidate = (e) => {
        e.preventDefault();
        dispatch(addCandidate(candidate));
        navigate('/candidates');
    };

    const handleInputChange = (e) => {
        setIsModified(true);
        setCandidate({
            ...candidate, 
            [e.target.name]: e.target.value
        });
    }

    // const handlePhoneChange = (e, nextInput) => {
    //     if (e.target.value.length >= e.target.maxLength) {
    //         nextInput.current && nextInput.current.focus();
    //     }
    // }

    const handleBack = (e) => {
        if (isModified) {
            if(window.confirm('You have unsaved changes, if you go back, all changes will be lost. Continue?')) {
                setCandidate(initialCandidate);
                setIsModified(false);
                navigate('/candidates');
            }
        } else {
            navigate('/candidates');
        }
    }

    return (
        <>
            <div className='main-content'>
                <AddCandidateForm 
                    onAddCandidate={handleAddCandidate}
                    onInputChange={handleInputChange}
                    candidate={candidate}
                    // onPhoneChange={handlePhoneChange}
                    onBack={handleBack}
                />
            </div>
        </>
    )
}