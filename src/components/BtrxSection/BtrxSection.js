import React from "react";
import HTMLReactParser from "html-react-parser";
import styles from "./BtrxSection.module.css";
import apple1 from "../../assets/iphone-layer.png"
import apple2 from "../../assets/iphone-layer2.png"

const BtrxSection = (props) => {
    // console.log(HTMLReactParser(props.title))
            
    return(
        <div className={styles.haha}>
            <div className={styles.sub_section_header}>
                <p className="">
                    Предоставляем полный спектр услуг для автоматизации 
                    бизнес-процессов компании посредством решений на базе
                    <span style={{color: '#FFB200'}}> 1С:Предприятие</span>
                </p>
            </div>
            <section className={styles.sub_section}>
                <div>
                    <div className={styles.images}>
                        <img src={apple2}/>
                        <img src={apple1}/>
                    </div>
                </div>
                <div>
                    <div className={styles.section_text}>
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