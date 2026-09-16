import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Button from './components/ui/Button.jsx'
import Input from "./components/ui/Input.jsx"
import Navbar from"./components/layout/Navbar.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className="form">
    <Input/>
     <Button/>
     </div>
    </>
  )
}

export default App
