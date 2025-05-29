import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaDownload, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { useTheme } from '../../context/ThemeContext';
import profileImage from '../../assets/background.jpg';
import resumePDF from '../../assets/resume.pdf';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);

  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "React Developer"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = currentRole % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(1000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentRole(prevRole => prevRole + 1);
      setDelta(100);
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
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
            className="greeting"
          >
            Hello, I'm
          </motion.h3>
          <motion.h1
            variants={itemVariants}
            className="name"
          >
            Harish Singh
          </motion.h1>
          <motion.h3 variants={itemVariants} className="title">
            <TypewriterText>{text}</TypewriterText>
          </motion.h3>
          <motion.div variants={itemVariants}>
            <Description>
              I'm a passionate Full Stack Developer crafting innovative digital solutions.
              Specializing in building scalable applications with modern technologies.
            </Description>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SocialLinks>
              <SocialIcon
                href="www.linkedin.com/in/harish--singh"
                target="_blank"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon
                href="https://github.com/Harishsingh-01"
                target="_blank"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </SocialIcon>
              <SocialIcon
                href="https://x.com/Harish_x01"
                target="_blank"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </SocialIcon>
            </SocialLinks>
          </motion.div>
          <motion.div variants={itemVariants}>
            <ButtonGroup>
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
                <ButtonContent>
                  <ButtonIcon>
                    <FaDownload />
                  </ButtonIcon>
                  <ButtonText>Download Resume</ButtonText>
                </ButtonContent>
              </ResumeButton>
              <ContactButton
                as={motion.a}
                href="#contact"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px var(--secondary)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ButtonContent>
                  <ButtonIcon>
                    <FaEnvelope />
                  </ButtonIcon>
                  <ButtonText>Contact Me</ButtonText>
                </ButtonContent>
              </ContactButton>
            </ButtonGroup>
          </motion.div>
        </motion.div>
      </HeroContent>

      <HeroImage
        as={motion.div}
        variants={contentVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[2, 1, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color={isDarkMode ? "#4a00e0" : "#8e2de2"}
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
        <motion.img
          src={profileImage}
          alt="profile"
          className="profile-image"
          animate={isVisible ? { 
            y: [-20, 0, -20],
            scale: [1, 1.02, 1]
          } : {}}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
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
  position: relative;
  overflow: hidden;
  background: ${props => props.isDarkMode ? 'var(--dark-bg)' : 'var(--light-bg)'};
  color: ${props => props.isDarkMode ? 'var(--light-text)' : 'var(--dark-text)'};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  z-index: 1;

  .greeting {
    font-size: 1.5rem;
    color: ${props => props.theme['--primary']};
    margin-bottom: 1rem;
  }

  .name {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${props => props.theme['--dark-text']};
    background: linear-gradient(45deg, 
      ${props => props.theme['--primary']}, 
      ${props => props.theme['--secondary']}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(45deg, 
        ${props => props.theme['--primary']}, 
        ${props => props.theme['--secondary']}
      );
      border-radius: 2px;
    }
  }

  .title {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${props => props.theme['--dark-text']};
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  color: ${props => props.theme['--dark-text']};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialIcon = styled(motion.a)`
  font-size: 1.5rem;
  color: var(--primary);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const ButtonIcon = styled.span`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

const ButtonText = styled.span`
  font-weight: 600;
`;

const ResumeButton = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 50px;
  background: ${props => props.theme['--gradient']};
  color: ${props => props.theme['--light-text']};
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }
`;

const ContactButton = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 50px;
  background: transparent;
  color: ${props => props.theme['--primary']};
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.theme['--primary']};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme['--primary']};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.6s ease;
    z-index: -1;
  }

  &:hover {
    color: ${props => props.theme['--light-text']};
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  position: relative;
  height: 500px;
  width: 500px;

  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
    margin-top: 2rem;
  }

  .profile-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--primary);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }
`;

const TypewriterText = styled.span`
  display: inline-block;
  position: relative;
  color: var(--secondary);
  transition: all 0.1s ease;

  &::after {
    content: '|';
    position: absolute;
    right: -5px;
    animation: blink 0.7s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const TypewriterCursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1em;
  background: ${props => props.theme['--primary']};
  margin-left: 0.1rem;
  animation: blink 1s infinite;
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

export default Hero;
