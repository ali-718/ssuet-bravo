import React from 'react';
import ali from './logo.svg';
import './App.css';
import Header from './components/header';
import {Veiw,Paragraph} from './components/Veiw';
import Functional from './components/Functional';
import State from './components/State'

function App() {
  return (
    <div>
    <Header />
    <Veiw />
    <Paragraph />
    <Functional />
    <State />
    </div>
  );
}


export default App;
