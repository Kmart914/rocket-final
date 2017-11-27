import React, { Component } from 'react';
import Nav from './components/Nav';
import Bod from './components/Bod';
import Testfrontend from './components/Testfrontend';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Bod />
      </div>
    );
  }
}

export default App;
