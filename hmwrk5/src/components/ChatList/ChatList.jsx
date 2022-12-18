import { useState } from "react"
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function ChatList({ onAddChat, chats }) {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddChat({
      id: nanoid(),
      name: value
    })
    setValue('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px', marginTop: '30px', marginLeft: '30px' }}>
        <TextField
          id="standard-basic"
          label="Add new chat"
          variant="standard"
          size="small"
          type="text"
          value={value}
          onChange={handleChange}
          autoFocus
        />
        <Button variant="contained" color="success" type="submit" size="small" sx={{ marginLeft: '3px', marginTop: '14px', width: '150px' }}>Create Chat</Button>
      </form>
      <h1 style={{ marginLeft: '30px' }}>ChatList </h1>
      <List>
        {chats.map((chat) => (
          <ListItem sx={{
            width: '350px', marginLeft: '30px', border: '1px solid grey', cursor: 'pointer', '&:hover': {
              background: "grey",
            },
          }} key={chat.id}>
            <Link style={{ textDecoration: 'none', color: 'black', padding: '5px 272px 5px 17px' }} to={`/chats/${chat.name}`}>
              {chat.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  )
}