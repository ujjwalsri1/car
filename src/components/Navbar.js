import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>i.mobilothon</div>
      <ul style={{...styles.menu, ...(isMobileMenuOpen ? styles.menuOpen : {})}}>
        <li style={styles.menuItem}><Link style={styles.link} to="/">Home</Link></li>
        <li style={styles.menuItem}><Link style={styles.link} to="/order-repair-parts">Order Repair Parts</Link></li>
        <li style={styles.menuItem}><Link style={styles.link} to="/video-repair-guide">Video Repair Guide</Link></li>
        <li style={styles.menuItem}><Link style={styles.link} to="/virtual-car-models">3D Car Models</Link></li>
        <li style={styles.menuItem}><Link style={styles.link} to="/chatbot-assistant">Chatbot Assistant</Link></li>
        <li style={styles.menuItem}><Link style={styles.link} to="/damage">Damage Detection</Link></li>
      </ul>
      <div style={styles.menuToggle} onClick={toggleMenu}>
        <span style={styles.bar}></span>
        <span style={styles.bar}></span>
        <span style={styles.bar}></span>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1000,
  },
  logo: {
    fontSize: '24px',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  menuItem: {
    marginLeft: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    padding: '10px 15px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  linkHover: {
    backgroundColor: '#f5a623',
    color: '#fff',
  },
  menuToggle: {
    display: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    zIndex: 1001,
  },
  bar: {
    width: '25px',
    height: '4px',
    backgroundColor: '#fff',
    margin: '5px 0',
    transition: '0.4s',
  },
  menuOpen: {
    display: 'block',
    position: 'absolute',
    top: '60px',
    left: 0,
    width: '100%',
    backgroundColor: '#333',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
    paddingTop: '20px',
  },
  '@media (max-width: 768px)': {
    menu: {
      display: 'none',
      flexDirection: 'column',
      width: '100%',
      textAlign: 'center',
    },
    menuItem: {
      marginLeft: 0,
      marginBottom: '15px',
    },
    menuToggle: {
      display: 'flex',
    },
  }
}

export default Navbar;
