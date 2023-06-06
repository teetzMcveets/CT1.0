import React, { useState, useRef, useEffect } from 'react';
import './CandidateDetails.css';
import { Route, Routes, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateCandidate } from '../../../../features/candidates/candidateSlice';
import SubNavDriving from '../../../../shared/Navigation/SubNav/Driving/SubNavDriving'
import SubNavIndustrial from '../../../../shared/Navigation/SubNav/Industrial/SubNavIndustrial';
import CandidateInfoCard from './CandidateInfoCard/CandidateInfoCard';
import PrimaryQuestions from './CandidatePages/PrimaryQuestions/PrimaryQuestions';
import PrimaryQuestionsForm from './CandidatePages/PrimaryQuestions/PrimaryQuestionsForm';
import PreferenceQuestions from './CandidatePages/PreferenceQuestions/PreferenceQuestions';
import PreferenceQuestionsForm from './CandidatePages/PreferenceQuestions/PreferenceQuestionsForm';
import MedicalQuestions from './CandidatePages/MedicalQuestions/MedicalQuestions';
import MedicalQuestionsForm from './CandidatePages/MedicalQuestions/MedicalQuestionsForm';
import BankDetails from './CandidatePages/BankDetails/BankDetails';
import BankDetailsForm from './CandidatePages/BankDetails/BankDetailsForm';


export default function CandidateDetails() {
    const { id } = useParams();
    const candidate = useSelector((state) => state.candidate.byId[id]);
    const location = useLocation();
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const changesMade = useRef(false);
    const navigate = useNavigate();

    // STATE FOR EACH PAGE
    const [updatedPrimaryQuestions, setUpdatedPrimaryQuestions] = useState({
        ...candidate,
    })
    const [updatedPreferenceQuestions, setUpdatedPreferenceQuestions] = useState({
        ...candidate
    })
    const [updatedMedicalQuestions, setUpdatedMedicalQuestions] = useState({
        ...candidate,
        medicalAgreementTimestamp: null,
    })
    const [updatedBankDetails, setUpdatedBankDetails] = useState({
        ...candidate,
    })

    // TOGGLE EDIT FOR EACH PAGE
    const toggleEdit = () => {
        if (isEditing && changesMade.current && !window.confirm('Unsaved changes will be lost. Continue?')) {
            return;
        }

        if (isEditing && changesMade.current) {
            setUpdatedPrimaryQuestions({
                ...candidate,
            })
            setUpdatedPreferenceQuestions({
                ...candidate,
            })
            setUpdatedBankDetails({
                ...candidate,
            })
            changesMade.current = false;
        }
        setIsEditing(!isEditing);
    }

    // HANDLE STATE LOCALLY FOR EACH PAGE
    const handleUpdatedForm = (field, value) => {
        const pathName = location.pathname;

        if (pathName.endsWith('primary-questions')) {
            setUpdatedPrimaryQuestions(prevState => ({
                ...prevState,
                [field]: value
            }))
        } else if (pathName.endsWith('preference-questions')) {
            setUpdatedPreferenceQuestions(prevState => ({
                ...prevState,
                [field]: value
            }))
        } else if (pathName.endsWith('medical-questions')) {
            setUpdatedMedicalQuestions(prevState => ({
                ...prevState,
                [field]: value
            }))
        } else if (pathName.endsWith('bank-details')) {
            setUpdatedBankDetails(prevState => ({
                ...prevState,
                [field]: value,
            }))
        }

        changesMade.current = true;
    }

    // ACCESS CHANGE IN PRIMARY QUESTIONS
    const handleAccessChange = (e, accessValue) => {    
        if (e.target.checked) {
            if (!candidate.access.includes(accessValue)) {
                setUpdatedPrimaryQuestions(prevState => ({
                    ...prevState,
                    access: [ ...prevState.access, accessValue ]
                }));
            }
        } else {
            setUpdatedPrimaryQuestions(prevState => ({
                ...prevState, 
                access: prevState.access.filter(value => value !== accessValue)
            }));
        }
    };

    // CONTACT PREFERENCE CHANGE IN PRIMARY QUESTIONS
    const handleContactPrefChange = (e, contactPrefValue) => {
        if (e.target.checked) {
            if (!candidate.contactPref.includes(contactPrefValue)) {
                setUpdatedPrimaryQuestions(prevState => ({
                    ...prevState,
                    contactPref: [ ...prevState.contactPref, contactPrefValue ]
                }));
            }
        } else {
            setUpdatedPrimaryQuestions(prevState => ({
                ...prevState, 
                contactPref: prevState.contactPref.filter(value => value !== contactPrefValue)
            }));
        }
    };


    // PPE OWNED CHANGE IN PREFERENCE QUESTIONS
    const handlePPEOwnedChange = (e, ppeOwnedValue) => {
        if (e.target.checked) {
            if (!candidate.ppeOwned.includes(ppeOwnedValue)) {
                setUpdatedPreferenceQuestions(prevState => ({
                    ...prevState,
                    ppeOwned: [ ...prevState.ppeOwned, ppeOwnedValue ]
                }));
            }           
        } else {
            setUpdatedPreferenceQuestions(prevState => ({
                ...prevState,
                ppeOwned: prevState.ppeOwned.filter(value => value !== ppeOwnedValue)
            }));
        }
    };

    // WEEKDAY AVAILABLE CHANGE IN PRIMARY QUESTIONS
    const handleWeekDaysChange = (e, weekDaysValue) => {
        if (e.target.checked) {
            if(!candidate.weekDays.includes(weekDaysValue)) {
                setUpdatedPreferenceQuestions(prevState => ({
                    ...prevState, 
                    weekDays: [ ...prevState.weekDays, weekDaysValue ]
                }));
            }
        } else {
            setUpdatedPreferenceQuestions(prevState => ({
                ...prevState,
                weekDays: prevState.weekDays.filter(value => value !== weekDaysValue)
            }));
        }
    };

    // SHIFT CHANGE HANDLED IN PREFERENCE QUESTIONS
    const handleShiftsChange = (e, shiftsValue) => {
        if (e.target.checked) {
            if(!candidate.shifts.includes(shiftsValue)) {
                setUpdatedPreferenceQuestions(prevState => ({
                    ...prevState,
                    shifts: [ ...prevState.shifts, shiftsValue]
                }));
            }
        } else {
            setUpdatedPreferenceQuestions(prevState => ({
                ...prevState,
                shifts: prevState.shifts.filter(value => value !== shiftsValue)
            })) 
        }
    }

    //MEDICAL AGREEMENT DATE FOR MEDICAL QUESTIONS
    const handleMedicalAgreementChange = (e) => {
        if (e.target.checked) {
            const now = new Date()
            const dateString = now.toLocaleDateString();
            setUpdatedMedicalQuestions(prevState => ({
                ...prevState,
                medicalAgreementTimestamp: dateString,
            }));
        } else {
            setUpdatedMedicalQuestions(prevState => ({
                ...prevState,
                medicalAgreementTimestamp: null,
            }));
        }
        changesMade.current = true;
    };

    // GET ONE YEAR ON FROM OHA DATE CONFIRMED
    const getOneYearAhead = (date) => {
        if (!date) return '';

        const dateObject = new Date(date);
        dateObject.setFullYear(dateObject.getFullYear() + 1);

        return dateObject.toISOString().substring(0, 10);
    }

    // HANDLE SAVE FOR EACH PAGE
    const handleSave = () => {
        const pathName = location.pathname;
        let updatedQuestions;

        if (pathName.endsWith('primary-questions')) {
            updatedQuestions = updatedPrimaryQuestions
        } else if (pathName.endsWith('preference-questions')) {
            updatedQuestions = updatedPreferenceQuestions
        } else if (pathName.endsWith('medical-questions')) {
            updatedQuestions = updatedMedicalQuestions
        } else if (pathName.endsWith('bank-details')) {
            updatedQuestions = updatedBankDetails
        }

        if (updatedQuestions) {
            dispatch(updateCandidate(updatedQuestions));
            setIsEditing(false)
        }

        changesMade.current = false;
    }

    // STOP BEFORE LOSING UNSAVED DATA
    useEffect(() => {
        const warnUserAboutUnsavedChanges = (e) => {
            if (!isEditing || !changesMade.current) {
                return;
            }

            e.preventDefault();
            e.returnValue = '';
        }

        window.addEventListener('beforeunload', warnUserAboutUnsavedChanges);

        return () => {
            window.removeEventListener('beforeUnload', warnUserAboutUnsavedChanges);
        };
    }, [isEditing]);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(`/candidates/${candidate.id}/primary-questions`);
        }, 10);
    
        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);  
        

    return (
        <>
            <div className='main-content'>
                <div className='candidates-detail-container'>
                    <div className='candidates-detail-top-container'>
                        <CandidateInfoCard 
                            candidate={candidate}
                        />
                    </div>

                    <div className='candidates-details-bottom-container'>
                        <div className='candidate-details-left-container'>
                            <div className='candidate-details-infoCard-subNav'>
                                {candidate.industry === 'Driving' ?
                                    <SubNavDriving />
                                    :
                                    <SubNavIndustrial />
                                }
                            </div>
                            
                        </div>
                        
                        <div className='candidate-details-center-container'>
                            <Routes>
                                <Route
                                    path='primary-questions'
                                    element={
                                        !isEditing ?
                                            <PrimaryQuestions 
                                                candidate={candidate}
                                                edit={toggleEdit}                                  
                                            />
                                            :
                                            <PrimaryQuestionsForm 
                                                candidate={candidate}
                                                updatedPrimaryQuestions={updatedPrimaryQuestions}
                                                handleOnChange={handleUpdatedForm}
                                                isEditing={isEditing}
                                                edit={toggleEdit}
                                                save={handleSave}
                                                handleAccessChange={handleAccessChange}
                                                handleContactPrefChange={handleContactPrefChange}
                                            />
                                    }
                                />
                                <Route 
                                    path='preference-questions'
                                    element={
                                        !isEditing ?
                                            <PreferenceQuestions
                                                candidate={candidate}
                                                edit={toggleEdit}
                                                isEditing={isEditing}
                                            />
                                            :
                                            <PreferenceQuestionsForm
                                                candidate={candidate}
                                                updatedPreferenceQuestions={updatedPreferenceQuestions}
                                                handleOnChange={handleUpdatedForm}
                                                edit={toggleEdit}
                                                save={handleSave}
                                                handlePPEOwnedChange={handlePPEOwnedChange}
                                                handleWeekDaysChange={handleWeekDaysChange}
                                                handleShiftsChange={handleShiftsChange}
                                            />

                                    } 
                                />
                                <Route 
                                    path='medical-questions'
                                    element={
                                        !isEditing ?
                                            <MedicalQuestions
                                                candidate={candidate}
                                                edit={toggleEdit}
                                                isEditing={isEditing}
                                            />
                                            :
                                            <MedicalQuestionsForm
                                                candidate={candidate}
                                                updatedMedicalQuestions={updatedMedicalQuestions}
                                                handleOnChange={handleUpdatedForm}
                                                edit={toggleEdit}
                                                save={handleSave}
                                                handleMedicalAgreementChange={handleMedicalAgreementChange}
                                                getOneYearAhead={getOneYearAhead}
                                            />
                                    }
                                />
                                <Route
                                    path='bank-details'
                                    element={
                                        !isEditing ?
                                            <BankDetails
                                                candidate={candidate}
                                                edit={toggleEdit}
                                                isEditing={isEditing}
                                            />
                                            :
                                            <BankDetailsForm
                                                candidate={candidate}
                                                updatedBankDetails={updatedBankDetails}
                                                handleOnChange={handleUpdatedForm}
                                                edit={toggleEdit}
                                                save={handleSave}
                                            />
                                    }
                                />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}