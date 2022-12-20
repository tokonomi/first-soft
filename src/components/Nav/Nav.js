import React from "react";
import styles from "./Nav.module.css";
import logo from '../../assets/logo.png';

const Nav = () => {

        return(
            <header className={styles.header}>
                <div className={styles.logo_block}>
                    <span>
                        <img src={logo} alt=""/>
                    </span>
                    <h3>Firstsoft</h3>
                </div>
                <nav className={styles.nav_bar}>
                    <ul>
                        <li>Bitrix</li>
                        <li>1C</li>
                        <li>Продукты</li>
                    </ul>
                </nav>
                <ul className={styles.side_links}>
                    <li>Контакты</li>
                    <li>О нас</li>
                </ul>     
                 
            </header>
        )}


export default Nav;