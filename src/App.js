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
import InstructorRegister from './components/InstructorRegister';
import InstructorLogin from './components/InstructorLogin';
import Schedule from './components/Schedule';
import AddPeriod from './components/AddPeriod';
import InstructorClasses from './components/InstructorClasses';
import Cart from './components/Cart';
import MyReservations from './components/MyReservations';
import ClassReservations from './components/ClassReservations';
import UserEditProfile from './components/UserEditProfile';
import InstructorEditProfile from './components/InstructorEditProfile';

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
        path="instructors/:fromMountain"
        element={<Instructors flag={1}/>}/>

        <Route
        path="equipments"
        element={<Equipments/>}/>

        <Route
        path="userLogin"
        element={<UserLogin/>}/>

        <Route
        path="userRegister"
        element={<UserRegister/>}/>

        <Route
        path="instructorRegister"
        element={<InstructorRegister/>}/>

        <Route
        path="instructorLogin"
        element={<InstructorLogin/>}/>

        <Route
        path="requests/:fromMountain"
        element={<Instructors flag={0}/>}/>

        <Route
        path="schedule"
        element={<Schedule/>}/>

        <Route
        path="addPeriod"
        element={<AddPeriod/>}/>

        <Route
        path="instructorClasses/:id"
        element={<InstructorClasses/>}/>
      
        <Route
        path="cart"
        element={<Cart/>}/>

        <Route
        path="myReservations"
        element={<MyReservations/>}/>

        <Route
        path="classReservations"
        element={<ClassReservations/>}/>

        <Route
        path="userEditProfile"
        element={<UserEditProfile/>}/>

        <Route
        path="instructorEditProfile"
        element={<InstructorEditProfile/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
