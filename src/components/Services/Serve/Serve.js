import React, { useState } from "react";
import ReactElasticCarousel from "react-elastic-carousel";

import styles from "./Serve.module.css";
import data from "../../../data.json";
import Modal from "./Modal";

const Serve = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const showModal = () => {
        document.getElementById("cards").scrollIntoView()
        setIsOpen(!isOpen);
        document.querySelector('body').style.overflow = 'hidden';
    }
    const closeModal = () => {
        setIsOpen(false);
        document.querySelector('body').style.overflow = 'inherit';
    }
    return(
        <section className={`${styles.service_section}`} id="cards">
            <ReactElasticCarousel itemsToShow={3} pagination={false} itemsToScroll={3}>
                {
                    data.serveCards.map((e) => {
                        return(
                            <div className={styles.service_carousel}>
                                <div className={styles.service_cards}>
                                    <div className={styles.service_title}>
                                        <h2>{e.title}</h2>
                                        <p>{e.price} <span>azn</span></p> 
                                    </div>
                                    <div className={styles.serve_description}>
                                        <p>{e.text}</p>
                                        <button onClick={showModal}>Подробнее</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </ReactElasticCarousel>
            {isOpen ? <Modal opened = {isOpen} close = {closeModal}/> : ''}
        </section>
    )
}

export default Serve;