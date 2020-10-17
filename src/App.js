import React, { Component } from 'react';
import AppBar from './Components/Navbar/Navbar';
import MuithemeProvider from "material-ui/styles/MuiThemeProvider";
import DropDown from './Components/Select/Select';
// import Main from './Components/Main/Main';

import './App.css';


class App extends Component {

  render() {
    return (
        <MuithemeProvider>
          <div>
          <AppBar />
          <br />
          <DropDown />
          </div>
        </MuithemeProvider>
    );
  }
}

export default App;
