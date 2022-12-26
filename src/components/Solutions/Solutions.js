import React from "react";
import styles from "./Solutions.module.css";

const Solutions = () => {
    return(
        <div className={styles.solutions}>
            <h1 className={styles.solution_title}>
                Популярные решения компании «1С»
            </h1>
            <div className={styles.img_carousel}>
                <div className={styles.image_list}>
                    {images.map(((el, i) => <img key={i} src={require('../../assets/solutions/' + el + '.png')} alt=''/>))}
                    {images.map(((el, i) => <img key={i+1} src={require('../../assets/solutions/' + el + '.png')} alt=''/>))}
                </div>
            </div>
            <button className={styles.button}>Заказать</button>
        </div>
    )
}

const images = ['avtom', 'buhgal', 'dogovor', 'erp', 'kassa', 'oborot', 'roznitsa', 'torgovlya', 'upravlenie', 'zp']

export default Solutions;