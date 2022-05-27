import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setWhere, projectsSelector } from '../../Features/AllProjects/allProjectsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './navbar.css';

export const Navbar = () => {
    const dispatch = useDispatch();
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='main-navigation'>
            <div className = "logo">
                <Link onClick={() => dispatch(setWhere(''))} to='/' className='logo'>
                    <img alt='logo' src='/monogramBlack.svg'></img>
                </Link>
            </div>
            <nav className = "navbar">
                <ul className = {openMenu?"nav-list open":"nav-list"} >
                   <li className = {openMenu?"list-item open-design":"nav-list"}>
                        <Link onClick={() => dispatch(setWhere(''))} to='/' className='link'>Projects</Link>
                    </li>
                    <li className = {openMenu?"list-item open-design":"nav-list"}>
                        <Link onClick={() => dispatch(setWhere(''))} to='/contact' className='link'>Contact</Link>
                    </li>
                    <li className = {openMenu?"list-item open-design":"nav-list"}>
                        <a href='/CV.pdf' target="_blank" rel="noopener noreferrer" className='link' onClick={() => dispatch(setWhere(''))}>CV</a>
                    </li>
                </ul>
                <div className='icon-menu'>
                    <FontAwesomeIcon onClick={() => setOpenMenu(!openMenu)} icon={faBars} />
                </div>
            </nav>
        </div>
    )
}
