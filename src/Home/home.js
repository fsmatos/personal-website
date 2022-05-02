import React from 'react';
import './home.css'
import { Greetings } from '../Greetings/greetings';
import { AllProjects } from '../AllProjects/allProjects';

export const Home = () => {
    return (
        <div>
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