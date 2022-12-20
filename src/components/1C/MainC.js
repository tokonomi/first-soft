import React from "react";
import styles from './MainC.module.css';

import Section from "./Sections/Section";
import Predpriyatie from "./Predpriyatie/Predpriyatie";
import data from '../../data.json';

const MainC = () => {
    return(
        <div className={styles.container}>
            <Predpriyatie/>
            {
                data.predpriyatie.map(el => {
                    return <Section {...el}/>
                })
            }
        </div>
    )
}

export default MainC;