import React from "react";
import styles from "./CrmSection.module.css";

const CrmSection = (props) => {
    return(
        <section className={styles.section}>
            <div className={`${styles.section_block} ${!(props.id % 2) ? styles.reversed : ''}`}>
                <div className={`${styles.image_side} ${styles[props.class]}`}>
                    {
                        props.img.map((e) => {
                            console.log(e)
                            return <img  src={require(`../../../assets/crm-section/${e}`)}/>
                        })
                    }
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