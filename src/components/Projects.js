import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
`;

const ProjectCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
`;

function Projects() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of project 1' },
    { id: 2, title: 'Project 2', description: 'Description of project 2' },
  ];

  return (
    <ProjectsContainer>
      <h2>My Projects</h2>
      {projects.map(project => (
        <ProjectCard key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
}

export default Projects;