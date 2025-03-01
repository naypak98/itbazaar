import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UpperFragment from "./UpperFragment.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>

          <div className="main-container">
              <UpperFragment />

          </div>


      </>









  )
}

export default App
