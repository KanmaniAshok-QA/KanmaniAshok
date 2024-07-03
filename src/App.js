import React, { useState } from 'react';
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
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
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

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

function App() {

const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};


return (
    <Router>
      <AppContainer>
      <Header>
          <HamburgerButton onClick={toggleMenu}>☰</HamburgerButton>
          <Nav isOpen={isMenuOpen}>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
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
          <p>&copy; 2024 Kanmani Ashok</p>
        </Footer>
      </AppContainer>
    </Router>
  );
}

export default App;