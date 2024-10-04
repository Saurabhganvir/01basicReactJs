import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Card1 from './components/Card1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-blue-200  p-3 rounded-md'>React with tailwind</h1>
      {/* <Card/> */}
      <Card1 username = "Saurabh"/>
      <Card1 post="Web Developer"/>
      <Card1 image='https://images.unsplash.com/photo-1682723962104-32945b9ad708?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGZhbGNvbnxlbnwwfHwwfHx8MA%3D%3D'/>
      <Card1/>
    </>
  )
}

export default App
