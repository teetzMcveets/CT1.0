import React from 'react';
import './SubNav.css';
import { NavLink } from 'react-router-dom'

export default function SubNav () {

    return (
        <>
            <nav>
                <ul>
                    <NavLink to='primary-questions'>
                        Primary Questions
                    </NavLink>
                </ul>
            </nav>
        </>
    )
}