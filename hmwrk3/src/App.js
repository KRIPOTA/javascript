import { useState, useEffect } from 'react'
import { Form } from './components/Form/Form'
import { MessageList } from './components/MessageList/MessageList'
import { ChatList } from './components/ChatList/ChatList'
import Box from '@mui/material/Box';




export function App() {
  const [messages, setMessages] = useState([])
  const [chats, setChats] = useState([{ name: "Chatname", id: 1 }])

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage])
  }

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author === 'user') {
      const timeout = setTimeout(() => {
        addMessage({
          author: 'ChatBot',
          text: 'Сообщение успешно отправлено!'
        })
      }, 1500)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messages])


  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <ChatList chats={chats}></ChatList>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginRight: '600px', marginLeft: '-300px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <MessageList messages={messages} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '50px' }}>
            <Form addMessage={addMessage} />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App