import '../style.css'

import React from "react";
import {Routes, Route, Link} from 'react-router-dom';

import Nav from './Nav/Nav';
import HeaderSection from './HeaderSection/HeaderSection';
import BtrxSection from './BtrxSection/BtrxSection';
import Section from './Sections/Section';
import data from '../data.json'
import Solutions from './Solutions/Solutions';
import FooterSection from './FooterSection/FooterSection';
import Footer from './Footer/Footer';
import Crm from './CRM/Crm';
import MainC from './1C/MainC';
import Services from './Services/Services';
import HomePage from './HomePage/HomePage';
import ScrollToTop from './ScrollToTop';

class App extends React.Component{
    render(){
        return(
            <div id='main_width'>
                <div className="container">
                    <ScrollToTop/>
                    <Nav />
                        <Routes>
                            <Route path='/' element={<HomePage/>}/>
                            <Route path='/crm' element={<Crm/>}/>
                            <Route path='/1c' element={<MainC/>}/>
                            <Route path='/services' element={<Services/>}/>
                        </Routes>
                    <Footer/>
                </div>
            </div>
        )
    }
    
}

export default App;