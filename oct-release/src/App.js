import React, { Component } from 'react';
import './App.css';
import MemoComponent from './components/MemoComponent/MemoComponentContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MemoComponent />
      </div>
    );
  }
}

export default App;
