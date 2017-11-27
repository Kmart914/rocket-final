import React, { Component } from 'react';
import Nav from './components/Nav';
import testfrontend './components/testfrontend';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <testfrontend />
      </div>
    );
  }
}

export default App;
