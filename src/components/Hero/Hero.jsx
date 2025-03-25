import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext'; // Import theme context

const Hero = () => {
  const { isDarkMode } = useTheme(); // Access the theme state

  return (
    <HeroSection isDarkMode={isDarkMode} id="home">
      <HeroContent>
        <h3>Hello, It's me</h3>
        <h1>Harish Singh</h1>
        <h3>And I am a <span>Full Stack Developer</span></h3>
        <Description>
        I’m a passionate Full Stack Developer with hands-on experience building dynamic and scalable applications, including a Student Management System and an Amazon clone. I've actively participated in hackathons and tech events, constantly pushing my skills to the next level. With a keen eye for innovation and problem-solving, I thrive on creating impactful digital solutions.
        </Description>
        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/feed/" target="_blank">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/harish.chaudharyy_/" target="_blank">
            <FaInstagram />
          </SocialLink>
        </SocialLinks>
      </HeroContent>
      <HeroImage>
      <img src={require("../../assets/background.jpg")} alt="profile"  />
      </HeroImage>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
  background: ${({ isDarkMode }) => (isDarkMode ? '#1f1f1f' : '#ffffff')};
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 5rem;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  
  h1 {
    font-size: 3.5rem;
    margin: 1rem 0;
  }
  
  h3 {
    font-size: 1.5rem;
    
    span {
      color: #0ef;
    }
  }
`;

const Description = styled.p`
  margin: 1rem 0;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: #0ef;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 70%;
    height: 70%;
    border-radius: 50%;
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  @media (max-width: 768px) {
    margin-top: 2rem;
    
    img {
      width: 60%;
    }
  }
`;

export default Hero;
