import React, { useState, useRef, useEffect } from 'react';
import './CandidateDetails.css';
import { Route, Routes, useParams, useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-modal'
import { useSelector, useDispatch } from 'react-redux';
import { updateCandidate, addWorkHistory, removeWorkHistory } from '../../../../features/candidates/candidateSlice';
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
import SkillsDriving from './CandidatePages/Skills/Driving/SkillsDriving';
import SkillsDrivingForm from './CandidatePages/Skills/Driving/SkillsDrivingForm';
import SkillsIndustrial from './CandidatePages/Skills/Industrial/SkillsIndustrial';
import SkillsIndustrialForm from './CandidatePages/Skills/Industrial/SkillsIndustrialForm';
import WorkHistory from './CandidatePages/WorkHistory/WorkHistory';
import Licenses from './CandidatePages/Licenses/Licenses';
import LicensesForm from './CandidatePages/Licenses/LicensesForm';
import endorsements from '../../../../utilities/endorsements';
import CandidateNotes from './CandidatePages/Notes/CandidateNotes';

Modal.setAppElement('#root');

export default function CandidateDetails() {
    const { id } = useParams();
    const candidate = useSelector((state) => state.candidate.byId[id]);
    const location = useLocation();
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [isWorkHistoryModalOpen, setIsWorkHistoryModalOpen] = useState(false);
    const changesMade = useRef(false);
    const navigate = useNavigate();

    // STATE FOR EACH PAGE
    const getDefinedInitialObject = (candidate) => {
        return Object.keys(candidate).reduce((acc, key) => {
            acc[key] = candidate[key] || '';
            return acc;
        }, []);
    };

    const [updatedPrimaryQuestions, setUpdatedPrimaryQuestions] = useState(
        getDefinedInitialObject(candidate)
    );
    const [updatedPreferenceQuestions, setUpdatedPreferenceQuestions] = useState(
        getDefinedInitialObject(candidate)
    );
    const [updatedMedicalQuestions, setUpdatedMedicalQuestions] = useState({
        ...getDefinedInitialObject(candidate),
        medicalAgreementTimestamp: null,
        OHADateConfirmed: '',
    });
    const [updatedBankDetails, setUpdatedBankDetails] = useState(
        getDefinedInitialObject(candidate)
    );
    const [updatedSkills, setUpdatedSkills] = useState(
        getDefinedInitialObject(candidate)
    );
    const [updatedWorkHistory, setUpdatedWorkHistory] = useState(
        getDefinedInitialObject(candidate)
    );
    const [updatedLicenses, setUpdatedLicenses] = useState(
        getDefinedInitialObject(candidate)
    );

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
            setUpdatedMedicalQuestions({
                ...candidate,
            })
            setUpdatedBankDetails({
                ...candidate,
            })
            setUpdatedSkills({
                ...candidate,
            })
            setUpdatedLicenses({
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
        } else if (pathName.endsWith('skills-driving')) {
            setUpdatedSkills(prevState => ({
                ...prevState,
                [field]: value
            }))
        } else if (pathName.endsWith('skills-industrial')) {
            setUpdatedSkills(prevState => ({
                ...prevState,
                [field]: value
            }))
        } else if (pathName.endsWith('licenses')) {
            setUpdatedLicenses(prevState => ({
                ...prevState,
                [field]: value
            }))
        }

        changesMade.current = true;
    }
    
    // HANDLE TICK BOXES FOR DIFFERENT PAGES
    const handleValueChange = (e, value, stateKey, arrayKey) => {
        const updateState = (prevState) => {
            if (e.target.checked) {
                return {
                    ...prevState,
                    [stateKey]: [...prevState[stateKey], value],
                };
            } else {
                return {
                    ...prevState,
                    [stateKey]: [...prevState[stateKey].filter((val) => val !== value)],
                };
            }
        };

        if (arrayKey === 'primary') {
            setUpdatedPrimaryQuestions((prevState) => updateState(prevState));
        } else if (arrayKey === 'preference') {
            setUpdatedPreferenceQuestions((prevState) => updateState(prevState));
        } else if (arrayKey === 'skills') {
            setUpdatedSkills((prevState) => updateState(prevState));
        } else if (arrayKey === 'licenses') {
            setUpdatedLicenses((prevState) => updateState(prevState));
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

    //handle adding new work history
    const handleOpenWorkHistoryModal = () => {
        setIsWorkHistoryModalOpen(true);
    }

    const handleCloseWorkHistoryModal = () => {
        setIsWorkHistoryModalOpen(false);
    }

    const handleSaveWorkHistory = (workHistory) => {
        const workHistoryWithId = { ...workHistory, id: candidate.workHistory.length };
        dispatch(addWorkHistory({ id, workHistory: workHistoryWithId }));
        setUpdatedWorkHistory(prevState => ({
            ...prevState,
            workHistory: [...prevState.workHistory, workHistoryWithId]
        }))
        changesMade.current = true;
        setIsWorkHistoryModalOpen(false);
    }

    const handleRemoveWorkHistory = (workHistoryId) => {
        dispatch(removeWorkHistory({ id, workHistoryId }));
        setUpdatedWorkHistory(prevState => ({
          ...prevState,
          workHistory: prevState.workHistory.filter(history => history.id !== workHistoryId)
        }))
        changesMade.current = true;
    }
    
    // LICENSES LOGIC
    const endorsementOptions = endorsements;
    const [selectValue, setSelectValue] = useState('');
    const [selectedEndorsements, setSelectedEndorsements] = useState([]);
    const [offenseDate, setOffenseDate] = useState('');
    const [points, setPoints] = useState('');

    const handleSelect = (e) => {
        const endorsementValue = e.target.value;
        const endorsement = endorsementOptions.find(item => item.value === endorsementValue);
        setSelectedEndorsements([...selectedEndorsements, endorsement]);
        setSelectValue('');
    }

    const handleOffenseDateChange = (index, date) => {
        setOffenseDate(prevState => {
            const newState = [...prevState];
            newState[index] = date;
            return newState;
        })
    }

    const handlePointsChange = (index, point) => {
        setPoints(prevState => {
            const newState = [...prevState];
            newState[index] = point;
            return newState;
        })
    }

    const handleRemoveEndorsement = (index) => {
        const newSelectedEndorsements = [...selectedEndorsements];
        newSelectedEndorsements.splice(index, 1);
        setSelectedEndorsements(newSelectedEndorsements);
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
        } else if (pathName.endsWith('skills-driving')) {
            updatedQuestions = updatedSkills
        } else if (pathName.endsWith('skills-industrial')) {
            updatedQuestions = updatedSkills
        } else if (pathName.endsWith('licenses')) {
            updatedQuestions = {
                ...updatedLicenses,
                selectedEndorsements,
                offenseDate,
                points,
            }
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

    //CANDIDATE NOTES LOGIC
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const addNote = (content) => {
        const newNote = {
            id: notes.length + 1,
            content,
            date: new Date().toLocaleDateString(),
        };
        setNotes([...notes, newNote])
    }

    const editNote = (id, newContent) => {
        const newNotes = notes.map(note => note.id === id ? {...note, content: newContent} : note );
        setNotes(newNotes);
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter(note => note.id !== id);
        setNotes(newNotes);
    }

    const handleModalChange = (e) => {
        setCurrentNote({...currentNote, content: e.target.value});
    }

    const handleModalSubmit = () => {
        editNote(currentNote.id, currentNote.content);
        setEditMode(false);
    }

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
                                                handleValueChange={handleValueChange}
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
                                                handleValueChange={handleValueChange}
                                                edit={toggleEdit}
                                                save={handleSave}
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
                                <Route 
                                    path='skills-driving'
                                    element={
                                        !isEditing ?
                                            <SkillsDriving
                                                candidate={candidate}
                                                edit={toggleEdit}
                                                isEditing={isEditing}
                                            />
                                            :
                                            <SkillsDrivingForm 
                                                candidate={candidate}
                                                updatedSkills={updatedSkills}
                                                handleOnChange={handleUpdatedForm}
                                                handleValueChange={handleValueChange}
                                                edit={toggleEdit}
                                                save={handleSave}
                                            />
                                    }
                                />
                                <Route 
                                    path='skills-industrial'
                                    element={
                                        !isEditing ?
                                            <SkillsIndustrial
                                                candidate={candidate}
                                                edit={toggleEdit}
                                                isEditing={isEditing}
                                            />
                                            :
                                            <SkillsIndustrialForm
                                                edit={toggleEdit}
                                                save={handleSave}
                                                updatedSkills={updatedSkills}
                                                handleOnChange={handleUpdatedForm}
                                                handleValueChange={handleValueChange}

                                            />
                                    }
                                />
                                <Route
                                    path='work-history'
                                    element={
                                        <WorkHistory 
                                            candidate={candidate}
                                            onAddClick={handleOpenWorkHistoryModal}
                                            onDeleteClick={handleRemoveWorkHistory}
                                            isWorkHistoryModalOpen={isWorkHistoryModalOpen}
                                            onModalClose={handleCloseWorkHistoryModal}
                                            onSaveModal={handleSaveWorkHistory}
                                            updatedWorkHistory={updatedWorkHistory}
                                        />
                                    }
                                />
                                <Route
                                    path='licenses'
                                    element={
                                        !isEditing ?
                                            <Licenses
                                                candidate={candidate}
                                                edit={toggleEdit}
                                                isEditing={isEditing}
                                                selectedEndorsements={selectedEndorsements}
                                                offenseDate={offenseDate}
                                                points={points}
                                                updatedLicenses={updatedLicenses}
                                            />
                                        : 
                                            <LicensesForm
                                                candidate={candidate}
                                                updatedLicenses={updatedLicenses}
                                                handleOnChange={handleUpdatedForm}
                                                edit={toggleEdit}
                                                save={handleSave}
                                                handleValueChange={handleValueChange}
                                                endorsementOptions={endorsementOptions}
                                                selectValue={selectValue}
                                                handleSelect={handleSelect}
                                                selectedEndorsements={selectedEndorsements}
                                                handleOffenseDateChange={handleOffenseDateChange}
                                                handlePointsChange={handlePointsChange}
                                                handleRemoveEndorsement={handleRemoveEndorsement}
                                            />
                                    }
                                />
                                <Route
                                    path='candidate-notes'
                                    element={
                                        <CandidateNotes 
                                            notes={notes}
                                            onAddNote={addNote}
                                            onDeleteNote={deleteNote}
                                            onEdit={(note) => {
                                                setCurrentNote(note);
                                                setEditMode(true);
                                            }}
                                            isEditMode={editMode}
                                            currentNote={currentNote}
                                            onModalChange={handleModalChange}
                                            onModalSubmit={handleModalSubmit}
                                            onModalClose={() => setEditMode(false)}
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