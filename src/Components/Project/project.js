import React, { useEffect } from 'react';
import './project.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { projectsSelector, setWhere } from '../../Features/AllProjects/allProjectsSlice';

export const Project = () => {
    const dispatch = useDispatch();
    const { projects } = useSelector(projectsSelector);
    const {id} = useParams();

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

    useEffect(() => {
        dispatch(setWhere(id));
    },[dispatch])

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
                    {projects[id].tools}
                </div>
            </div>
            <div className='solution'>
                <h2>Solution</h2>
                <div className='solution-buttons'>
                    {projects[id].live_website!==''?<button className='button-live'><a href={projects[id].live_website} target="_blank" rel="noreferrer noopener">Live Website</a></button>:<button><a href={projects[id].solution} target="_blank" rel="noreferrer noopener">{projects[id].title}</a></button>}
                    {projects[id].source_code!==''?<button className='button-source'><a href={projects[id].source_code} target="_blank" rel="noreferrer noopener">Source Code</a></button>:null}
                </div>
            </div>
            {<style>{`body { background-color: ${projects[id].colors.first_color}; color:${projects[id].colors.second_color}} a {color: ${projects[id].colors.second_color}} button {color:  ${projects[id].colors.second_color}}`}</style>}
        </div>
        
    )
}