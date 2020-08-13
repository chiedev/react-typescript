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
    // let firstValue: Array<string> = ['2', '3', 'Manny'];

    /**
     * tuple - a type of array that you can insert multiple types.
     */
    let aTuple: [string, number] = ['Manny', 34]
    /**
     * enum - similar to object.
     */
    enum Codes {first = 1, second = 2};
    /**
     * any -if you're not sure what the type would/should be, use 'any'.
     * but be careful, because if you use this eventually your code is going to be unsecure and will accept all types of data and defeat the purpose of typescript.
     * 
     * This is good if you just wanna prototype something.
     */
    let firstName: any = 'Manny';
    /**
     * void
     */
    const warning = (): void => { 
      console.log ('Warning');
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* The value {firstValue} is of { typeof firstValue} type! */}
            {/* The value {aTuple[0]} is of { typeof aTuple[0]} type! */}
            The value {firstName} is of { typeof firstName} type!
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
