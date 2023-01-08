import React from "react";
import HTMLReactParser from "html-react-parser";
import { useInView } from "react-intersection-observer";

import styles from './FooterSection.module.css';

const FooterSection = (props) => {
    const { ref: imgRef, inView: element } = useInView()

    return(
        <section>
            <div className={`${styles.section_block} ${props.reversed ? styles.reversed : ''}`}>
                <div className={styles.text_side}>
                    <div className={styles.inner_text_block}>
                        <h1>{HTMLReactParser(props.title)}</h1>
                        <ul className={styles.properties_list}>
                            {
                                props.list.map((el, i) => {
                                    return(
                                        <li key={i}>
                                            <h3>{el.title}</h3>
                                            <p>{el.paragraph}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        {
                            props.button ? 
                            <div className = {styles.section_buttons}>
                                <button className={styles.more_button}>Подробнее</button>
                                <button className={styles.order_button}>Заказать</button>
                            </div> : ''
                        }    
                    </div>                    
                </div>
                <div className={styles.landscape}>
                    <img ref={imgRef} src={require('../../assets/' + props.img)} alt='' className={element ? styles[props.show] : styles[props.hide]}/>
                </div>
            </div>
        </section>
    )
}

export default FooterSection;