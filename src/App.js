import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Weather from './Weather/Weather';
import './App.css';

class App extends Component {
  render() {
    return (<Router className="App">
      <Route path="/weather" component={Weather} />
    </Router>);
  }
}

export default App;
