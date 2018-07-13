import React, { Component } from 'react';
import './App.css';
import UserBox from './containers/userBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Manager Users</h1>
        </header>
        <UserBox />
      </div>
    );
  }
}

export default App;
