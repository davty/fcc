import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route, Link
} from 'react-router-dom'
import Weather from './Weather/Weather';
import Wiki from './Wiki/Wiki';
import Twitch from './Twitch/Twitch';
import './App.css';

class App extends Component {
  render() {
    return (
    <Router className="App">
      <div>
        <ul className="widgets">
          <li><Link to="/weather">Weather</Link></li>
          <li><Link to="/wiki">Wiki</Link></li>
          <li><Link to="/twitch">Twitch</Link></li>
        </ul>
        <Route path="/weather" component={Weather} />
        <Route path="/wiki" component={Wiki} />
        <Route path="/twitch" component={Twitch} />
      </div>
    </Router>);
  }
}

export default App;
