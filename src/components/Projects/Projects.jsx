import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate loading projects
    setTimeout(() => {
      setProjects([
        {
          title: 'Movie Recommened website',
          description: 'A comprehensive system built with MERN stack for Movie Recommendation and Streaming with secure authentication.',
          tech: ['REACT', 'NODE', 'EXPRESS', 'MONGODB'],
          link: 'https://movie-app-client-harishsingh-01s-projects.vercel.app/'
        },
        {
          title: 'PGify',
          description: 'A website for PG booking with MERN stack.',
          tech: ['REACT', 'NODE', 'EXPRESS', 'MONGODB'],
          link: 'https://hotel-management-clientt-git-main-harishsingh-01s-projects.vercel.app/register'
        },
        {
          title: 'E-commerce website',
          description: 'A website for E-commerce with Next.js and supabase (Under Development).',
          tech: ['Next.js', 'supabase'],
          link: '#'
        }
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50,
      opacity: 0,
      scale: 0.9
    },
    visible: { 
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  if (isLoading) {
    return (
      <LoadingSection isDarkMode={isDarkMode}>
        <motion.div
          animate={{
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading projects...
        </motion.div>
      </LoadingSection>
    );
  }

  return (
    <ProjectsSection isDarkMode={isDarkMode} id="projects">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>
      
      <ProjectsGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AnimatePresence>
          {projects.map((project, index) => (
            <ProjectCard
              as={motion.div}
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05
              }}
              transition={{ type: "spring", stiffness: 300 }}
              isDarkMode={isDarkMode}
            >
              <motion.h2
                whileHover={{ scale: 1.05 }}
              >
                {project.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>
              <TechStack>
                {project.tech.map((tech, i) => (
                  <TechTag
                    as={motion.span}
                    key={i}
                    whileHover={{ 
                      scale: 1.1
                    }}
                    isDarkMode={isDarkMode}
                  >
                    {tech}
                  </TechTag>
                ))}
              </TechStack>
              <ViewProject
                as={motion.a}
                whileHover={{ 
                  scale: 1.1
                }}
                whileTap={{ scale: 0.95 }}
                href={project.link}
                isDarkMode={isDarkMode}
              >
                View Project
              </ViewProject>
            </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectsGrid>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 5rem 10%;
  position: relative;
  overflow: hidden;
  background: ${({ isDarkMode }) => (isDarkMode ? 'var(--background)' : '#ffffff')};
  
  h1 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: ${({ isDarkMode }) => (isDarkMode ? 'var(--primary)' : '#000000')};
  }
`;

const LoadingSection = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: ${({ isDarkMode }) => (isDarkMode ? 'var(--primary)' : '#000000')};
  background: ${({ isDarkMode }) => (isDarkMode ? 'var(--background)' : '#ffffff')};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: ${({ isDarkMode }) => (isDarkMode ? 'var(--secondary)' : '#f5f5f5')};
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h2 {
    color: ${({ isDarkMode }) => (isDarkMode ? 'var(--primary)' : '#000000')};
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#333333')};
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${({ isDarkMode }) => (isDarkMode ? 'var(--primary)' : '#333333')};
  color: ${({ isDarkMode }) => (isDarkMode ? 'var(--background)' : '#ffffff')};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const ViewProject = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: ${({ isDarkMode }) => (isDarkMode ? 'var(--primary)' : '#333333')};
  color: ${({ isDarkMode }) => (isDarkMode ? 'var(--background)' : '#ffffff')};
  text-decoration: none;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
`;

export default Projects;