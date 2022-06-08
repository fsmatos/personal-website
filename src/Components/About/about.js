import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma, faHtml5, faJs, faCss3, faReact, faGit} from "@fortawesome/free-brands-svg-icons"

export const About = () => {
    const openCV = () => {
        window.open('/CV.pdf', '_blank');
    }
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
            <div className='about-photo'>
                <img alt='Francisco Matos' src='/me.jpg' />
            </div>
            <div className='about-text'>
                <p className='about-intro'>
                    Hi, my name is <b>Francisco Matos</b>.<br></br> 
                    I'm a <b>front-end developer</b> based in Portugal.
                </p>
                <p className='about-description'>
                    I started my journey in 2018 and recently finished my degree in Communication and Multimedia Design.
                </p>
                <button onClick={openCV} target="_blank" rel="noopener noreferrer" className='cv'>Check my CV</button>
            </div>
            <div className='certificate-section'>
                <h2>Certificates</h2>
                <div className='certificates-list'>
                    <dl className='left-certificates'>
                        <div className='certificate' onClick={openHTML}>
                            <dt>Learn HTML</dt>
                                <dd>Codecademy | Oct. 2021</dd>
                        </div>
                        <div className='certificate' onClick={openCSS}>
                            <dt>Learn CSS</dt>
                                <dd>Codecademy | Oct. 2021</dd>
                        </div>
                        <div className='certificate' onClick={openJS}>
                            <dt>Learn JavaScript</dt>
                                <dd>Codecademy | May 2022</dd>
                        </div>
                    </dl>
                    <dl className='right-certificates'>
                        <div className='certificate' onClick={openReact}>
                            <dt>Learn React</dt>
                                <dd>Codecademy | March 2022</dd>
                        </div>
                        <div className='certificate' onClick={openRedux}>
                            <dt>Learn Redux</dt>
                                <dd>Codecademy | May 2022</dd>
                        </div>
                        <div className='certificate' onClick={openCareer}>
                            <dt>Front-End Engineer Career Path</dt>
                                <dd>Codecademy | June 2022</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className='skills'>
                <h2>Skills</h2>
                <p className='skill-description'><b>Web Design & Development</b></p>
                <div className='skill-tools'>
                    <ul className='tools-left'>
                        <li>Adobe Illustrator</li>
                        <li><FontAwesomeIcon icon={faFigma}/></li>
                        <li><FontAwesomeIcon icon={faHtml5}/></li>
                        <li><FontAwesomeIcon icon={faJs}/></li>
                        <li>Redux</li>
                    </ul>
                    <ul className='tools-right'>
                        <li>Adobe Photoshop</li>
                        <li>Visual Studio Code</li>
                        <li><FontAwesomeIcon icon={faCss3}/></li>
                        <li><FontAwesomeIcon icon={faReact}/></li>
                        <li><FontAwesomeIcon icon={faGit}/></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}