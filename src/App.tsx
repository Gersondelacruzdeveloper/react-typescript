import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NestingComponent from './components/NestingComponent'

function App() {
  return (
    <div className="App">
      <NestingComponent/>
    </div>
  );
}

export default App;
