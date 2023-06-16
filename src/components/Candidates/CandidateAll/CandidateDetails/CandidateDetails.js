import React, { useState, useRef, useEffect } from 'react';
import './CandidateDetails.css';
import { Route, Routes, useParams, useLocation, useNavigate } from 'react-router-dom';
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
    const [updatedSkills, setUpdatedSkills] = useState({
        ...candidate,
    })
    const [updatedWorkHistory, setUpdatedWorkHistory] = useState({
        ...candidate,
    })
    const [updatedLicenses, setUpdatedLicenses] = useState({
        ...candidate
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
            setUpdatedMedicalQuestions({
                ...candidate,
            })
            setUpdatedBankDetails({
                ...candidate,
            })
            setUpdatedSkills({
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

    // ACCESS CHANGE IN PRIMARY QUESTIONS
    const handleAccessChange = (e, accessValue) => {
        setUpdatedPrimaryQuestions(prevState => {
            if (e.target.checked) {
                return {
                    ...prevState,
                    access: [...prevState.access, accessValue]
                };
            } else {
                return {
                    ...prevState,
                    access: prevState.access.filter(value => value !== accessValue)
                }
            }
        })
    }

    // CONTACT PREFERENCE CHANGE IN PRIMARY QUESTIONS
    const handleContactPrefChange = (e, contactPrefValue) => {
        setUpdatedPrimaryQuestions(prevState => {
            if(e.target.checked) {
                return {
                    ...prevState,
                    contactPref: [...prevState.contactPref, contactPrefValue]
                };
            } else {
                return {
                    ...prevState,
                    contactPref: [...prevState.contactValue.filter(value => value !== contactPrefValue)]
                }
            }
        })
    }


    // PPE OWNED CHANGE IN PREFERENCE QUESTIONS
    const handlePPEOwnedChange = (e, ppeOwnedValue) => {
        setUpdatedPreferenceQuestions(prevState => {
            if (e.target.checked) {
                return {
                    ...prevState,
                    ppeOwned: [ ...prevState.ppeOwned, ppeOwnedValue]
                };
            } else {
                return {
                    ...prevState,
                    ppeOwned: [...prevState.ppeOwned.filter(value => value !== ppeOwnedValue)]
                }
            }
        })
    };

    // WEEKDAY AVAILABLE CHANGE IN PRIMARY QUESTIONS
    const handleWeekDaysChange = (e, weekDaysValue) => {
        setUpdatedPreferenceQuestions(prevState => {
            if (e.target.checked) {
                return {
                    ...prevState,
                    weekDays: [...prevState.weekDays, weekDaysValue]
                };
            } else {
                return {
                    ...prevState,
                    weekDays: [...prevState.weekDays.filter(value => value !== weekDaysValue)]
                }
            }
        })
    };

    // SHIFT CHANGE HANDLED IN PREFERENCE QUESTIONS
    const handleShiftsChange = (e, shiftsValue) => {
        setUpdatedPreferenceQuestions(prevState => {
            if (e.target.checked) {
                return {
                    ...prevState,
                    shifts: [...prevState.shifts, shiftsValue]
                }
            } else {
                return {
                    ...prevState,
                    shifts: [...prevState.shifts.filter(value => value !== shiftsValue)]
                }
            }
        })
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

    const handleOtherVehiclesChange = (e, otherVehiclesValue) => {
        setUpdatedSkills(prevState => {
            if (e.target.checked) {
                return {
                    ...prevState,
                    otherVehicles: [...prevState.otherVehicles, otherVehiclesValue]
                }
            } else {
                return {
                    ...prevState,
                    otherVehicles: [...prevState.otherVehicles.filter(value => value !== otherVehiclesValue)]
                }
            }
        })
    }

    //SKILLS PAGES CHECKBOX TRAILERS
    const handleTrailersChange = (e, trailersValue) => {
        setUpdatedSkills(prevState => {
            if (e.target.checked) {
                return {
                    ...prevState,
                    trailers: [...prevState.trailers, trailersValue]
                }
            } else {
                return {
                    ...prevState,
                    trailers: [...prevState.trailers.filter(value => value !== trailersValue)]
                }
            }
        })
    }

    //SKILLS GEARBOX CHECKBOX
    const handleGearboxChange = (e, gearboxesValue) => {
        setUpdatedSkills(prevState => {
            if (e.target.checked) {
                return {
                    ...prevState,
                    gearboxes: [...prevState.gearboxes, gearboxesValue]
                }
            } else {
                return {
                    ...prevState,
                    gearboxes: [...prevState.gearboxes.filter(value => value !== gearboxesValue)]
                }
            }
        })
    };

    //SKILLS LOADS
    const handleLoadsChange = (e, loadsValue) => {
        setUpdatedSkills(prevState => {
            if (e.target.checked) {
                return {
                    ...prevState,
                    loads: [...prevState.loads, loadsValue]
                }
            } else {
                return {
                    ...prevState, 
                    loads: [...prevState.loads.filter(value => value !== loadsValue)]
                }
            }
        })
    }

    //SKILLS CERTIFICATES
    const handleCertificatesChange = (e, certificateValue) => {
        setUpdatedSkills(prevState => {
            if (e.target.checked) {
                return {
                    ...prevState,
                    certificates: [...prevState.certificates, certificateValue]
                }
            } else {
                return {
                    ...prevState, 
                    certificates: [...prevState.certificates.filter(value => value !== certificateValue)]
                }
            }
        })
    }

    //SKILLS WORK CRITERIA
    const handleWorkCriteriaChange = (e, workCriteriaValue) => {
        setUpdatedSkills(prevState => {
            if (e.target.checked) {
                return {
                    ...prevState,
                    workCriteria: [...prevState.workCriteria, workCriteriaValue]
                }
            } else {
                return {
                    ...prevState, 
                    workCriteria: [...prevState.workCriteria.filter(value => value !== workCriteriaValue)]
                }
            }
        })
    }

    //SKILLS INDUSTRIAL HANDLE ENVIRONMENT
    const handleWorkEnvironment = (e, workEnvironmentValue) => {
        setUpdatedSkills(prevState => {
            if (e.target.checked) {
                return {
                    ...prevState,
                    workEnvironment: [...prevState.workEnvironment, workEnvironmentValue]
                }
            } else {
                return {
                    ...prevState,
                    workEnvironment: [...prevState.workEnvironment.filter(value => value !== workEnvironmentValue)]
                }
            }
        })
    }

    const handleLicenseCategory = (e, licenseCategoryValue) => {
        setUpdatedLicenses(prevState => {
            if (e.target.checked) {
                return {
                    ...prevState,
                    licenseCategory: [...prevState.licenseCategory, licenseCategoryValue]
                }
            } else {
                return {
                    ...prevState,
                    licenseCategory: [...prevState.licenseCategory.filter(value => value !== licenseCategoryValue)]
                }
            }
        })
            
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

    // const handleEditWorkHistory = (workHistory) => {
    //     dispatch(editWorkHistory({ id, workHistory }));
    //     setUpdatedWorkHistory(prevState => {
    //         const workHistoryIndex = prevState.workHistory.findIndex(history => history.id === workHistory.id);
    //         const newWorkHistory = [ ...prevState.workHistory];
    //         newWorkHistory[workHistoryIndex] = workHistory;
    //         return { ...prevState, workHistory: newWorkHistory };
    //     });
    //     changesMade.current = true;
    //     setIsWorkHistoryModalOpen(false);
    // };   


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
            updatedQuestions = updatedLicenses
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
                                                edit={toggleEdit}
                                                save={handleSave}
                                                handleTrailersChange={handleTrailersChange}
                                                handleGearboxChange={handleGearboxChange}
                                                handleLoadsChange={handleLoadsChange}
                                                handleCertificatesChange={handleCertificatesChange}
                                                handleWorkCriteriaChange={handleWorkCriteriaChange}
                                                handleOtherVehiclesChange={handleOtherVehiclesChange}
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
                                                handleWorkEnvironment={handleWorkEnvironment}
                                                handleOnChange={handleUpdatedForm}
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
                                
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}