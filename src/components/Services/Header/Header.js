import React from "react";

import styles from "./Header.module.css";

const Header = () => <header className={styles.header}>
    <div className={styles.left_side_header}>
        <div className={styles.left_side_title}>
            <h1>Мы поможем вам выбрать правильный продукт для вашего <span>Бизнеса</span>!</h1>
        </div>
        <p>Если у вас небольшая фирма или вы управляете крупным холдингом, вы всегда сможете найти для себя самое оптимальное решение из линейки фирмы «1С».</p>
    </div>
    <div className={styles.right_side_title}>
        <div className={styles.right_side_imgs}>
            <img src={require('../../../assets/Services/header.png')}/>
        </div>
    </div>
</header>

export default Header;