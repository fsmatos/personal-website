import React from 'react';
import './home.css'
import { Greetings } from '../Greetings/greetings';
import { AllProjects } from '../../Features/AllProjects/allProjects';

export const Home = () => {
    return (
        <div className='home-container'>
            <Greetings className="greetings"/>
            <AllProjects className="all-projects"/>
        </div>
    )
}