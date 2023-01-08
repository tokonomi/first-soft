import React from "react";
import HTMLReactParser from "html-react-parser";
import { useInView } from "react-intersection-observer";
import styles from "./Section.module.css"

const Section = (props) => {
    const { ref: myRef, inView: myElement } = useInView();
    return(
        <section ref={myRef} className={`${styles.sub_section} ${props.id % 2 ? styles.reversed_section : ''} ${myElement ? styles.show : styles.hided}`}>
            <div className={styles.images_block}>
                <div className={styles.images}>
                    {
                        props.img.map((img) => {
                            return <img className={styles[img]} src={require(`../../assets/home_sections/${img}.png`)}/>
                        })
                    }                    
                </div>
            </div>
            <div className={styles.text_block}>
                <div className={styles.section_text}>
                    {HTMLReactParser(props.title)}
                    <div className={styles.paragraphs}>
                        {props.text.map((el, i) => {
                            return <p key={i}>{el}</p>
                        })}
                    </div>
                    {props.button ? <button>{props.buttonText}</button> : ''}
                </div>
            </div>
        </section>
    )
}

export default Section