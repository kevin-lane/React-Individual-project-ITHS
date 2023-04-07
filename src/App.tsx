import { useState } from 'react'
import PhotoItems from './components/PhotoItems'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <PhotoItems />
    </div>
  )
}

export default App
