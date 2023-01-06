import React from "react";
import styles from './Header.module.css';

const Header = () => {
    let squares = () => {
        let body = [];
        for(let i = 0; i < 11; i++){
            body.push(<div></div>)
        }
        return body
    }
    return(
        <header className={styles.header}>
            <div className={styles.floating_squares}>
                {squares()}
            </div>
            <div className={styles.left_side_header}>
                <div className={styles.left_side_title}>
                    <h1>Что такое</h1>
                    <img src={require('../../../assets/crm/bitrix-logo.png')}/>
                </div>
                <p>Битрикс24 – это набор полезных инструментов, которые помогают бизнесу работать: CRM, Видеозвонки, Документы Онлайн, Задачи и проекты, Контакт-центр, конструктор сайтов и Интернет-магазины.</p>
                <button>ПОДРОБНЕЕ</button>
            </div>
            <div className={styles.right_side_title}>
                <div className={styles.right_side_imgs}>
                    <img src={require('../../../assets/crm-section/header.png')}/>
                    {/* <img src={require('../../../assets/crm/iphone-layer1.png')}/> */}
                </div>
            </div>
        </header>
    )
}

export default Header;