import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components'

// Component imports
import About from './about/About';
import Header from './header/Header';
import Footer from './footer/Footer';

function App() {
  return (
    <Router>
      <StyledApp>
        <Header />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <h1>Hello World</h1>
          </Route>
        </Switch>
        <Footer />
      </StyledApp>
    </Router>
  );
}

export default App;

const StyledApp = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;