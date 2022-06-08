import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setWhere, projectsSelector } from '../../Features/AllProjects/allProjectsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './navbar.css';
import { Box, ClickAwayListener } from '@mui/material';

export const Navbar = () => {
    const dispatch = useDispatch();
    const [menu, setMenu] = useState(false);
    const toggle = () => setMenu(!menu);
    const hide = () => setMenu(false);
    const {where} = useSelector(projectsSelector);
    return (
        <div className='main-navigation'>
            <div className = "logo">
                <Link onClick={() => dispatch(setWhere(''))} to='/' className='logo'>
                    <img alt='logo' src='/monogramBlack.svg'></img>
                </Link>
            </div>
            <nav className = "navbar">
                <ul className = "nav-list" >
                   <li className = "nav-list">
                        <Link onClick={() => {dispatch(setWhere('projects')); hide()}} to='/' className={where==='projects'?'active':'link'}>Projects</Link>
                    </li>
                    <li className = "nav-list">
                        <Link onClick={() => {dispatch(setWhere('contact')); hide()}} to='/contact' className={where==='contact'?'active':'link'}>Contact</Link>
                    </li>
                    <li className = "nav-list">
                        <a href='/CV.pdf' target="_blank" rel="noopener noreferrer" className='link' onClick={() => dispatch(setWhere(''))}>CV</a>
                    </li>
                </ul>
                <ClickAwayListener onClickAway={hide}>
                    <Box className='burger-menu icon-menu'>
                        {menu?<FontAwesomeIcon onClick={toggle} icon={faXmark} className="cross-icon"/>:<FontAwesomeIcon onClick={toggle} icon={faBars}/>}
                        {menu? (
                            <Box className="menu-box">
                                <Link onClick={() => {dispatch(setWhere('projects')); hide()}} to='/' className={where==='projects'?'active':'link'}>Projects</Link>
                                <Link onClick={() => {dispatch(setWhere('contact')); hide()}} to='/contact' className={where==='contact'?'active':'link'}>Contact</Link>
                                <a href='/CV.pdf' target="_blank" rel="noopener noreferrer" className='link' onClick={() => {dispatch(setWhere('')); hide()}}>CV</a>
                            </Box> 
                        ) : null}
                    </Box>
                </ClickAwayListener>
            </nav>
        </div>
    )
}
