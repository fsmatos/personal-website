import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './grid.css'; 
import { Navbar } from '../../Navbar/navbar';
import { Home } from '../../Home/home';
import { Contact } from '../../Contact/contact';
import { Footer } from '../../Footer/footer';

export const Grid = () => {
    return (
        <div className="container">
            <Router>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </main>
                <footer>
                    <Footer />
                </footer>
            </Router>
        </div>
    )
}