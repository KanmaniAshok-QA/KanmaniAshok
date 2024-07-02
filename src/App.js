import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import LeftPane from './components/LeftPane';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

const AppContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  margin-left: 250px;
  width: calc(100% - 250px);
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <LeftPane />
        <MainContent>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;