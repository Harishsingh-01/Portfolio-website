import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export const NAVBAR_HEIGHT = '70px'; // Adjust this value based on your navbar's actual height

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav isDarkMode={isDarkMode}>
      <Logo 
        href="/" 
        isDarkMode={isDarkMode}
        as={motion.a}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Portfolio
      </Logo>
      
      <ToggleButton 
        onClick={toggleTheme}
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        isDarkMode={isDarkMode}
      >
        {isDarkMode ? 
          <FaSun style={{ fontSize: '1.5rem' }} /> : 
          <FaMoon style={{ fontSize: '1.5rem' }} />
        }
      </ToggleButton>

      <Hamburger 
        onClick={() => setIsOpen(!isOpen)}
        isDarkMode={isDarkMode}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>

      <Menu isOpen={isOpen} isDarkMode={isDarkMode}>
        <MenuItem isDarkMode={isDarkMode}>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </MenuItem>
        <MenuItem isDarkMode={isDarkMode}>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </MenuItem>
        <MenuItem isDarkMode={isDarkMode}>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </MenuItem>
        <MenuItem isDarkMode={isDarkMode}>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  height: ${NAVBAR_HEIGHT};
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: ${({ isDarkMode }) => isDarkMode ? '#1f1f1f' : '#ffffff'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, ${({ isDarkMode }) => isDarkMode ? '0.3' : '0.1'});
  transition: all 0.3s ease;
`;

const Logo = styled.a`
  color: var(--primary);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ isDarkMode }) => isDarkMode ? '#1af' : '#0cd'};
  }
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ isDarkMode }) => isDarkMode ? '#fff' : '#1f1f1f'};
  cursor: pointer;
  margin-left: auto;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary);
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: all 0.3s ease-in;
    overflow: hidden;
    background: ${({ isDarkMode }) => isDarkMode ? '#1f1f1f' : '#ffffff'};
    position: absolute;
    top: ${NAVBAR_HEIGHT};
    left: 0;
    right: 0;
    box-shadow: ${({ isOpen }) => isOpen ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  }
`;

const MenuItem = styled.div`
  padding: 1rem;
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 80%;
  }
  
  a {
    color: ${({ isDarkMode }) => isDarkMode ? '#fff' : '#1f1f1f'};
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--primary);
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ isDarkMode }) => isDarkMode ? '#fff' : '#1f1f1f'};
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Header;
