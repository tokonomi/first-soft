import React from "react";
import { NavLink, Link } from "react-router-dom";

import styles from "./Nav.module.css";
import logo from '../../assets/logo.png';
import MobMenu from "./MobMenu";

const Nav = () => {

        return(
            <>
                <div className={styles.mob_menu}>
                    <MobMenu/>
                    <header>
                        <div className={styles.logo_block}>
                            <span>
                                <NavLink to='/'><img src={logo} alt=""/></NavLink>
                            </span>
                        </div>
                    </header>
                </div>
                <header className={styles.header} id="navigation">
                    <div className={styles.logo_block}>
                        <span>
                            <NavLink to='/'><img src={logo} alt=""/></NavLink>
                        </span>
                        <h3><Link to='/'>Firstsoft</Link></h3>
                    </div>
                    <nav className={styles.nav_bar}>
                        <ul>
                            <li><NavLink to="/1c" className={styles.link}>1C</NavLink></li>
                            <li><NavLink to="/crm" className={styles.link}>Bitrix</NavLink></li>
                            <li><NavLink to="/services" className={styles.link}>Продукты</NavLink></li>
                        </ul>
                    </nav>
                    <ul className={styles.side_links}>
                        <li><a href="#contact">Контакты</a></li>
                    </ul>     
                    
                </header>
            </>
            
        )}


export default Nav;