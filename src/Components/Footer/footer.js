import React from 'react';
import { useSelector } from 'react-redux';
import { projectsSelector } from '../../Features/AllProjects/allProjectsSlice';
import './footer.css';

export const Footer = () => {
    const {projects, where} = useSelector(projectsSelector);

    return (
        <div className="foot">
            <p className = "footerName"> © 2022 Francisco Matos</p>
            <ul className = "footerMenu">
                <li className = "footerItems">
                    <a target = "_blank" rel="noreferrer" href = "https://www.behance.net/franciscosmatos" style={where!==""?{color:projects[where].colors.second_color}:{color:"#262626"}}>Behance</a>
                </li>
                <li className = "footerItems">
                    <a target = "_blank" rel="noreferrer" href = "https://www.linkedin.com/in/francisco-matos-21b28685/" style={where!==""?{color:projects[where].colors.second_color}:{color:"#262626"}}>LinkedIn</a>
                </li>
                <li className = "footerItems"> 
                    <a target = "_blank" rel="noreferrer" href = "https://github.com/fsmatos" style={where!==""?{color:projects[where].colors.second_color}:{color:"#262626"}}>GitHub</a>
                </li>
            </ul>
        </div>
    )
}