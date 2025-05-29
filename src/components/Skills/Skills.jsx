import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker,FaJava  } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiHtml5, SiCss3  } from 'react-icons/si';
import { SiBisecthosting } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <SiHtml5 />, level: 80 },
    { name: 'CSS', icon: <SiCss3 />, level: 80 },
    { name: 'React', icon: <FaReact />, level: 90 },
    { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
    { name: 'Express', icon: <SiExpress />, level: 80 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
    { name: 'SQL', icon: <FaDatabase />, level: 70 },
    { name: 'Git', icon: <FaGitAlt />, level: 85 },
    { name: 'Tailwind', icon: <SiTailwindcss />, level: 80 },
    { name: 'Java', icon: <FaJava />, level: 80 },
    { name: 'Hosting and Deployment', icon: <SiBisecthosting />, level: 80 },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <SkillsSection id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <SkillsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              as={motion.div}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
              <ProgressBar>
                <ProgressFill level={skill.level} />
              </ProgressBar>
              <SkillLevel>{skill.level}%</SkillLevel>
            </SkillCard>
          ))}
        </SkillsGrid>
      </div>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme['--light-bg']};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled.div`
  background: ${props => props.theme['--card-bg']};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: ${props => props.theme['--card-shadow']};
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${props => props.theme['--primary']};
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme['--dark-text']};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${props => props.theme['--light-bg']};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const ProgressFill = styled.div`
  width: ${props => props.level}%;
  height: 100%;
  background: ${props => props.theme['--gradient']};
  border-radius: 4px;
  transition: width 1s ease-in-out;
`;

const SkillLevel = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme['--primary']};
  font-weight: 600;
`;

export default Skills;