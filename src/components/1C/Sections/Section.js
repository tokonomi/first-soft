import React from "react";
import styles from "./Section.module.css"
import { useInView } from "react-intersection-observer";

const Section = (props) => {
    const { ref: myRef, inView: imgElement } = useInView()
    return(
        <section className={styles.section}>
            <div className={`${styles.section_block} ${!(props.id % 2) ? styles.reversed : ''}`}>
                <div ref={myRef} className={`${styles.image_side}  ${imgElement ? styles.show : styles.hidden}`}>
                    {imgElement ? <img src={require(`../../../assets/crm/${props.img}`)}/> : <img/>}
                </div>
                <div className={`${styles.text_side} `}>
                    <div className={`${styles.text_side_title}  ${imgElement ? styles.show : styles.hidden}`}>
                        <h2>{props.title}</h2>
                    </div>
                    <div className={styles.text_side_subs}>
                        {props.text.map((e, i) => <p key={i} className={props.list ? styles.defise : ""}>{e}</p>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;