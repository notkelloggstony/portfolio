import './App.css';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project1 from './components/Project1';
// import Project2 from './components/Project2';
// import Project3 from './components/Project3';
// import logo from './logo.svg';

function App() {
  return (
    <div className="app">
        <nav id="nav" className="noselect">
          {/* <img src={logo} className="app-logo" alt="logo" /> */}
          <ul className="nav-list">
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li> */}
          </ul>
        </nav>

      {/* Routing */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects/factory-status-boards" component={Project1} />
        {/* <Route path="/projects/hmi-user-management" component={Project2} /> */}
        {/* <Route path="/projects/digital-advertising-client-portal" component={Project3} /> */}
    </Switch>

    </div>
  );
}

export default App;
