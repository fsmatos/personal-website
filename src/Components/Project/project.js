import React, { useState, useEffect } from 'react';
import './project.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { projectsSelector, setWhere } from '../../Features/AllProjects/allProjectsSlice';

export const Project = () => {
    const dispatch = useDispatch();
    const { projects } = useSelector(projectsSelector);
    const [hoverLiveButton, setHoverLiveButton] = useState(false);
    const [hoverSourceButton, setHoverSourceButton] = useState(false);
    const {id} = useParams();

    //Manage live website button color
    let liveStyle;
    if(hoverLiveButton) {
        liveStyle = {backgroundColor:projects[id].colors.highlight}
    } else {
        liveStyle = {backgroundColor:"transparent"}
    }

    //Manage source code button color
    let sourceStyle;
    if(hoverSourceButton) {
        sourceStyle = {backgroundColor:projects[id].colors.highlight}
    } else {
        sourceStyle = {backgroundColor:"transparent"}
    }

    //Manage main image 
    const imageStyle = {
        backgroundImage:`linear-gradient(${projects[id].colors.linear_gradient}),url(${projects[id].image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"top",
        gridRow: "2/3",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center"
    }

    //Dispatch id to where as soon as component mounts
    useEffect(() => {
        dispatch(setWhere(id));
    },[dispatch,id])

    //Open Live Website page on new tab
    const openLiveWebsite = () => {
        const url = projects[id].live_website;
        window.open(url, '_blank');
    }

    //Open Source Code page on new tab
    const openSourceCode = () => {
        const url = projects[id].source_code;
        window.open(url, '_blank');
    }

    return (
        <div className='project-container'>
            <div className='project-title'>
                <h1>{projects[id].title}</h1>
                {projects[id].description}
            </div>
            <div style={imageStyle}></div>
            <div className='project-challenge-tools'>
                <div className='challenge'>
                    <h2>Challenge</h2>
                    {projects[id].challenge}
                </div>
                <div className='divider-vertical'></div>
                <div className='tools'>
                    <h2>Tools</h2>
                    <p>For the development of the project, it was used:</p>
                    <div className='tool-names'>
                        {projects[id].tools.map((tool, key) => typeof tool==='string'?<p key={key} className='tool-icons'>{tool}</p>:<FontAwesomeIcon key={key} className="icons tool-icons" icon={tool}/>)}
                    </div>
                </div>
            </div>
            <div className='solution'>
                <h2>Solution</h2>
                <div className='solution-buttons'>
                    {projects[id].live_website!==''?<button onClick={() => openLiveWebsite()} onMouseEnter={() => setHoverLiveButton(!hoverLiveButton)}  onMouseLeave={() => setHoverLiveButton(!hoverLiveButton)} style={liveStyle} className='button-live'>Live Website</button>:null}
                    {projects[id].source_code!==''?<button onClick={() => openSourceCode()} onMouseEnter={() => setHoverSourceButton(!hoverSourceButton)}  onMouseLeave={() => setHoverSourceButton(!hoverSourceButton)} style={sourceStyle} className='button-source'>Source Code</button>:null}
                </div>
            </div>
            {<style>{`body { background-color: ${projects[id].colors.background}; color:${projects[id].colors.text}}  button {color:  ${projects[id].colors.text}} b {color: ${projects[id].colors.highlight}}`}</style>}
        </div>
        
    )
}