import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';



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
      <Box sx={{ display: 'flex', flexDirection: 'column', }}>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', }}>
            <TextField
              id="standard-basic"
              label="Your Message"
              variant="standard"
              size="small"
              type="text"
              value={text}
              onChange={(event) => setText(event.target.value)}
              autoFocus />
            <Button variant="contained" color="success" type="submit" size="small" sx={{ marginTop: '20px', width: '150px' }}>Add message</Button>
          </Box >
        </form>
      </Box>
    </>
  )
}
