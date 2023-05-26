import React from 'react';
import './SubNavDriving.css';
import { NavLink } from 'react-router-dom'

export default function SubNav () {

    return (
        <>
            <div>
                <nav className='sub-nav'>
                    <ul className='sub-nav-ul'>
                        <NavLink to='primary-questions' className='sub-nav-link'>
                            Primary Questions
                        </NavLink>
                        <NavLink to='preference-questions' className='sub-nav-link'>
                            Preference Questions
                        </NavLink>
                        <NavLink to='licenses' className='sub-nav-link'>
                            Licenses
                        </NavLink>
                        <NavLink to='medical-questions' className='sub-nav-link'>
                            Medical Questions
                        </NavLink>
                        <NavLink to='bank-details' className='sub-nav-link'>
                            Bank Details
                        </NavLink>
                        <NavLink to='general-compliance' className='sub-nav-link'>
                            General Compliance
                        </NavLink>
                        <NavLink to='skills' className='sub-nav-link'>
                            Skills
                        </NavLink>
                        <NavLink to='candidate-availability' className='sub-nav-link'>
                            Availability
                        </NavLink>
                        <NavLink to='time-sheet-history' className='sub-nav-link'>
                            Time Sheet History
                        </NavLink>
                        <NavLink to='work-history' className='sub-nav-link'>
                            Work History
                        </NavLink>
                        <NavLink to='candidate-references' className='sub-nav-link'>
                            References
                        </NavLink>
                        <NavLink to='candidate-notes' className='sub-nav-link'>
                            Notes
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </>
    )
}