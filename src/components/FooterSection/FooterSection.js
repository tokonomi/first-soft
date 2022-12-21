import React from "react";
import HTMLReactParser from "html-react-parser";
import styles from './FooterSection.module.css';

const FooterSection = (props) => {
    return(
        <section>
            <div className={`${styles.section_block} ${props.reversed ? styles.reversed : ''}`}>
                <div className={styles.text_side}>
                    <h1>{HTMLReactParser(props.title)}</h1>
                    <ul className={styles.properties_list}>
                        {
                            props.list.map(el => {
                                return(
                                    <li>
                                        <h3>{el.title}</h3>
                                        <p>{el.paragraph}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {
                        props.button ? 
                        <div>
                            <button className={styles.more_button}>Подробнее</button>
                            <button className={styles.order_button}>Заказать</button>
                        </div> : ''
                    }
                    
                </div>
                <div className={styles.landscape}>
                    <img src={require('../../assets/' + props.img)} alt=''/>
                </div>
            </div>
        </section>
    )
}

export default FooterSection;