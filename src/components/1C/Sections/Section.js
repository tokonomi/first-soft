import React from "react";
import styles from "./Section.module.css"

const Section = (props) => {
    return(
        <section className={styles.section}>
            <div className={`${styles.section_block} ${!(props.id % 2) ? styles.reversed : ''}`}>
                <div className={styles.image_side}>
                    <img src={require('../../../assets/crm/1c.png')}/>
                </div>
                <div className={styles.text_side}>
                    <div className={styles.text_side_title}>
                        <h2>{props.title}</h2>
                    </div>
                    <div className={styles.text_side_subs}>
                        {props.text.map(e => <p className={props.list ? styles.defise : ""}>{e}</p>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;