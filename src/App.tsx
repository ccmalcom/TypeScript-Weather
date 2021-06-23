import React from 'react';
import './App.css';
import CurrentWeather from './components/Geolocation/DisplayClass' 


const App: React.FunctionComponent=()=> {
  return (
    <div className="App">
      <CurrentWeather />
    </div>
  );
}

export default App;
