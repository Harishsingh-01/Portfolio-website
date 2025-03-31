import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext'; // Import theme context
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaDatabase, FaPhp, FaReact } from 'react-icons/fa';
import { SiMongodb, SiGithub, SiTailwindcss, SiVercel, SiMysql } from 'react-icons/si';

const Skills = () => {
  const { isDarkMode } = useTheme(); // Access the theme state

  const skills = [
    { name: 'Node.js', icon: <SiMongodb />, level: 80 },
    { name: 'React.js', icon: <FaReact />, level: 80 },
    { name: ' CSS3', icon: <FaCss3Alt />, level: 85 },
    { name: 'Express.js', icon: <FaDatabase />, level: 85 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
    { name: 'Core Java', icon: <FaJava />, level: 75 },
    // { name: 'JavaScript', icon: <FaJs />, level: 80 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
    { name: 'Git', icon: <SiGithub />, level: 85 },
    { name: 'GitHub', icon: <SiGithub />, level: 85 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
    { name: 'Hosting And Deployment', icon: <SiVercel />, level: 80 },
    { name: 'MySQL', icon: <SiMysql />, level: 75 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <SkillsSection isDarkMode={isDarkMode} id="skills">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SkillsContainer>
          <AnimatePresence>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{
                  duration: 0.3,
                  ease: "easeOut"
                }}
              >
                <SkillBar
                  as={motion.div}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
                  }}
                  transition={{ duration: 0.2 }}
                  isDarkMode={isDarkMode}
                >
                  <SkillInfo isDarkMode={isDarkMode}>
                    <motion.div
                      animate={{ 
                        y: [0, -5, 0] 
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <SkillIcon>{skill.icon}</SkillIcon>
                    </motion.div>
                    <span>{skill.name}</span>
                  </SkillInfo>
                  <ProgressBar isDarkMode={isDarkMode}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      style={{
                        height: "100%",
                        background: "var(--primary)",
                        borderRadius: "5px"
                      }}
                    />
                  </ProgressBar>
                </SkillBar>
              </motion.div>
            ))}
          </AnimatePresence>
        </SkillsContainer>
      </motion.div>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding: 5rem 10%;
  background: ${({ isDarkMode }) => (isDarkMode ? '#1f1f1f' : '#ffffff')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
  
  h1 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: var(--primary);
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillBar = styled.div`
  background: ${({ isDarkMode }) => (isDarkMode ? 'var(--secondary)' : '#f5f5f5')};
  padding: 1.5rem;
  border-radius: 10px;
  transition: all 0.3s ease;
`;

const SkillInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
  color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
  
  span {
    font-size: 1.1rem;
  }
`;

const SkillIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary);
`;

const ProgressBar = styled.div`
  height: 10px;
  background: ${({ isDarkMode }) => (isDarkMode ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.05)')};
  border-radius: 5px;
  overflow: hidden;
`;

export default Skills;