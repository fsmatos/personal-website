import React from 'react';
import { useSelector } from 'react-redux';
import { projectsSelector } from '../../Features/AllProjects/allProjectsSlice';
import { Social } from '../Social/social';
import './footer.css';

export const Footer = () => {
    const {projects, where} = useSelector(projectsSelector);

    return (
        <div className="foot">
            <p className = "footerName"> © 2022 Francisco Matos</p>
            <Social />
        </div>
    )
}