import './App.css';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import logo from './logo.svg';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

function App() {
  return (
    <div className="app">
      <div>
        <nav id="navigation" className="noselect">
          <img src={logo} className="app-logo" alt="logo" />
          <ul id="navigation-links" className="navigation-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ul id="navigation-icons" className="navigation-list">
            <li title="View on GitHub">
              <a href="https://github.com/notkelloggstony/ta-studio" target="_blank" rel="noreferrer">
                <Icon className=".navigation-icon" path={mdiGithub} size="24px" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
    </Switch>
    </div>
  );
}

export default App;
