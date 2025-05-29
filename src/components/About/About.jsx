import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';

const About = () => {
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

  const services = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using modern frameworks and best practices."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Building robust and scalable server-side applications with Node.js and Express."
    },
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Solutions",
      description: "Developing end-to-end web applications with seamless integration of frontend and backend."
    }
  ];

  return (
    <AboutSection id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <AboutGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AboutContent variants={itemVariants}>
            <AboutText>
              <h3>Full Stack Developer</h3>
              <p>
                I'm a passionate Full Stack Developer with a strong foundation in web technologies
                and a keen eye for creating elegant solutions. With expertise in both frontend and
                backend development, I strive to build applications that are not only functional
                but also provide an exceptional user experience.
              </p>
              <p>
                My journey in web development started with a curiosity for creating things that
                live on the internet. This curiosity has evolved into a professional career where
                I continuously learn and adapt to new technologies and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing my knowledge through technical writing.
              </p>
            </AboutText>
            <StatsContainer>
              <StatItem>
                <StatNumber>2+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>7+</StatNumber>
                <StatLabel>Projects Completed</StatLabel>
              </StatItem>
             
            </StatsContainer>
          </AboutContent>

          <ServicesGrid variants={itemVariants}>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                as={motion.div}
                whileHover={{ y: -10 }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </AboutGrid>
      </div>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme['--light-bg']};
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: ${props => props.theme['--primary']};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${props => props.theme['--dark-text']};
    margin-bottom: 1rem;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: ${props => props.theme['--card-bg']};
  border-radius: 15px;
  box-shadow: ${props => props.theme['--card-shadow']};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme['--primary']};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme['--dark-text']};
  opacity: 0.8;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const ServiceCard = styled.div`
  padding: 2rem;
  background: ${props => props.theme['--card-bg']};
  border-radius: 15px;
  box-shadow: ${props => props.theme['--card-shadow']};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme['--primary']};
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme['--dark-text']};
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${props => props.theme['--dark-text']};
  opacity: 0.8;
`;

export default About; 