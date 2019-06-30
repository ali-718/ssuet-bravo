import React from 'react';
import ali from './logo.svg';
import './App.css';
import Header from './components/header';
import {Veiw,Paragraph} from './components/Veiw';
import Functional from './components/Functional';
import State from './components/State'
import Card from './components/Card';

function App() {
  return (
    <div>
    {/* <Header />
    <Veiw />
    <Paragraph />
    <Functional />
    <State /> */}
    <Card />
    </div>
  );
}


export default App;
