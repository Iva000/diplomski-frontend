import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import Mountains from './components/Mountains';
import axios from 'axios';
import Instructors from './components/Instructors';
import Equipments from './components/Equipments';

function App() {

  return (
    <div className="App">
      <BrowserRouter className="App">
      <NavBar/>
      <Routes>
        <Route
        path='/'
        element={<Home/>}
        />

        <Route
        path="mountains"
        element={<Mountains/>}
        />

        <Route
        path="instructors"
        element={<Instructors/>}/>

        <Route
        path="equipments"
        element={<Equipments/>}/>
      
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
