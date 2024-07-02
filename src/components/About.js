import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
`;

function About() {
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <p>Write a brief description about yourself here.</p>
    </AboutContainer>
  );
}

export default About;