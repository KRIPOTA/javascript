import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { MainPage } from './pages/MainPage/MainPage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { ChatsPage } from './pages/ChatsPage/ChatsPage'
import { NewsPage } from './pages/NewsPage/NewsPage'
import { ChatList } from './components/ChatList/ChatList'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'


export function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<MainPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="chats">
                <Route index element={<ChatList />} />
                <Route
                  path=":chatId"
                  element={<ChatsPage />}
                />
              </Route>
              <Route path="news" element={<NewsPage />} />
            </Route>
            <Route path="*" element={<h2>404 Page not FOUND</h2>} />
          </Routes>
        </PersistGate>
      </Provider>
    </>
  )
}