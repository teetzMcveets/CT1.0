import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './UserNav.css';

const titleMap = {
    '/dashboard': 'Dashboard',
    '/bookings': 'Bookings',
    '/candidates': 'Candidates',
    '/clients': 'Clients',
    '/finance': 'Finance',
    '/reports': 'Reports',
    '/settings': 'Settings',
};

export default function UserNav () {
    const location = useLocation();
    const [ title, setTitle ] = useState('');
    const [ date, setDate ] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        const dateString = currentDate.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

        let currentTitle = 'Welcome';

        for (let path in titleMap) {
            if (location.pathname.startsWith(path)) {
                currentTitle = titleMap[path];
                break;
            }
        }

        setTitle(currentTitle);
        setDate(dateString);
        document.title = currentTitle;
    }, [location]);

    const [ weekday, ...rest] = date.split(', ');

    return (
        <div className='user-nav-container'>

            <div className='title-container'>
                <h1 className='title-text'>{title}</h1>
                <p>
                    <span className='weekday'>{weekday}, </span>
                    <span className='date'>{rest.join(', ')}</span>
                </p>
            </div>

        </div>
    )
}
