import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    /**
     * Setting up different types.
     */ 
    // let firstValue: string = 'Manny';
    // let firstValue: number = 34;
    // let firstValue: boolean = true;
    // let firstValue: number[] = [2, 3, 56];
    let firstValue: Array<string> = ['2', '3', 'Manny'];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The value {firstValue} is of { typeof firstValue} type!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

export default App;
