import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setWhere } from '../../Features/AllProjects/allProjectsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './navbar.css';
import { ClickAwayListener } from '@mui/material';

export const Navbar = () => {
    const dispatch = useDispatch();
    const [menu, setMenu] = useState(false);
    const toggle = () => setMenu(!menu);
    const hide = () => setMenu(false);
    return (
        <div className='main-navigation'>
            <div className = "logo">
                <Link onClick={() => dispatch(setWhere(''))} to='/' className='logo'>
                    <img alt='logo' src='/monogramBlack.svg'></img>
                </Link>
            </div>
            <nav className = "navbar">
                <ul className = {menu?"nav-list open":"nav-list"} >
                   <li className = {menu?"list-item open-design":"nav-list"}>
                        <Link onClick={() => dispatch(setWhere(''))} to='/' className='link'>Projects</Link>
                    </li>
                    <li className = {menu?"list-item open-design":"nav-list"}>
                        <Link onClick={() => dispatch(setWhere(''))} to='/contact' className='link'>Contact</Link>
                    </li>
                    <li className = {menu?"list-item open-design":"nav-list"}>
                        <a href='/CV.pdf' target="_blank" rel="noopener noreferrer" className='link' onClick={() => dispatch(setWhere(''))}>CV</a>
                    </li>
                </ul>
                <ClickAwayListener onClickAway={hide}>
                <div className='icon-menu'>
                    {menu?<FontAwesomeIcon onClick={toggle} icon={faXmark} />:<FontAwesomeIcon onClick={toggle} icon={faBars} />}
                </div>
                </ClickAwayListener>
            </nav>
        </div>
    )
}
