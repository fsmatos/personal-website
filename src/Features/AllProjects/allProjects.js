import React from 'react';
import './allProjects.css'
import { useSelector } from 'react-redux';
import { projectsSelector } from './allProjectsSlice';
import { Card } from '../../Components/Card/card';

export const AllProjects = () => {
    const { projects } = useSelector(projectsSelector);
    return (
        <div className='allProjects-container'>
            <div className='allProjects-container-title'>
                <h1>Work</h1>
                <p>Selected Projects</p>
            </div>
            <div className='projects-grid'>
                {projects.map((project, key) => 
                    <Card key={key} id={project.id} title={project.title} description={project.description} image={project.image} />
                )}
            </div>
        </div>
    )
}