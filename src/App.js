import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/navbar'
import Header from './Component/Header/header'
import Cards from './Component/cards/cards'

function App() {
  return (
    <div className='container-fluid'>

    <Navbar />
    <Header />
    <Cards />
    
    </div>   
  );
}

export default App;
