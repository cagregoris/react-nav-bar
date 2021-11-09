import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/public pages/Home';
import BookingGroup from './components/public pages/BookingGroup';
import About from './components/public pages/About';
import BookingIndividual from './components/public pages/BookingIndividual';
import ContactEmail from './components/public pages/ContactEmail';
import ContactVolunteer from './components/public pages/ContactVolunteer';
import GuestComments from './components/public pages/GuestComments';
import ToursGroup from './components/public pages/ToursGroup';
import ToursHeritage from './components/public pages/ToursHeritage';
import ToursMountain from './components/public pages/ToursMountain';
import Login from './components/public pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' exact element={<Home/>} />
        <Route path = '/about' exact element={<About/>} />
        <Route path = '/group-booking' exact element={<BookingGroup/>} />
        <Route path = '/individual-booking' exact element={<BookingIndividual/>} />
        <Route path = '/contact-email' exact element={<ContactEmail/>} />
        <Route path = '/contact-volunteer' exact element={<ContactVolunteer/>} />
        <Route path = '/guest-comments' exact element={<GuestComments/>} />
        <Route path = '/tours-group' exact element={<ToursGroup/>} />
        <Route path = '/tours-heritage' exact element={<ToursHeritage/>} />
        <Route path = '/tours-mountain' exact element={<ToursMountain/>} />
        <Route path = '/login' exact element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
