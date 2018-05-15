import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppGrid from '../AppGrid/AppGrid';

class App extends Component {
  state = {
    selectedIndex: 0,
  };

  render() {
    return (
      <BrowserRouter>
        <AppGrid />
      </BrowserRouter>
    );
  }
}

export default App;
