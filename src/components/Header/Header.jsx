import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaCode, FaBars, FaTimes, FaEllipsisV } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Certificates', path: '#certificates' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Nav>
        <Logo href="#home">
          <FaCode className="code-icon" />
          <span>Portfolio</span>
        </Logo>

        <NavLinks isMobileMenuOpen={isMobileMenuOpen}>
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              as={motion.li}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </NavLink>
            </NavItem>
          ))}
        </NavLinks>

        <NavActions>
          <ThemeToggle
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEllipsisV />
          </MobileMenuButton>
        </NavActions>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${props => props.isScrolled 
    ? props.theme['--card-bg'] 
    : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.isScrolled 
    ? '0 2px 10px rgba(0, 0, 0, 0.1)' 
    : 'none'};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: ${props => props.theme['--primary']};
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 3rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }

  .code-icon {
    font-size: 1.8rem;
    background: ${props => props.theme['--gradient']};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  span {
    background: ${props => props.theme['--gradient']};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    background: ${props => props.theme['--card-bg']};
    backdrop-filter: blur(10px);
    transform: translateX(${props => props.isMobileMenuOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 5rem 0 2rem 0;
    z-index: 1000;
  }
`;

const NavItem = styled(motion.li)`
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavLink = styled(motion.a)`
  color: ${props => props.theme['--dark-text']};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme['--gradient']};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${props => props.theme['--primary']};
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 1rem 2rem;
    width: 100%;
    text-align: left;
    font-size: 1.1rem;

    &:hover::after {
      width: 0;
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  color: ${props => props.theme['--primary']};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${props => props.theme['--card-bg']};
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme['--primary']};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Add overlay for mobile menu
const MobileMenuOverlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    z-index: 999;
  }
`;

export default Header;
