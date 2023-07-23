import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import Mountains from './components/Mountains';
import axios from 'axios';
import Instructors from './components/Instructors';
import Equipments from './components/Equipments';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';

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

        <Route
        path="userLogin"
        element={<UserLogin/>}/>

        <Route
        path="userRegister"
        element={<UserRegister/>}/>
      
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
