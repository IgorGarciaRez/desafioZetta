import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import { Home } from './pages/Home.tsx'
import NavbarBootstrap from './components/Navbar.tsx'

function App() {
  return (
    <>
      <NavbarBootstrap/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/region/:id" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
