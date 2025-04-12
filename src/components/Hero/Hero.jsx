import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext'; // Import theme context
import profileImage from '../../assets/background.jpg';
import resumePDF from '../../assets/resume.pdf'; // Make sure to add your PDF file in assets

const Hero = () => {
  const { isDarkMode } = useTheme(); // Access the theme state
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation start by 1 second
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const contentVariants = {
    hidden: { 
      x: -1000,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        bounce: 0.5,
        duration: 1.2,
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { 
      x: 1000,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        bounce: 0.5,
        duration: 1.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      x: -100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        bounce: 0.3,
        duration: 1
      }
    }
  };

  return (
    <HeroSection isDarkMode={isDarkMode} id="home">
      <HeroContent
        as={motion.div}
        variants={contentVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div>
          <motion.h3 
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              x: 10,
              transition: { type: "spring", bounce: 0.6 }
            }}
          >
            Hello, It's me
          </motion.h3>
          <motion.h1
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1,
              x: 10,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
          >
            Harish Singh
          </motion.h1>
          <motion.h3 variants={itemVariants}>
            And I am a <motion.span
              initial={{ opacity: 0, x: -5 }}
              animate={isVisible ? { 
                opacity: 1,
                x: 5
              } : { opacity: 0, x: -5 }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
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
          <motion.div 
            variants={itemVariants}
            style={{ marginTop: '2rem' }}
          >
            <ResumeButton
              as={motion.a}
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px var(--primary)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </ResumeButton>
          </motion.div>
        </motion.div>
      </HeroContent>

      <HeroImage
        as={motion.div}
        variants={imageVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.img
          src={profileImage}
          alt="profile"
          animate={isVisible ? { 
            y: [-20, 0, -20],
            scale: [1, 1.02, 1]
          } : {}}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15
            }
          }}
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

const ResumeButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--primary);
  color: var(--background);
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transform: rotate(45deg);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%) rotate(45deg); }
    100% { transform: translateX(100%) rotate(45deg); }
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }
`;

export default Hero;
