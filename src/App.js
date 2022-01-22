import React, { Component } from 'react';
import Nav from './components/Nav';
import About from "./components/About";
import Logo from './components/Logo';
import Card from './components/Card';



import { StyleRoot } from "radium";



class App extends Component {
  render() {
    return (
      <styleRoot>
      <div>
        <Nav />
        <About />
        <Logo />
        <Card />
       
      </div>
      </styleRoot>
    )
  }
}

export default App;