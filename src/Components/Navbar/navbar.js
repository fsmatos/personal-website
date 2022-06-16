import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setWhere } from '../../Features/AllProjects/allProjectsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './navbar.css';
import { Box, ClickAwayListener } from '@mui/material';

export const Navbar = () => {
    const {params} = useParams();
    console.log(params);
    const dispatch = useDispatch();
    const [menu, setMenu] = useState(false);
    const toggle = () => setMenu(!menu);
    const hide = () => setMenu(false);
    return (
        <div className='main-navigation'>
            <div className = "logo">
                <Link onClick={() => dispatch(setWhere('projects'))} to='/' className='logo'>
                    <img alt='logo' src='/monogramBlack.svg'></img>
                </Link>
            </div>
            <nav className = "navbar">
                <ul className = "nav-list" >
                    <li className = "nav-list">
                        <Link onClick={() => {dispatch(setWhere('projects')); hide()}} to='/' className='link'>Work</Link>
                    </li>
                    <li className = "nav-list">
                        <Link onClick={() => {dispatch(setWhere('about')); hide()}} to='/about' className='link'>About</Link>
                    </li>
                    <li className = "nav-list">
                        <Link onClick={() => {dispatch(setWhere('contact')); hide()}} to='/contact' className='link'>Contact</Link>
                    </li>
                </ul>
                <ClickAwayListener onClickAway={hide}>
                    <Box className='icon-menu'>
                        <FontAwesomeIcon onClick={toggle} icon={faBars}/>
                        {menu ? (
                        <Box className='menu-responsive'>
                            <Link onClick={() => {dispatch(setWhere('projects')); hide()}} to='/' className='link'>Work</Link>
                            <Link onClick={() => {dispatch(setWhere('about')); hide()}} to='/about' className='link'>About</Link>
                            <Link onClick={() => {dispatch(setWhere('contact')); hide()}} to='/contact' className='link'>Contact</Link>
                        </Box>
                        ) : null}
                    </Box>
                </ClickAwayListener>
            </nav>
        </div>
    )
}
