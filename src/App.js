import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css'
import Main from './components/main/container';
import { generateData } from './lib/data';
class App extends Component {
  render() {
    console.log(generateData(2))
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
