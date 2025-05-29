import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaCalendarAlt, FaCode, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import cert1 from '../../assets/Certificates/cert1.jpg';
import cert2 from '../../assets/Certificates/cert2.jpg';
import cert3 from '../../assets/Certificates/cert3.png';
import cert4 from '../../assets/Certificates/cert4.png';
import cert5 from '../../assets/Certificates/cert5.jpg';
import cert6 from '../../assets/Certificates/cert6.jpg';
import cert7 from '../../assets/Certificates/cert7.png';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const certificates = [
    {
      title: "Digital Marketing Certificate",
      issuer: "Udemy",
      date: "2025-03-25",
      image: cert1,
      link: "#",
      skills: ["Digital Marketing", "SEO", "Social Media"],
      description: "Comprehensive digital marketing certification covering modern marketing strategies and tools."
    },
    {
      title: "IT Team Certificate in Mahakumbh 2025",
      issuer: "Mahakumbh 2025",
      date: "2025-01-16",
      image: cert2,
      link: "#",
      skills: ["Team Management", "IT Operations", "Project Management"],
      description: "Professional certification in IT team management and operations."
    },
    {
      title: "AI-ML Certificate",
      issuer: "GLA University",
      date: "2025-01-10",
      image: cert3,
      link: "#",
      skills: ["Machine Learning", "Artificial Intelligence"],
      description: "certification in artificial intelligence and machine learning concepts."
    },
    {
      title: "Cloud Quest Internship",
      issuer: "Cloud Quest",
      date: "2025-01-5",
      image: cert4,
      link: "#",
      skills: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      description: "Hands-on internship certification in MERN stack development."
    },
    {
      title: "JAVA ITERATORS CODING CERTIFICATE",
      issuer: "GLA University",
      date: "2024-09-11",
      image: cert5,
      link: "#",
      skills: ["Java", "Data Structures", "Algorithms"],
      description: "Advanced Java programming certification focusing on iterators and data structures."
    },
    {
      title: "Hackvision Certificate",
      issuer: "GLA University",
      date: "2024-11-25",
      image: cert6,
      link: "#",
      skills: ["Problem Solving", "Coding", "Team Work"],
      description: "Achievement certificate for successful participation in Hackvision hackathon."
    },
    {
      title: "MongoDB Certificate",
      issuer: "MongoDB University",
      date: "2025-01-27",
      image: cert7,
      link: "#",
      skills: ["MongoDB", "Database Design", "NoSQL"],
      description: "Professional certification in MongoDB database management and design."
    }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      if (newIndex < 0) return certificates.length - 1;
      if (newIndex >= certificates.length) return 0;
      return newIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <CertificatesSection id="certificates">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>
        <SliderContainer>
          <NavigationButton 
            onClick={() => paginate(-1)}
            position="left"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft />
          </NavigationButton>

          <AnimatePresence initial={false} custom={direction}>
            <CertificateCard
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <CertificateImage onClick={() => window.open(certificates[currentIndex].image, '_blank')}>
                <img src={certificates[currentIndex].image} alt={certificates[currentIndex].title} />
                <CertificateOverlay>
                  <CertificateLink href={certificates[currentIndex].link} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                    <span>View Certificate</span>
                  </CertificateLink>
                </CertificateOverlay>
              </CertificateImage>
              <CertificateContent>
                <CertificateHeader>
                  <CertificateIcon>
                    <FaAward />
                  </CertificateIcon>
                  <CertificateTitle>{certificates[currentIndex].title}</CertificateTitle>
                </CertificateHeader>
                <CertificateInfo>
                  <InfoItem>
                    <FaCalendarAlt />
                    <span>{certificates[currentIndex].date}</span>
                  </InfoItem>
                  <InfoItem>
                    <FaCode />
                    <span>{certificates[currentIndex].issuer}</span>
                  </InfoItem>
                </CertificateInfo>
                <CertificateDescription>{certificates[currentIndex].description}</CertificateDescription>
                <SkillsContainer>
                  {certificates[currentIndex].skills.map((skill, idx) => (
                    <SkillTag key={idx}>{skill}</SkillTag>
                  ))}
                </SkillsContainer>
              </CertificateContent>
            </CertificateCard>
          </AnimatePresence>

          <NavigationButton 
            onClick={() => paginate(1)}
            position="right"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight />
          </NavigationButton>

          <PaginationDots>
            {certificates.map((_, index) => (
              <Dot 
                key={index}
                active={index === currentIndex}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </PaginationDots>
        </SliderContainer>
      </div>
    </CertificatesSection>
  );
};

const CertificatesSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme['--light-bg']};
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavigationButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  ${props => props.position}: 20px;
  transform: translateY(-50%);
  background: ${props => props.theme['--primary']};
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);

  &:hover {
    background: ${props => props.theme['--secondary']};
  }
`;

const CertificateCard = styled(motion.div)`
  position: absolute;
  width: 80%;
  max-width: 800px;
  background: ${props => props.theme['--card-bg']};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: ${props => props.theme['--card-shadow']};
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const CertificateImage = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${CertificateCard}:hover & img {
    transform: scale(1.1);
  }
`;

const CertificateOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CertificateCard}:hover & {
    opacity: 1;
  }
`;

const CertificateLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: scale(1.2);
  }
`;

const CertificateContent = styled.div`
  padding: 1.5rem;
`;

const CertificateHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CertificateIcon = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme['--primary']};
`;

const CertificateTitle = styled.h3`
  font-size: 1.3rem;
  color: ${props => props.theme['--dark-text']};
  margin: 0;
`;

const CertificateInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme['--muted']};
  font-size: 0.9rem;

  svg {
    font-size: 1rem;
  }
`;

const CertificateDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${props => props.theme['--dark-text']};
  margin-bottom: 1rem;
  opacity: 0.8;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  background: ${props => props.theme['--gradient']};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const PaginationDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? props.theme['--primary'] : 'rgba(0,0,0,0.2)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme['--primary']};
    transform: scale(1.2);
  }
`;

export default Certificates;
