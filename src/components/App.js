import React, { Component } from 'react';
import '../styles/App.css';
import EarthquakeList from './EarthquakeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">
            Earthquakes!
          </div>
          <EarthquakeList />
        </div>
      </div>
    );
  }
}

export default App;
