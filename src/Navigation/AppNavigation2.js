import '../App.css';
import SignUp from '../Screens/SignUp';
import SignIn from '../Screens/SignIn';
import ForgetPasswordScreen from '../Screens/ForgetPasswordScreen';
import React, { Component, Suspense } from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';

function AppNavigation() {
return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignIn />}/>
        <Route exact path="/SignIn" element={<SignIn />}/>
        <Route exact path="/SignUp" element={<SignUp />}/>
        <Route exact path="/ForgetPassword" element={<ForgetPasswordScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppNavigation;
