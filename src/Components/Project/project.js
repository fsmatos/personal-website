import React, { useEffect } from 'react';
import './project.css';
import {Scroll} from '../../Helpers/Scroll/scroll'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { projectsSelector, setWhere } from '../../Features/AllProjects/allProjectsSlice';

export const Project = () => {
    const dispatch = useDispatch();
    const { projects } = useSelector(projectsSelector);
    const {id} = useParams();

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
            <div className='project-intro'>
                <h1>{projects[id].title}</h1>
                {projects[id].description}
            </div>
            {/*<div className="project-image-container">
                <img src={projects[id].image} className="project-image"></img>
    </div>*/}
            <div className='project-photo'>
                <img alt={projects[id].title} src={projects[id].image} />
            </div>
            <div className='project-detail'>
                <div className='challenge'>
                    <h2>Challenge</h2>
                    {projects[id].challenge}
                </div>
                <div className='tools'>
                    <h2>Tools</h2>
                    <p>For the development of the project, it was used:</p>
                    <div className='tool-names'>
                        {projects[id].tools.map((tool, key) => <p className='tool-icons'>{tool}</p>)}
                    </div>
                </div>
                <div className='solution'>
                    <h2>Solution</h2>
                    <div className='solution-buttons'>
                        {projects[id].live_website!==''?<button onClick={() => openLiveWebsite()} className='button-live'>Live Website</button>:null}
                        {projects[id].source_code!==''?<button onClick={() => openSourceCode()}  className='button-source'>Source Code</button>:null}
                    </div>
                </div>  
            </div>
            <Scroll />
        </div>
        
    )
}