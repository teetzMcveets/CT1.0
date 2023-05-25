import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';
import img from '../../../assets/NavLogoReal.PNG';

export default function Navigation () {
    return (
        <nav className='nav'>

            {/* LOGO CONTAINER */}
            <div>
                <img src={img} alt='Ctrecs Logo' />
            </div>

            {/* NAVIGATION LINKS */}
            <ul className='nav-ul'>
                <NavLink to='/dashboard' className='nav-link'>
                    <i className="fas fa-chart-pie icon-size"></i>
                </NavLink>
                <NavLink to='/bookings' className='nav-link'>
                    <i className="far fa-calendar-alt icon-size"></i>
                </NavLink>
                <NavLink to='/candidates' className='nav-link'>
                    <i className="fas fa-user icon-size"></i>
                </NavLink>
                <NavLink to='/clients' className='nav-link'>
                    <i className="fas fa-handshake icon-size"></i>
                </NavLink>
                <NavLink to='/finance' className='nav-link'>
                    <i className="fas fa-hourglass-start icon-size"></i>
                </NavLink>
                <NavLink to='/reports' className='nav-link'>
                    <i className="fas fa-chart-line icon-size"></i>
                </NavLink>
            </ul>

            {/* SETTINGS LINK */}
            <div className='nav-settings-container'>
                <Link to='/settings' className='settings-link'>
                    <i className='fas fa-cog'></i>
                </Link>
            </div>
        </nav>
    )
}