import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Form } from '../components/Form/Form'
import { MessageList } from '../components/MessageList/MessageList'
import { ChatList } from '../components/ChatList/ChatList'
import Box from '@mui/material/Box';



export function ChatsPage({ onAddChat, onAddMessage, messages, chats }) {

  const { chatId } = useParams()

  useEffect(() => {
    if (chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === 'user'
    ) {
      const timeout = setTimeout(() => {
        onAddMessage(chatId, {
          author: "BOT",
          text: 'Сообщение успешно отправлено!'
        })
      }, 1500)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [chatId, messages])

  const handleAddMessage = (massage) => {
    if (chatId) {
      onAddMessage(chatId, massage)
    }
  }

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <h1 style={{ marginLeft: '30px' }}>Welcome to chat!</h1>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <ChatList chats={chats} onAddChat={onAddChat} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: '600px', marginLeft: '-300px' }}>
          <Form addMessage={handleAddMessage} />
          <MessageList messages={chatId ? messages[chatId] : []} />
        </Box>
      </Box>
    </>
  )
}

// export default App