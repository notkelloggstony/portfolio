import './App.css';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post2 from './components/Post2';
import Post1 from './components/Post1';
// import Post3 from './components/Post3';
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
        <Route path="/ignite-ux-2021" component={() => { window.location.href = "https://youtu.be/QH7oj_FTiCA"; return null; }} />
        <Route path="/p/shift-scheduler" component={Post1} />
        <Route path="/p/factory-status-boards" component={Post2} />
        {/* <Route path="/p/hmi-user-management" component={Post0} /> */}
        {/* <Route path="/p/digital-advertising-client-portal" component={Post0} /> */}
    </Switch>

    </div>
  );
}

export default App;
