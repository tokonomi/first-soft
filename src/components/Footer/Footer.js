import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <footer>
            <img src={require('../../assets/web-logo.png')}/>
            <div className={styles.behind_block}>
                <div className={styles.footer_order}>
                    <div>
                        <h2>У нас сертефицированные программисты</h2>
                        <p>Готовы автоматизировать бизнес?</p>
                    </div>
                    <button>Связаться с нами</button>
                </div>
            </div>
            <div className={styles.footer_list}>
                <div className={styles.footer_left_side}>
                    <h3>FIRSTSOFT</h3>
                    <p>Мы автоматизируем ваш бизнес!</p>
                </div>
                <div className={styles.footer_right_side}>
                    <ul>
                        <li>Главная</li>
                        <li>+994 (12) 123 12 23</li>
                        <li>Блог</li>
                        <li>С нами сотрудничают</li>
                        <li><a href="https://storyset.com/data" target="_blank">Data illustrations by Storyset</a></li>
                    </ul>
                    <div>
                        <h4>© Все права защищены</h4>
                        <p>Любое копирование и воспроизведение текста, фото, аудио, видео и графических материалов, в том числе частичное и в любых формах без письменного разрешения правообладателя запрещено.</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer_copyright}>
                <h3>©2022 Все права защищены</h3>
            </div>
        </footer>
    )
}

export default Footer;