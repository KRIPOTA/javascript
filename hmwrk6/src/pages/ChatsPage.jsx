import { useParams, Navigate } from 'react-router-dom'
import { Form } from '../components/Form/Form'
import { MessageList } from '../components/MessageList/MessageList'
import { ChatList } from '../components/ChatList/ChatList'
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux'
import { selectMessage } from '../store/messages/selectors'



export function ChatsPage() {
  const { chatId } = useParams()
  const messages = useSelector(selectMessage)

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <h1 style={{ marginLeft: '30px' }}>Welcome to chat!</h1>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <ChatList />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: '600px', marginLeft: '-300px' }}>
          <Form />
          <MessageList messages={chatId ? messages[chatId] : []} />
        </Box>
      </Box>
    </>
  )
}

// export default App