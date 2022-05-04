import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setWhere, projectsSelector } from '../../Features/AllProjects/allProjectsSlice';
import './navbar.css';

export const Navbar = () => {
    const dispatch = useDispatch();
    const {projects, where} = useSelector(projectsSelector);

    return (
        <div className='main-navigation'>
            <div className = "logo"></div>
            <nav className = "navbar">
                <ul className = "nav-list">
                    <li className = "list-item">
                        <Link onClick={() => dispatch(setWhere(''))} to='/' className='link' style={where!==""?{color:projects[where].colors.second_color}:{color:"#262626"}} >Showcase</Link>
                    </li>
                    <li className = "list-item">
                        <Link onClick={() => dispatch(setWhere(''))} to='/contact' style={where!==""?{color:projects[where].colors.second_color}:{color:"#262626"}} className='link'>Contact</Link>
                    </li>
                    <li className = "list-item">
                        <a>CV</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
