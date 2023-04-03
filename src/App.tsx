import { useState } from 'react'
import PhotoItems from './components/PhotoItems'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PhotoItems />
    </div>
  )
}

export default App
