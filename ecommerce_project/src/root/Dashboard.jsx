import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/LogIn/SignIn";
import SignUp from "../pages/LogIn/SignUp";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Shop from "../pages/Shop/Shop";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";

const Dashboard = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
