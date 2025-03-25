import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_owyhd7i",
        "template_296i3pg",
        formData,
        "EALWuk1xC-jLxeAw5"
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setSending(false);
        },
        (error) => {
          alert("Failed to send message, please try again!");
          setSending(false);
        }
      );
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactHeader>
          <h2>Contact Me</h2>
          <p>Feel free to reach out to me for any questions or opportunities!</p>
        </ContactHeader>

        <ContactForm onSubmit={handleSubmit}>
          <InputGroup>
            <InputWrapper>
              <InputIcon>
                <FaUser />
              </InputIcon>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </InputWrapper>

            <InputWrapper>
              <InputIcon>
                <FaEnvelope />
              </InputIcon>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputWrapper>
          </InputGroup>

          <TextAreaWrapper>
            <TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </TextAreaWrapper>

          <SubmitButton type="submit" disabled={sending}>
            {sending ? (
              "Sending..."
            ) : (
              <>
                Send Message <FaPaperPlane />
              </>
            )}
          </SubmitButton>
        </ContactForm>

        <ContactInfo>
          <InfoItem>
            <h3>My Email</h3>
            <p>harishchaudhary790@gmail.com</p>
          </InfoItem>
          <InfoItem>
            <h3>Location</h3>
            <p>Uttar Pradesh, India</p>
          </InfoItem>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 5rem 10%;
  background: var(--background);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text);
    opacity: 0.8;
  }
`;

const ContactForm = styled.form`
  background: var(--secondary);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  color: var(--primary);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  padding-left: 3rem;
  border: 2px solid transparent;
  border-radius: 8px;
  background: var(--background);
  color: var(--text);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: var(--primary);
    outline: none;
  }

  &::placeholder {
    color: var(--text);
    opacity: 0.5;
  }
`;

const TextAreaWrapper = styled.div`
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 8px;
  background: var(--background);
  color: var(--text);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    border-color: var(--primary);
    outline: none;
  }

  &::placeholder {
    color: var(--text);
    opacity: 0.5;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: var(--primary);
  color: var(--background);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const InfoItem = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--secondary);
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: var(--primary);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text);
    opacity: 0.8;
  }
`;

export default Contact;
