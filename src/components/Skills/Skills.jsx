import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaDatabase, FaPhp, FaReact } from 'react-icons/fa';
import { SiMongodb, SiGithub, SiTailwindcss,SiVercel,SiMysql } from 'react-icons/si';

const Skills = () => {
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

  return (
    <SkillsSection id="skills">
      <h1>My Skills</h1>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <SkillBar key={index}>
            <SkillInfo>
              <SkillIcon>{skill.icon}</SkillIcon>
              <span>{skill.name}</span>
            </SkillInfo>
            <ProgressBar>
              <Progress level={skill.level} />
            </ProgressBar>
          </SkillBar>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding: 5rem 10%;
  
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
  background: var(--secondary);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

const SkillInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
  
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
  background: rgba(0,0,0,0.1);
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: var(--primary);
  width: ${props => props.level}%;
  transition: width 1s ease-in-out;
`;

export default Skills; 