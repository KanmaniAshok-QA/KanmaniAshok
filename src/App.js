import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #A7D489;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const MainContent = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  background-color: #A7D489;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header>
          <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
          </Nav>
        </Header>
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainContent>
        <Footer>
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </Footer>
      </AppContainer>
    </Router>
  );
}

export default App;