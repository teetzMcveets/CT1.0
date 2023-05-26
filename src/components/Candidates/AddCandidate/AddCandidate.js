import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddCandidateForm from './AddCandidateForm';
import './AddCandidate.css';
import { addCandidate } from '../../../features/candidates/candidateSlice';

export default function AddCandidate () {
    const [candidate, setCandidate] = useState({
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
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddCandidate = (e) => {
        e.preventDefault();
        console.log('Adding Candidate: ', candidate); //take this out when complete
        dispatch(addCandidate(candidate));
        navigate('/candidates');
    };

    const handleInputChange = (e) => {
        setCandidate({
            ...candidate, 
            [e.target.name]: e.target.value
        });
    }

    const handlePhoneChange = (e, nextInput) => {
        if (e.target.value.length >= e.target.maxLength) {
            nextInput.current && nextInput.current.focus();
        }
    }

    return (
        <>
            <div className='main-content'>
                <AddCandidateForm 
                    onAddCandidate={handleAddCandidate}
                    onInputChange={handleInputChange}
                    candidate={candidate}
                    onPhoneChange={handlePhoneChange}
                />
            </div>
        </>
    )
}