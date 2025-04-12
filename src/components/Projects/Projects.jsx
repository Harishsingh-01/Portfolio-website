import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const sectionRef = useRef(null);
  const projectsRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
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
          link: 'https://hotel-management-clientt-git-main-harishsingh-01s-projects.vercel.app/'
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

  useEffect(() => {
    if (!sectionRef.current || !projectsRef.current || !titleRef.current || isLoading) return;

    // Animate section title
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      },
      y: -50,
      opacity: 0,
      duration: 1
    });

    // Convert HTMLCollection to Array before using forEach
    const projectCardsArray = Array.from(projectsRef.current.children);

    // Animate project cards
    gsap.from(projectCardsArray, {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Add hover effects
    projectCardsArray.forEach(card => {
      // Create hover animation timeline
      const hoverTl = gsap.timeline({ paused: true });
      
      hoverTl
        .to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
        });

      // Add event listeners
      card.addEventListener('mouseenter', () => hoverTl.play());
      card.addEventListener('mouseleave', () => hoverTl.reverse());
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      projectCardsArray.forEach(card => {
        card.replaceWith(card.cloneNode(true));
      });
    };
  }, [isLoading]);

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
    <ProjectsSection ref={sectionRef} isDarkMode={isDarkMode} id="projects">
      <h1 ref={titleRef}>Projects</h1>
      <ProjectsGrid ref={projectsRef}>
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
              <motion.p>
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
                target="_blank"
                rel="noopener noreferrer"
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