import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-weight: 300;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BentoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: center;
`;

const BentoItem = styled.a`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  flex: 1 1 200px;
  max-width: 300px;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
    color: #2c3e50;
    font-weight: 700;
  }

  p {
    color: #34495e;
  }
`;

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Rcok Paper Scissor Game',
      description: 'Basic HTML, CSS and Javascript',
      github: 'https://github.com/KanmaniAshok-QA/JS-RockGame'
    },
    {
      id: 2,
      title: 'Portfolio website',
      description: 'Built my own portfolio website using React',
      github: 'https://github.com/KanmaniAshok-QA/my-portfolio'
    }
    // Add more projects as needed
  ];

  return (
    <ProjectsContainer>
      <Title>My Projects</Title>
      <BentoBox>
        {projects.map(project => (
          <BentoItem key={project.id} href={project.github} target="_blank" rel="noopener noreferrer">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </BentoItem>
        ))}
      </BentoBox>
    </ProjectsContainer>
  );
}

export default Projects;
