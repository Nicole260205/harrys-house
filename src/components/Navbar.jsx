import React from 'react'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-title">
          <h1>Harry Styles</h1>
        </div>
        <div className="navbar-links">
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

export default Navbar
