import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate loading projects
    setTimeout(() => {
      setProjects([
        {
          title: 'Student Management System',
          description: 'A comprehensive system built with HTML, CSS, JavaScript, PHP, and phpMyAdmin for managing student data with secure authentication.',
          tech: ['FRONTEND', 'PHP', 'phpMyAdmin'],
          link: '#'
        },
        {
          title: 'Amazon Clone',
          description: 'A responsive clone of Amazon\'s homepage showcasing advanced HTML and CSS skills.',
          tech: ['HTML', 'CSS'],
          link: '#'
        },
        {
          title: 'Mobile App',
          description: 'A mobile app built using Flutter with Firebase integration.',
          tech: ['Flutter', 'Dart', 'Firebase'],
          link: '#'
        }
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <LoadingSection>Loading projects...</LoadingSection>;
  }

  return (
    <ProjectsSection id="projects">
      <h1>Projects</h1>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <TechStack>
              {project.tech.map((tech, i) => (
                <TechTag key={i}>{tech}</TechTag>
              ))}
            </TechStack>
            <ViewProject href={project.link}>View Project</ViewProject>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 5rem 10%;
  
  h1 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: var(--primary);
  }
`;

const LoadingSection = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: var(--primary);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: var(--secondary);
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  h2 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: var(--primary);
  color: var(--background);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const ViewProject = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: var(--primary);
  color: var(--background);
  text-decoration: none;
  border-radius: 5px;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

export default Projects; 