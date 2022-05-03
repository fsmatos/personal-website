import React from 'react';
import './allProjects.css'
import { useSelector } from 'react-redux';
import { projectsSelector } from './allProjectsSlice';
import { Card } from '../../Components/Card/card';

export const AllProjects = () => {
    const { projects } = useSelector(projectsSelector);
    return (
        <div className='allProjects-container'>
            <h2>Showcase</h2>
            <div className='projects-grid'>
                {projects.map((project, key) => 
                    <Card key={key} id={project.id} title={project.title} brief={project.brief} image={project.image} tools={project.tools}/>
                )}
            </div>
        </div>
    )
}