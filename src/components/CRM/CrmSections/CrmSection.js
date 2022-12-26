import React from "react";
import styles from "./CrmSection.module.css";

const CrmSection = (props) => {
    return(
        <section className={styles.section}>
            <div className={`${styles.section_block} ${!(props.id % 2) ? styles.reversed : ''}`}>
                <div className={styles.image_side}>
                    <img src={require('../../../assets/mac.png')}/>
                </div>
                <div className={styles.text_side}>
                    <div className={styles.text_side_title}>
                        <h2>{props.title}</h2>
                        <p>{props.sub_title}</p>
                    </div>
                    <div className={styles.text_side_subs}>
                        {props.text.map(el => {
                            return <p key={el.id}>{el}</p>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CrmSection;