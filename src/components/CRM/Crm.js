import React from "react";
import CrmSection from "./CrmSections/CrmSection";
import Header from "./Header/Header";
import data from '../../data.json';

const Crm = () => {
    return(
        <div>
            <Header/>
            {
                data.crm_sections.map(el => {
                    return <CrmSection key={el.id} {...el}/>
                })
            }
        </div>
    )
}

export default Crm;