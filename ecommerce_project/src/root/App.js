import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Dashboard from "./Dashboard";
import "../App.css"
import ScrollToTop from "../pages/ScroolToTop/ScrollToTop";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <ScrollToTop />
      {pathname !== "/signUp" && pathname !== "/signIn"  && pathname !== "/forgotPassword" && pathname !== "/resetPassword"  ? <Header /> : <div />}
      <Dashboard />
      {pathname !== "/signUp" && pathname !== "/signIn" && pathname !== "/forgotPassword" && pathname !== "/resetPassword"  ? <Footer /> : <div />}

    </div>
  );
};

export default App;
