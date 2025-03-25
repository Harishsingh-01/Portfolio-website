import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import cert1 from '../../assets/Certificates/cert1.jpg';
import cert2 from '../../assets/Certificates/cert2.jpg';

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCertificates();
  }, []);

  useEffect(() => {
    if (certificates.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [certificates]);

  const fetchCertificates = async () => {
    try {
      const certificateData = [
        {
          id: 1,
          image: cert1,
          title: "Digital Marketing Certificate",
          description: "Digital Marketing Certification",
          date: "2025-03-25",
        },
        {
          id: 2,
          image: cert2,
          title: "IT Team Certificate",
          description: "IT Team Certification",
          date: "2025-01-16",
        }
      ];

      // Debug logs
      console.log("Certificate data:", certificateData);
      
      // Test image loading
      certificateData.forEach(cert => {
        console.log(`Attempting to load image: ${cert.image}`);
        const img = new Image();
        img.onload = () => console.log(`Successfully loaded: ${cert.image}`);
        img.onerror = () => console.error(`Failed to load: ${cert.image}`);
        img.src = cert.image;
      });

      setCertificates(certificateData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error in fetchCertificates:", error);
      setIsLoading(false);
    }
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleImageClick = (image) => {
    window.open(image, "_blank");
  };

  if (isLoading) {
    return <LoadingSection>Loading certificates...</LoadingSection>;
  }

  return (
    <CertificatesSection id="certificates">
      <h1>Certificates & Achievements</h1>
      <SliderContainer>
        <SliderButton 
          onClick={prevSlide} 
          position="left"
          aria-label="Previous certificate"
        >
          <FaChevronLeft />
        </SliderButton>

        <SliderContent>
          {certificates.map((cert, index) => (
            <Slide
              key={cert.id}
              isActive={index === currentSlide}
              onClick={() => handleImageClick(cert.image)}
            >
              <CertificateImage src={cert.image} alt={cert.title} />
              <CertificateInfo>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
                <span>{cert.date}</span>
              </CertificateInfo>
            </Slide>
          ))}
        </SliderContent>

        <SliderButton 
          onClick={nextSlide} 
          position="right"
          aria-label="Next certificate"
        >
          <FaChevronRight />
        </SliderButton>

        <SliderDots>
          {certificates.map((_, index) => (
            <Dot 
              key={index} 
              active={index === currentSlide} 
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide(index);
              }} 
            />
          ))}
        </SliderDots>
      </SliderContainer>
    </CertificatesSection>
  );
};

// Updated styled components
const CertificatesSection = styled.section`
  padding: 5rem 10%;
  background: var(--background);
  
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

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
`;

const SliderContent = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  cursor: pointer;
`;

const CertificateImage = styled.img`
  width: 100%;
  height: calc(100% - 70px);
  object-fit: contain;
  padding: 20px;
`;

const CertificateInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: rgba(0,0,0,0.8);
  color: white;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin-bottom: 0.3rem;
    color: var(--primary);
    font-size: 1.1rem;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }

  span {
    font-size: 0.8rem;
    color: var(--primary);
  }
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => props.position}: 20px;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  z-index: 10;

  &:hover {
    background: var(--primary);
  }
`;

const SliderDots = styled.div`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "var(--primary)" : "rgba(255,255,255,0.5)")};
  cursor: pointer;
  transition: background 0.3s ease;
`;

export default Certificates;
