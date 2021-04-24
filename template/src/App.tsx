import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center text-white bg-coolGray-800 text-3xl">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="text-blue-200" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
