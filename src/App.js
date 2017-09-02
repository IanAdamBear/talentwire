import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import TopMenu from './components/TopMenu/TopMenu';
import SideMenu from './components/SideMenu/SideMenu';
import Candidates from './components/Candidates/Candidates';
import Skills from './components/Skills/Skills';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <SideMenu />

        <Link to="/candidates">Candidates Link</Link>
        <Link to="/skills">Skills Link</Link>

        <Switch>
          <Route path="/candidates" component={Candidates} />
          <Route path="/skills" component={Skills} />
        </Switch>
      </div>

    );
  }
}

export default App;
