import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import hamburger icon
import './Nav.css';
import React from 'react';

const Nav = ({ handleInputChange, query }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <GiHamburgerMenu />
      </div>

      {/* Menu Links - Show/Hide based on menuOpen */}
      <div className={`profile-container ${menuOpen ? 'active' : ''}`}>
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
