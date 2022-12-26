import React from "react";
import styles from "./Section.module.css"

const Section = (props) => {
    return(
        <section className={styles.section}>
            <div className={`${styles.section_block} ${!(props.id % 2) ? styles.reversed : ''}`}>
                <div className={styles.image_side}>
                    <img src={require(`../../../assets/solutions/${props.img}.png`)}/>
                </div>
                <div className={styles.text_side}>
                    <div className={styles.text_side_title}>
                        <h2>{props.title}</h2>
                        <p>{props.sub_title}</p>
                    </div>
                    <div className={styles.text_side_subs}>
                        {props.text.map((e) => {
                            return <p key={e.id} className={styles.defise}>{e}</p>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;