import React from "react";
import styles from "./Serve.module.css";

const Modal = (props) => {
    return(
        <div className={styles.modal_block}>
            <div className={styles.modal}>
                <div className={styles.close_btn} onClick={() => props.close()}>
                    <span class="material-icons material-icons-outlined">close</span>
                </div>
                <div className={styles.modal_details}>
                    <h1 className={styles.modal_title}>{props.title}</h1>
                    <div className={styles.serve_data}>
                        {
                            props.details.map(e => {
                                return(
                                    <div key={e.id} className={styles.detail_element}>
                                        {e.title ? <h3>{e.title}</h3> : ""}
                                        {e.sub_title ? <p className={styles.sub_title}>{e.sub_title}</p> : ""}
                                        {e.serve_list ? <ul>{e.serve_list.map(e => <li>{e}</li>)}</ul> : ""}
                                        {e.sub_text_list ? e.sub_text_list.map(e => <p>{e}</p>) : ""}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;