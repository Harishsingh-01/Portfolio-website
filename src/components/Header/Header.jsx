import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo href="/">Portfolio</Logo>
      <ToggleButton onClick={toggleTheme}>
        {isDarkMode ? <FaSun style={{ fontSize: '1.5rem' }} /> : <FaMoon style={{ fontSize: '1.5rem' }} />}
      </ToggleButton>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuItem><Link to="home" smooth={true} duration={500}>Home</Link></MenuItem>
        <MenuItem><Link to="skills" smooth={true} duration={500}>Skills</Link></MenuItem>
        <MenuItem><Link to="projects" smooth={true} duration={500}>Projects</Link></MenuItem>
        <MenuItem><Link to="contact" smooth={true} duration={500}>Contact</Link></MenuItem>
      </Menu>
    </Nav>
  );
};

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: auto;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0ef;
  }
`;

const Nav = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #1f1f1f;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const Logo = styled.a`
  color: #0ef;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    overflow: hidden;
  }
`;

const MenuItem = styled.div`
  padding: 1rem;
  cursor: pointer;
  
  a {
    color: white;
    text-decoration: none;
    
    &:hover {
      color: #0ef;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: white;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Header;
