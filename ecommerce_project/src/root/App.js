import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Dashboard from "./Dashboard";
import "../App.css"
// import NewPage from "../pages/newPage/NewPage";


const App = () => {
  const { pathname } = useLocation();
  return (
    <div>


      {pathname !== "/signUp" && pathname !== "/signIn" && pathname !== "/forgotPassword" && pathname !== "/resetPassword" && pathname !== "/newPage" ?  <Header /> : <div />}
      <Dashboard />
      {pathname !== "/signUp" && pathname !== "/signIn" && pathname !== "/forgotPassword" && pathname !== "/resetPassword" && pathname !== "/newPage" ? <Footer /> : <div />}

    </div>
  );
};

export default App;
