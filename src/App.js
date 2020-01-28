import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// Component imports
import About from './components/about/About';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Calculator from './components/calculator/Calculator';

function App() {
  return (
    <Router>
      <StyledApp>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Calculator />
          </Route>
        </Switch>
        <Footer />
      </StyledApp>
    </Router>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
