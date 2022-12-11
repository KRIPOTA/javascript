import { Message } from './components/Message'
import { useState } from "react";
import { useEffect } from 'react';
import styles from './components/Message.module.css'

export default function App() {
  const [arr, setArr] = useState([])
  const [valueauthor, setValAut] = useState('')
  const [valuetext, setValText] = useState('')

  const handlechangeauthor = (event) => {
    setValAut(event.target.value)
  }

  const handlechangetext = (event) => {
    setValText(event.target.value)
  }

  const handleclick = () => {
    const newobj = { author: valueauthor, text: valuetext }
    setArr([...arr, newobj]);
    setTimeout(() => { alert('Сообщение успешно отправлено') }, 1100)
  }

  return (
    <>
      <div className={styles.msg}>
        <Message arr={arr}></Message>
        <div className={styles.form}>
          <input className={styles.inp} type="text" onChange={handlechangeauthor} placeholder="Author" />
          <input className={styles.inp} type="text" onChange={handlechangetext} placeholder="Text" />
          <button className={styles.btn} onClick={handleclick}>Отправить сообщение</button>
        </div>
      </div>

    </>
  )
};
