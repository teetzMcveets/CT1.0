import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';
import img from '../../../assets/NavLogoReal.PNG';

export default function Navigation () {
    return (
        <nav className='nav'>

            <div className='main-logo-container'>
                <img src={img} alt='Ctrecs Logo' />
            </div>
        </nav>
    )
}