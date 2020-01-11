import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './about/About';
import Header from './header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <h1>Hello World</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
