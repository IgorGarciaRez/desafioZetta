import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-primary">Olá, React com TypeScript e Bootstrap!</h1>
        <p className="lead">Seu projeto está funcionando.</p>
        <button className="btn btn-success">Clique aqui</button>
    </div>
    </>
  )
}

export default App
