import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div>
          <h1 className="navbar-title">Harry Styles</h1>
        </div>

        {/* Ícone do Menu Hamburguer */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
        </div>

        {/* Links de navegação e botão */}
        <div className={`navbar-links ${isMenuOpen ? "mobile-open" : ""}`}>
          <ul>
            <li>About</li>
            <li>MVs</li>
            <li>Tour</li>
            <li>Merch</li>
            <li>Contacts</li>
          </ul>

          {/* Botão Listen dentro do menu hamburguer */}
          <a
            href="https://open.spotify.com/intl-pt/album/5r36AJ6VOJtp00oxSkBZ5h?si=mV_kZB-lRW-mhJV4sJol7A"
            className="listen-button menu-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
