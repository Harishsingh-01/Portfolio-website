import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "PGify",
      description: "PGify is a user-friendly web app that helps people easily find and book PG accommodations online. Built with the MERN stack, it includes features like Razorpay payment integration, admin dashboard, and role-based access. The site is SEO-optimized and even appears on Google Search, making it easily discoverable by users.",
      image: "https://images.unsplash.com/photo-1586214601498-4dbcfd0bf2c8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Vercel", "Render", "Tailwind CSS"],
      github: "https://github.com/Harishsingh-01/roomease_client",
      live: "https://pgify.vercel.app"
    },
    {
      title: "Fitlife – Online Gym Membership Platform",
      description: "FitLife is a modern gym website that allows users to explore services and book gym memberships online. Built with the MERN stack, it features Razorpay integration, a responsive design, and an admin dashboard for managing bookings. The site is also SEO-optimized and successfully appears on Google Search, making it easily accessible to potential members.",
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Razorpay", "Vercel", "Render"],
      github: "https://github.com/Harishsingh-01/gym-D-fitness-website",
      live: "https://fitlifegym.vercel.app/"
    },
    {
      title: "FilmYatra-Movie Recommendation & Streaming Platform",
      description: "CineStream is a MERN stack-based web app that recommends movies based on user-selected language and genres. Users can update preferences anytime. Movies stream via YouTube links to ensure smooth playback and reduce server load. The platform is SEO-optimized and offering curated entertainment to a wider audience.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Vercel", "Render", "Tailwind CSS"],
      github: "https://github.com/Harishsingh-01/movie-app-client",
      live: "https://movie-app-client-virid.vercel.app/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <ProjectsSection id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <ProjectsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
                <ProjectOverlay>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </ProjectLink>
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </ProjectLink>
                </ProjectOverlay>
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                  {project.technologies.map((tech, idx) => (
                    <TechTag key={idx}>{tech}</TechTag>
                ))}
              </TechStack>
              </ProjectContent>
              <MobileButtons>
                <MobileButton href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </MobileButton>
                <MobileButton href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </MobileButton>
              </MobileButtons>
            </ProjectCard>
          ))}
      </ProjectsGrid>
      </div>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme['--light-bg']};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme['--card-bg']};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: ${props => props.theme['--card-shadow']};
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    opacity: 1;
    background: rgba(0, 0, 0, 0.5);
    flex-direction: column;
  }
`;

const ProjectLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: transparent;
  text-decoration: none;
  width: 45px;
  height: 45px;
  justify-content: center;

  &:hover {
    transform: scale(1.2);
    color: ${props => props.theme['--primary']};
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  color: ${props => props.theme['--dark-text']};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${props => props.theme['--dark-text']};
  margin-bottom: 1rem;
  opacity: 0.8;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

const TechTag = styled.span`
  background: ${props => props.theme['--gradient']};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const MobileButtons = styled.div`
  display: none;
  gap: 1rem;
  margin-top: 1rem;
  padding: 0 1.5rem 1.5rem;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const MobileButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: transparent;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.3rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: ${props => props.theme['--primary']};
  }
`;

export default Projects;