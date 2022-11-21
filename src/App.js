import { useState } from 'react';
import { leadsqrDB } from "./components/leadsqrDB";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User';
import Userdetails from './pages/Userdetails';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Button, Text, Alert } from 'react-bootstrap';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./assets/styles/main.scss";
import Dashboard from './pages/Dashboard';
// import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path='/'>
            <Route index element={<Login />} />
            <Route path='Dashboard' element={<Dashboard />} />
            <Route path='user'>
                <Route index element={<User />} />
                <Route path='Userdetails' element={<Userdetails />} />
            </Route>
          </Route>
          
        </Routes>
      </Router>


    </div>
  );
}

export default App;
