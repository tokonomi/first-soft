import React from "react";

import BtrxSection from "../BtrxSection/BtrxSection";
import HeaderSection from "../HeaderSection/HeaderSection";
import Section from '../Sections/Section';
import data from '../../data.json'
import Solutions from "../Solutions/Solutions";
import FooterSection from "../FooterSection/FooterSection";

const HomePage = () => {
    return <>
        <HeaderSection/>
        {
            data.sections.map(el => {
                return(
                    <Section key={el.id} {...el}/>
                )
            })
        }
        <Solutions/>
        <BtrxSection/>
        {
            data.footerSections.map(el => {
                return(
                    <FooterSection key={el.id} {...el}/>
                )
            })
        }
    </>
}

export default HomePage;