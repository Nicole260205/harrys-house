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

        {/* Hamburger Menu Icon (Mobile Only) */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
        </div>

        {/* Regular Navigation Links */}
        <div className={`navbar-links ${isMenuOpen ? "mobile-open" : ""}`}>
          <ul>
            <li>About</li>
            <li>MVs</li>
            <li>Tour</li>
            <li>Merch</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="navbar-button">
          <a
            href="https://open.spotify.com/intl-pt/album/5r36AJ6VOJtp00oxSkBZ5h?si=mV_kZB-lRW-mhJV4sJol7A"
            className="listen-button"
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
