import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat'

import HelloWorld from './HelloWorld';
import TodoList from './TodoList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld name='kiwi~'/>
        <Chat></Chat>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
