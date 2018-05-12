import React, { Component } from 'react';
import './App.css';
import Footer from "../Footer/Footer"


class App extends Component {
  state = {
    selectedIndex: 0,
  };

  render() {
    return (
      <div id="app">
        <div id="thing"></div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
