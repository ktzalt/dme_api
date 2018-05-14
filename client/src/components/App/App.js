import React, { Component } from 'react';

import './App.css';
import MainGrid from '../AppPaper/AppPaper';
import Footer from "../Navbar/Navbar";


class App extends Component {
  state = {
    selectedIndex: 0,
  };

  render() {
    return (
      <MainGrid />
    );
  }
}

export default App;
