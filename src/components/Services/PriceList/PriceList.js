import React from "react";

import styles from "./PriceList.module.css";
import data from "../../../data.json";

const PriceList = () => {
    return(
        <section className={styles.priceList_section}>
            <div className={styles.price_block}>
                <div className={styles.price_un_block}>
                    <img src={require('../../../assets/Services/ezgif.com-gif-maker.png')}/>
                    <h1><span>Продукты фирмы 1С</span></h1>
                    <div className={styles.price_list}>
                        <div><h2>Наш прайс лист</h2></div>
                        <div className={styles.prices_title}>
                            <ul>
                                {data.services.map(e => <li>{e.title}</li>)}
                            </ul>
                            <ul className={styles.prices}>
                                {data.services.map(e => <li>{e.price}<span> azn</span></li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PriceList;