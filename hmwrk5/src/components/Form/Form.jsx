import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Form({ addMessage }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addMessage({
      author: 'user',
      text
    })

    setText('')
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