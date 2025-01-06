import React from "react";
import HomePage from "./Assets/HomePage/HomePage";
import Guidelines from "./Assets/Guidelines/Guidelines";
import AboutUs from "./Assets/AboutsUs/AboutUs";
import Profile from "./Assets/Profile/Profile";
import Register from "./Assets/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Assets/Common/Login";
import Account from "./Assets/Common/Account";
import SignUp from "./Assets/Common/SignUp";

function App() {
  return (
    <div className="talentflicks">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guide" element={<Guidelines />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/account" element={<Account />}/>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
