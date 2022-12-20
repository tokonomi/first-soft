import React from "react";
import HTMLReactParser from "html-react-parser";
import styles from "./Section.module.css"

const Section = (props) => {
    return(
        <section className={`${styles.sub_section} ${props.id % 2 ? styles.reversed_section : ''}`}>
            <div>
                <div className={styles.images}>
                    <img/>
                </div>
            </div>
            <div>
                <div className={styles.section_text}>
                    <h2>{HTMLReactParser(props.title)}</h2> 
                    <div className={styles.paragraphs}>
                        {props.text.map(el => {
                            return <p>{el}</p>
                        })}
                    </div>
                    {props.button ? <button>{props.buttonText}</button> : ''}
                </div>
            </div>
        </section>
    )
}

export default Section