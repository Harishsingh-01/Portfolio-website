import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext'; // Import theme context
import profileImage from '../../assets/background.jpg';

const Hero = () => {
  const { isDarkMode } = useTheme(); // Access the theme state

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <HeroSection isDarkMode={isDarkMode} id="home">
      <HeroContent>
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 variants={itemVariants}>
            Hello, It's me
          </motion.h3>
          <motion.h1
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Harish Singh
          </motion.h1>
          <motion.h3 variants={itemVariants}>
            And I am a <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
              Full Stack Developer
            </motion.span>
          </motion.h3>
          <motion.div variants={itemVariants}>
            <Description>
              I'm a passionate Full Stack Developer with hands-on experience building dynamic and scalable applications, 
              including a Student Management System and an Amazon clone. I've actively participated in hackathons and 
              tech events, constantly pushing my skills to the next level. With a keen eye for innovation and 
              problem-solving, I thrive on creating impactful digital solutions.
            </Description>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SocialLinks>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialLink href="https://www.linkedin.com/feed/" target="_blank">
                  <FaLinkedin />
                </SocialLink>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialLink href="https://www.instagram.com/harish.chaudharyy_/" target="_blank">
                  <FaInstagram />
                </SocialLink>
              </motion.div>
            </SocialLinks>
          </motion.div>
        </motion.div>
      </HeroContent>

      <HeroImage
        as={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={profileImage}
          alt="profile"
          animate={{ 
            y: [-20, 0, -20],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.05 }}
        />
      </HeroImage>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  background: ${({ isDarkMode }) => (isDarkMode ? '#1f1f1f' : '#ffffff')};
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 5rem;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 50%;
  
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

  @media (max-width: 768px) {
    max-width: 100%;
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
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 70%;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
    
    img {
      width: 60%;
    }
  }
`;

export default Hero;
