import { useState, useContext } from 'react'
import './App.css'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React for Context API</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
