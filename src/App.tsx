import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ScrollVelocity from './components/animations/ScrollVelocity';

function App() {
  const [count, setCount] = useState(0)
  const velocity = 30;
  return (
    <>

  
  <ScrollVelocity
    texts={['React Bits', 'Scroll Down']} 
    velocity={velocity} 
    className="custom-scroll-text"
  />
    </>
  )
}

export default App
