import React, { Component } from 'react';
import AppGrid from '../AppGrid/AppGrid';
import Footer from "../Navbar/Navbar";


class App extends Component {
  state = {
    selectedIndex: 0,
  };

  render() {
    return (
      <AppGrid />
    );
  }
}

export default App;
