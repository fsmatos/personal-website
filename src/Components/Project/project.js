import React from 'react';
import './project.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { projectsSelector } from '../Features/AllProjects/allProjectsSlice';

export const Project = () => {
    const { projects } = useSelector(projectsSelector);
    const {id} = useParams();

    return (
        <div>
            <div className='project-image' ></div>
            <div className='individual-project'>
                {/*style={{backgroundImage:`url("https://mir-cdn.behance.net/v1/rendition/project_modules/source/ea1aed135990513.61f17707322f0.jpg")`, backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundPosition: "10%"}} */}
                {<style>{`body { background-color: ${projects[id].colors.third_color}; }`}</style>}
                <div className='project-title'></div>
                <div className='project-description'></div>
                <div className='project-challenge'></div>
                <div className='project-solution'></div>
            </div>
        </div>
    )
}