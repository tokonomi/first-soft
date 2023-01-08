import React from "react";
import styles from "./Contact.module.css";

const Contacts = () => {
    return(
        <section id="contact">
            <div className={styles.contacts_block}>
                <div className={styles.frame_block}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4175.662764366596!2d49.871815146408416!3d40.38318236683418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1672049726981!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                </div>
                <div className={styles.form_block}>
                    <form>
                        <div className={styles.form_title}>
                            <img src={require("../../assets/web-logo.png")}/>
                            <p>Мы свяжемся с вами, оставьте заявку</p>
                        </div>
                        <div className={styles.form_inputs}>
                            <input type="text" placeholder="Ваше имя" autoComplete="off"/>
                            <input type="number" placeholder="Номер телефона" autoComplete="off"/>
                            <input type="email" placeholder="Электронная почта" autoComplete="off"/>
                            <input type="text" placeholder="Какие услуги вас интересуют?" autoComplete="off"/>
                            <input type="text" placeholder="Ваш бизнес" autoComplete="off"/>
                            <button type="submit">Оставить заявку</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacts;