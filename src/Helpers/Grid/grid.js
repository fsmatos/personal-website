import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './grid.css';
import { Navbar } from '../../Components/Navbar/navbar';
import { Home } from '../../Components/Home/home';
import { Project } from "../../Components/Project/project";
import { Contact } from '../../Components/Contact/contact';
import { About } from "../../Components/About/about";
import { Footer } from '../../Components/Footer/footer';

export const Grid = () => {
    return (
        <div className="container">
            <Router>
                <div className="intro"></div>
                <div className="detail"></div>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/:id" element={<Project />}></Route> 
                    </Routes>
                </main>
                <footer>
                    <Footer />
                </footer>
            </Router>
        </div>
    )
}