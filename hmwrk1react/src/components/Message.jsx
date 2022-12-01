import { useState } from "react"

import styles from './Message.module.css'

export function Message(props) {
    return (
        <>
            <h2>Message: <span className={styles.color}>{props.msg}</span></h2>
        </>
    )
} 