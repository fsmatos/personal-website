import React from 'react';
import './home.css'
import { Greetings } from '../Greetings/greetings';
import { AllProjects } from '../../Features/AllProjects/allProjects';

export const Home = () => {
    return (
        <div className='home-container'>
            <section className='greetings'>
                <Greetings />
            </section>
            <h3 className = "recentWork">Recent Work</h3>
            <section className='projects'>
                <AllProjects />
            </section>
        </div>
    )
}