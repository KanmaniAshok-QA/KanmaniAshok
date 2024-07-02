import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

function Home() {
  return (
    <HomeContainer>
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm Kanmani. I'm a Software Engineer.</p>
    </HomeContainer>
  );
}

export default Home;