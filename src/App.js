import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import Weather from './Weather/Weather';
import './App.css';

class App extends Component {
  render() {
    return (<Router className="App">
      <div>
        <Link to="/weather">Weather</Link>
        <Route path="/weather" component={Weather} />
      </div>
    </Router>);
  }
}

export default App;
