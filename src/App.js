import React, { Component } from 'react';
import TopNav from './components/view/topNav/top-nav'
import './App.css';
import Router from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Router />
      </div>
    );
  }
}

export default App;
