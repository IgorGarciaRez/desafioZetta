import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import { Home } from './pages/Home.tsx'
import NavbarBootstrap from './components/Navbar.tsx'
import { Regions } from "./pages/Regions.tsx";
import { Search } from "./pages/Search.tsx";

function App() {
  return (
    <>
      <NavbarBootstrap/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/region/:id" element={<Regions />} />
        <Route path="/search/:pkm" element={<Search />}/>
      </Routes>
    </>
  )
}

export default App
