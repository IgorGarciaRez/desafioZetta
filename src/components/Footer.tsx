import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} Igor Garcia Rezende, 2025 </p>
      </div>
    </footer>
  );
};

export default Footer;