import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountdownTimer from './Components/CountdownTimer'
import UserList from './Components/UserList'
import WindowSize from './Components/WindowSize'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CountdownTimer/>
    <UserList/>
    <WindowSize/>

    </>
  )
}

export default App
