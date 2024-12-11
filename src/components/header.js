import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionClick = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <header>
      <nav className="nav container">
        <i className='bx bx-menu' id="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
        <div className="logo">
          <Link to="/home">The <span>Plant</span> Project</Link>
        </div>
        <ul className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/home" onClick={handleSectionClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleSectionClick}>About</Link></li>
          <li><Link to="/explorePlants" onClick={handleSectionClick}>Explore</Link></li>
          <li><Link to="/blog" onClick={handleSectionClick}>Blog</Link></li>
          <li><Link to="/contact" onClick={handleSectionClick}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

