import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './grid.css'; 
import { Navbar } from '../../Components/Navbar/navbar';
import { Home } from '../../Components/Home/home';
import { Contact } from '../../Components/Contact/contact';
import { Footer } from '../../Components/Footer/footer';

export const Grid = () => {
    return (
        <div className="container">
            <Router>
                <header>
                    <Navbar />
                </header>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/:id"></Route> 
                </Routes>
                <footer>
                    <Footer />
                </footer>
            </Router>
        </div>
    )
}