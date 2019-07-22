import React from 'react';
import ali from './logo.svg';
import './App.css';
import Header from './components/header';
import {Veiw,Paragraph} from './components/Veiw';
import Functional from './components/Functional';
import State from './components/State'
import Card from './components/Card';
import Conditional from './components/Conditional';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/screens/Home';
import About from './components/screens/About';
import Name from './components/screens/Name';
import {Provider} from 'react-redux';
import store from './store';
import Main from './test/main';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/about/name" component={Name} />
        </Switch>
      </Router>
    </Provider>
    // <Main />
  );
}


export default App;
