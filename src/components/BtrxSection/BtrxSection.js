import React from "react";
import { useInView } from "react-intersection-observer";

import styles from "./BtrxSection.module.css";
import apple1 from "../../assets/iphone-layer.png"
import apple2 from "../../assets/iphone-layer2.png"

const BtrxSection = () => {
    const { ref: item1, inView: myElement1 } = useInView()
    const { ref: item2, inView: myElement2 } = useInView()
            
    return(
        <div>
            
            <section className={styles.sub_section}>
                <div>
                    <div className={styles.images}>
                        <img ref={item1} src={apple2} className = {myElement1 ? styles.shown : styles.hidden}/>
                        <img ref={item2} src={apple1} className = {myElement2 ? styles.shown2 : styles.hidden2}/>
                    </div>
                </div>
                <div>
                    <div ref={item2} className={`${styles.section_text} ${myElement1 ? styles.shown : styles.hidden}`}>
                        <h2>Знакомьтесь, <span className={styles.blue_text}>BITRIX<span className={styles.dark_blue}>24</span></span> CRM!</h2> 
                        <div className={styles.paragraphs}>
                            <p>
                                CRM – (Customer Relationship Management)
                                система управления продажами и коммуникациями с клиентами. Ни одно обращение клиента не останется незамеченным. CRM сама ведет клиента по воронке: от холодного контакта до успешной сделки.
                            </p>
                            <p>
                                Всё, что вам нужно для работы с 
                                клиентом, доступно через одно окно 
                                в его карточке, переключаться между 
                                программами не придётся.
                            </p>
                        </div>
                        <button>Подробнее</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BtrxSection;