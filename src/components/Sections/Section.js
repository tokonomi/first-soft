import React from "react";
import HTMLReactParser from "html-react-parser";
import styles from "./Section.module.css"

const Section = (props) => {
    return(
        <section className={`${styles.sub_section} ${props.id % 2 ? styles.reversed_section : ''}`}>
            <div>
                <div className={styles.images}>
                    <img src={require(`../../assets/home_sections/${props.img}.png`)}/>
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