import React from 'react';
import './about.css';
import { Greetings } from '../Greetings/greetings';

export const About = () => {
    const openHTML = () => {
        window.open('/html.pdf', '_blank');
    }
    const openCSS = () => {
        window.open('/css.pdf', '_blank');
    }
    const openJS = () => {
        window.open('/js.pdf', '_blank');
    }
    const openReact = () => {
        window.open('/react.pdf', '_blank');
    }
    const openRedux = () => {
        window.open('/redux.pdf', '_blank');
    }
    const openCareer = () => {
        window.open('/career.pdf', '_blank');
    }
    return (
        <section className = "about-container">
            <div className='about-intro'>
                <Greetings />
            </div>
            <div className='about-photo'>
                <img alt="that's me" src='/me.jpg' />
                <legend>yes, that's me &#128513;</legend>
            </div>
            <div className='about-detail'>
                <div className='certificate-section'>
                    <h2>Certificates</h2>
                    <table>
                        <tr onClick={openHTML}>
                            <td className='certificate-title'>Learn HTML</td>
                            <td className='certificate-data'>Codecademy | Oct. 2021</td>
                        </tr>
                        <tr onClick={openCSS}>
                            <td className='certificate-title'>Learn CSS</td>
                            <td className='certificate-data'>Codecademy | Oct. 2021</td>
                        </tr>
                        <tr onClick={openJS}>
                            <td className='certificate-title'>Learn JavaScript</td>
                            <td className='certificate-data'>Codecademy | May 2022</td>
                        </tr>
                        <tr onClick={openReact}>
                            <td className='certificate-title'>Learn React</td>
                            <td className='certificate-data'>Codecademy | March 2022</td>
                        </tr>
                        <tr onClick={openRedux}>
                            <td className='certificate-title'>Learn Redux</td>
                            <td className='certificate-data'>Codecademy | May 2022</td>
                        </tr>
                        <tr onClick={openCareer}>
                            <td className='certificate-title'>Front-End Engineer Career Path</td>
                            <td className='certificate-data'>Codecademy | June 2022</td>
                        </tr>
                    </table>
                </div>
                <div className='skills'>
                    <h2>Skills</h2>
                    <p className='skill-description'><b>Web Design & Development</b></p>
                    <div className='skill-tools'>
                        <ul className='tools-left'>
                            <li>Adobe Illustrator</li>
                            <li>Figma</li>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>Redux</li>
                        </ul>
                        <ul className='tools-right'>
                            <li>Adobe Photoshop</li>
                            <li>Visual Studio Code</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}