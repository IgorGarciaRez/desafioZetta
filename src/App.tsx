import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import { Home } from './pages/Home.tsx'
import NavbarBootstrap from './components/Navbar.tsx'
import { Regions } from "./pages/Regions.tsx";
import { Search } from "./pages/Search.tsx";
import Footer from "./components/Footer.tsx";
import './App.css';

function App() {
  return (
    <>
      <NavbarBootstrap/>
      <div className="spacer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/region/:id" element={<Regions />} />
          <Route path="/search/:pkm" element={<Search />}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
