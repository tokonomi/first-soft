import React from "react";

import styles from "./Predpriyatie.module.css"



const Predpriyatie = () => {
    const windowses = [
        <div>
            <div className={styles.left_side_header}>
                <div className={styles.left_side_title}>
                    <h1>Что такое <img className={styles.title_logo} src={require('../../../assets/crm/1C_logo.png')} />?</h1>
                </div>
                <p> — семейство программных продуктов для автоматизации учета и бизнес-процессов. Первая выпущенная программа 1С была «1С Бухгалтерия». Сегодня же в арсенале фирмы «1С» и её партнеров более 500 различных решений для разных задач и различных отраслей.</p>
                <button>ПОДРОБНЕЕ</button>
            </div>
            <div className={styles.right_side_title}>
                <div className={styles.right_side_imgs}>
                    <img src={require('../../../assets/crm/1c.png')}/>
                </div>
            </div>
        </div>, 
        <div>
            <div className={styles.left_side_header}>
                    <div className={styles.left_side_title}>
                        <h1><img className={styles.title_logo} src={require('../../../assets/crm/1C_logo.png')} /> Предприятие</h1>
                    </div>
                    <p> 1С Предприятие — это также название технологической платформы, на которой разрабатываются все прикладные решения. Сегодня актуальная версия платформы 1С — 8.3. Однако многие предприятия работают на 1С 8.2, 8.1 и даже 7.7.</p>
                    <button>ПОДРОБНЕЕ</button>
                </div>
                <div className={styles.right_side_title}>
                    <div className={styles.right_side_imgs}>
                        <img src={require('../../../assets/crm/1c.png')}/>
                    </div>
                </div>
        </div>
    ]

    
    return (
        <header className={styles.header}>
            <div className={styles.area} >
                <ul className={styles.circles}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
            </div >
            <div className={styles.left_side_header}>
                <div className={styles.left_side_title}>
                    <h1>Что такое <img className={styles.title_logo} src={require('../../../assets/crm/1C_logo.png')} />?</h1>
                </div>
                <p> — семейство программных продуктов для автоматизации учета и бизнес-процессов. Первая выпущенная программа 1С была «1С Бухгалтерия». Сегодня же в арсенале фирмы «1С» и её партнеров более 500 различных решений для разных задач и различных отраслей.</p>
                <button>ПОДРОБНЕЕ</button>
            </div>
            <div className={styles.right_side_title}>
                <div className={styles.right_side_imgs}>
                    <img src={require('../../../assets/crm/1c.png')}/>
                </div>
            </div>
        </header>
    )
}

export default Predpriyatie;