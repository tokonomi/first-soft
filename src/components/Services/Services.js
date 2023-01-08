import React from "react";
import Header from "./Header/Header";
import Section from "./Sections/Section";

import styles from "./Services.module.css";
import data from "../../data.json";
import PriceList from "./PriceList/PriceList";
import Serve from "./Serve/Serve";

const Services = () => <section>
    <Header/>
    {
        data.services.map((e) => {
            return(
                <Section {...e}/>
            )
        })
    }
    <PriceList/>
    <Serve/>
</section>

export default Services;