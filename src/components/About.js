import React from 'react';
import styled from 'styled-components';
import Timeline from './Timeline';

const AboutContainer = styled.div`
  padding: 2rem;
`;

const events = [
  { date: '2024', title: 'Education', description: 'Job Description' },
  { date: '2023', title: 'Work', description: 'Project Description' },
  { date: '2022', title: 'Current', description: 'Another Description' },
  // Add more events here...
];

function About() {
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <p>Write a brief description about yourself here.</p>
      <h2>Timeline of Events</h2>
      <Timeline events={events} />
    </AboutContainer>
  );
}

export default About;