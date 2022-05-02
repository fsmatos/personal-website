import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
    return (
        <div className='main-navigation'>
            <div className = "logo"></div>
            <nav className = "navbar">
                <ul className = "nav-list">
                    <li className = "list-item">
                        <Link to='/' className='link'>Projects</Link>
                    </li>
                    <li className = "list-item">
                        <Link to='/contact' className='link'>Contact</Link>
                    </li>
                    <li className = "list-item">
                        <a>CV</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
