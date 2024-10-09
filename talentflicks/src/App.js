import React from "react";
import HomePage from "./Assets/HomePage/HomePage";
import Guidelines from "./Assets/Guidelines/Guidelines";
import AboutUs from "./Assets/AboutsUs/AboutUs";
import Profile from "./Assets/Profile/Profile";
import Register from "./Assets/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const HomePage = lazy(() => import("./Assets/HomePage/HomePage"));
// const Guidelines = lazy(() => import("./Assets/Guidelines/Guidelines"));
// const AboutUs = lazy(() => import("./Assets/AboutsUs/AboutUs"));
// const Profile = lazy(() => import("./Assets/Profile/Profile"));
// const Register = lazy(() => import("./Assets/Register/Register"));

function App() {
  return (
    <div className="talentflicks">
      <Router>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guide" element={<Guidelines />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* </Suspense> */}
      </Router>
    </div>
  );
}

export default App;
