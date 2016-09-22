import React from 'react';
import Map from '../components/Map';
import Navbar from '../components/Navbar';

const App = ({ children }) => (
  <div>
    <Navbar />
    <Map />
    { children }
  </div>
)

export default App;
