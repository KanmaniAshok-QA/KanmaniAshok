// components/HeroSection.js

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #FFFFFF;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled(motion.h1)`
  font-weight: 300;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-weight: 300;
  color: #34495e;
  margin-bottom: 2rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Kanmani Ashok
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        QA Engineer
      </Subtitle>
      <Subtitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        With 8 years of experience, I specialise in assuring software quality through functional, performance testing and automation.
      </Subtitle>
    </HeroContainer>
  );
};

export default HeroSection;
