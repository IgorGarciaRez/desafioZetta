import React from 'react';

const NavbarBootstrap = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="#">MeuSite</a>

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
            <a className="nav-link active" href="#">Início</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sobre</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarBootstrap;