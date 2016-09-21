import React from 'react';
import Map from '../components/Map';

const App = ({ children }) => (
  <div>
    <h1>Art Official</h1>
    <Map />
    { children }
  </div>
)

export default App;
