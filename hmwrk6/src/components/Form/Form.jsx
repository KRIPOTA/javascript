import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux'
import { addMessage } from '../../store/messages/actions'
import { useParams } from 'react-router-dom'
import { AUTHOR } from '../../constants';

export function Form() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const { chatId } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addMessage(chatId, text, AUTHOR.user))
    const fdfdf = 'Сообщение успешно отправлено!';
    const timeout = setTimeout(() => {
      dispatch(addMessage(chatId, fdfdf, AUTHOR.bot))
    }, 1500)
    setText('')
    return () => {
      clearTimeout(timeout)
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px', marginTop: '30px', marginLeft: '30px' }}>
        <TextField
          id="standard-basic"
          label="Your Message"
          variant="standard"
          size="small"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          autoFocus
        />
        <Button variant="contained" color="success" type="submit" size="small" sx={{ marginLeft: '3px', marginTop: '14px', width: '150px' }}>Add message</Button>
      </form>
    </>
  )
}