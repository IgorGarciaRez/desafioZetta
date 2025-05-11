import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const NavbarBootstrap = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="#"><img src={logo} alt="Logo" /></a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <form className="d-flex mx-auto" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Pesquisar..."
            aria-label="Search"
          />
        </form>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/region/1">Kanto</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/region/2">Johto</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/region/3">Hoenn</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/region/4">Sinnoh</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/region/5">Unova</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/region/6">Kalos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/region/7">Alola</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/region/8">Galar</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/region/9">Paldea</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarBootstrap;