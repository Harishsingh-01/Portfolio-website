import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { emailConfig } from '../../config/emailConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        formData,
        emailConfig.publicKey
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <ContactSection id="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <ContactContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ContactInfo>
            <motion.div variants={itemVariants}>
              <InfoCard>
                <InfoIcon>
                  <FaEnvelope />
                </InfoIcon>
                <InfoContent>
                  <h3>Email</h3>
                  <p>harishsingh@gmail.com</p>
                </InfoContent>
              </InfoCard>
            </motion.div>
            <motion.div variants={itemVariants}>
              <InfoCard>
                <InfoIcon>
                  <FaMapMarkerAlt />
                </InfoIcon>
                <InfoContent>
                  <h3>Location</h3>
                  <p>Mathura, India</p>
                </InfoContent>
              </InfoCard>
            </motion.div>
            
            <SocialLinks>
              <motion.div variants={itemVariants}>
                <SocialLink href="https://github.com/Harishsingh-01" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </SocialLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <SocialLink href="https://linkedin.com/in/harish--singh" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </SocialLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <SocialLink href="https://twitter.com/harishsingh01" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </SocialLink>
              </motion.div>
            </SocialLinks>
          </ContactInfo>

          <ContactForm
            as={motion.form}
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </FormGroup>
            <Input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                <LoadingSpinner />
              ) : submitStatus === 'success' ? (
                'Message Sent!'
              ) : submitStatus === 'error' ? (
                'Error! Try Again'
              ) : (
                'Send Message'
              )}
            </SubmitButton>
          </ContactForm>
        </ContactContainer>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme['--light-bg']};
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: ${props => props.theme['--card-bg']};
  border-radius: 10px;
  box-shadow: ${props => props.theme['--card-shadow']};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme['--primary']};
  background: ${props => props.theme['--gradient']};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const InfoContent = styled.div`
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    color: ${props => props.theme['--dark-text']};
  }

  p {
    font-size: 0.9rem;
    color: ${props => props.theme['--muted']};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: ${props => props.theme['--primary']};
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme['--secondary']};
    transform: translateY(-3px);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background: ${props => props.theme['--card-bg']};
  border-radius: 15px;
  box-shadow: ${props => props.theme['--card-shadow']};
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid ${props => props.theme['--border']};
  border-radius: 8px;
  background: transparent;
  color: ${props => props.theme['--dark-text']};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme['--primary']};
    box-shadow: 0 0 0 3px ${props => props.theme['--primary']}20;
  }

  &::placeholder {
    color: ${props => props.theme['--muted']};
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid ${props => props.theme['--border']};
  border-radius: 8px;
  background: transparent;
  color: ${props => props.theme['--dark-text']};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme['--primary']};
    box-shadow: 0 0 0 3px ${props => props.theme['--primary']}20;
  }

  &::placeholder {
    color: ${props => props.theme['--muted']};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  background: ${props => props.theme['--gradient']};
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Contact;
