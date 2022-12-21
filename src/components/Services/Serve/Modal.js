import React from "react";
import styles from "./Serve.module.css";

const Modal = (props) => {
    return(
        <div className={styles.modal_block}>
            <div className={styles.modal}>
                <div className={styles.close_btn} onClick={() => props.close()}>X</div>
            </div>
        </div>
    )
}

export default Modal;