import '../App.css';
import SignUp from '../Screens/SignUp';
import SignIn from '../Screens/SignIn';
import AddressScreen from '../Screens/AddressScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import ReviewScreen from '../Screens/ReviewScreen';
import ForgetPasswordScreen from '../Screens/ForgetPasswordScreen';
import CheckoutScreen from '../Screens/CheckoutScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import OmrScreen from '../Screens/OmrScreen';
import React, { Component, Suspense } from 'react';
import {Routes, Route, BrowserRouter as Routers} from 'react-router-dom';

export default function AppNavigation() {
return (
    <Routers>
      <Routes>
        <Route exact path="/" element={<DashboardScreen />}/>
        <Route  path="/SignIn" element={<SignIn />}/>
        <Route  path="/SignUp" element={<SignUp />}/>
        <Route  path="/Address" element={<AddressScreen />}/>
        <Route  path="/Payment" element={<PaymentScreen />}/>
        <Route  path="/Review" element={<ReviewScreen />}/>
        <Route  path="/ForgetPassword" element={<ForgetPasswordScreen />}/> 
        <Route  path="/Checkout" element={<CheckoutScreen/>}/>
        <Route  path="/Dashboard" element={<DashboardScreen/>}/>
        <Route  path="/omr" element={<OmrScreen/>}/>
      </Routes>
    </Routers>
  );
}

//export default AppNavigation;
