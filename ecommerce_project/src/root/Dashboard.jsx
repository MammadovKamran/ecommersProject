import React from "react";
import { Routes, Route , Switch } from "react-router-dom";
import SignIn from "../pages/LogIn/SignIn";
import SignUp from "../pages/LogIn/SignUp";
import Home from "../pages/Home/Home"
import Contact from "../pages/Contact/Contact";
import Shop from "../pages/Shop/Shop";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import ForgotPassword from "../pages/LogIn/ForgotPassword";
import ResetPassword from "../pages/LogIn/ResetPassword";
import WhishList from "../pages/WhishList/WhishList";
import Error from "../pages/Error/Error";
import NewPage from "../pages/newPage/NewPage";
import ScrollToTop from "../pages/ScroolToTop/ScrollToTop";


const Dashboard = () => {
  return (
    <div>
      
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/whishList" element={<WhishList />} />
        <Route path="*" element={<Error />} />
        <Route path="/newPage" element={<NewPage/>} />
      </Routes>
    </div>
  );
};

export default Dashboard;
