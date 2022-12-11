import { useEffect, useState } from "react"

import styles from './Message.module.css'

export function Message(props) {
    return (
        <div className={styles.msglist}>
            <h2>MessageList</h2>
            {props.arr.map((item) => (<p><span className={styles.msgspan}>Author:</span> {item.author} < br />
                <span className={styles.msgspan}>Text:</span> {item.text}</p>))
            }
        </div >
    )
} 