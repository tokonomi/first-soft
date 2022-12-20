import '../style.css'

import React from "react";
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

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <Nav />
                <HeaderSection/>
                <BtrxSection/>
                {
                    data.sections.map(el => {
                        return(
                            <Section key={el.id} {...el}/>
                        )
                    })
                }
                <Solutions/>
                {
                    data.footerSections.map(el => {
                        return(
                            <FooterSection key={el.id} {...el}/>
                        )
                    })
                }

                <Crm/>
                <MainC/>
                <Services/>
                <Footer/>
            </div>
        )
    }
    
}

export default App;