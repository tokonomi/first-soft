import React from "react";
import styles from "./HeaderSection.module.css";
import mac from '../../assets/mac.png'
import iPad from '../../assets/i-pad.png'

const HeaderSection = () => {
    function animated_text_content(clasi = ''){
        let content_text = [];
        for(let i = 0; i < 5; i++){
            content_text.push(

                <div key={i} className={`${styles.text_scroll} ${styles['text' + i + clasi]}`}>
                    <div>
                        1С:Управление торговлей 8 1С:Бухгалтерия 8 1С:Управление нашейфирмой
                        1С:Зарплата и управлениеперсоналом 8 С:ERP Управление предприятием
                        1С:Розница 1С:Касса 1С:Договоры 1С:Документооборот 1С:Комплексная автоматизация
                    </div>
                    <div>
                        1С:Управление торговлей 8 1С:Бухгалтерия 8 1С:Управление нашейфирмой
                        1С:Зарплата и управлениеперсоналом 8 С:ERP Управление предприятием
                        1С:Розница 1С:Касса 1С:Договоры 1С:Документооборот 1С:Комплексная автоматизация
                    </div>
                </div>
            )
        }
        return(content_text)
    }
    return(
        <div className={styles.header}>
            <section className={styles.head_section}>
                <div className={styles.head_title}>
                    <h1>Мы меняем рынок</h1>
                    <p>
                        <span className={styles.bold_text}>Firstsoft</span> - это <span className={styles.bold_text}>официальный партнер компании 
                        «1С»,</span> который поможет вам правильно вести
                        бизнес и быть на рынке профессионалом
                    </p>
                    <button>Связаться с нами</button>
                </div>
                <div className={styles.head_title_presentation}>
                    <div className={styles.images_block}>
                        <img className={styles.mac_image} src={mac}/> 
                        <img className={styles.pad_image} src={iPad}/> 
                    </div>
                </div>
            </section>
            <div className={styles.presentation_text}>
                {animated_text_content()}
                {animated_text_content('x')}
            </div>
        </div>
    )
}

export default HeaderSection;