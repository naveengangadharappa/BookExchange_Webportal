import './App.css';
import SignIn from './Screens/SignIn';
import React, { Component, Suspense } from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Auth_routes from "./Navigation/Auth_Rout";
import AppNavigation from './Navigation/AppNavigation';


function App() {
  return <AppNavigation/>
}

export default App;
