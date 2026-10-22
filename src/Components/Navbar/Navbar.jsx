
import { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
        IRON<span>VAULT</span>
      </a>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#pricing" onClick={() => setMenuOpen(false)}>Membership</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        <a
          href="#contact"
          className="mobile-join-btn"
          onClick={() => setMenuOpen(false)}
        >
          JOIN NOW <FiArrowUpRight />
        </a>
      </nav>

      <a href="#contact" className="join-btn desktop-join-btn">
        JOIN NOW <FiArrowUpRight />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

    </header>
  );
}

export default Navbar;
