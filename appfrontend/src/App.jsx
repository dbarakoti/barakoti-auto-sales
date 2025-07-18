import './App.css';
import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Apply from './pages/Apply';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
import InventoryDetails from './pages/InventoryDetails';
import Footer from './components/Footer';


function App() {
    return (

        <div className="app-container">
            <NavbarComponent/>
            <div className="content-wrapper">
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="/contact" element={<ContactUs/>}/>
                    <Route path="/careers" element={<Careers/>}/>
                    <Route path="/inventory" element={<Inventory/>}/>
                    <Route path="/apply" element={<Apply/>}/>
                    <Route path="/inventory/:id"
                           element={<InventoryDetails/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>

    );
}

export default App;
