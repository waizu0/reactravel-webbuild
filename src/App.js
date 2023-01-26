import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Destinations from './components/destinations/Destinations'
import Search from './components/search/search'
import './index.css'
import Selects from './components/selects/Selects'

function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Destinations />
    <Search />
    <Selects />
    </div>
  );
}

export default App;
