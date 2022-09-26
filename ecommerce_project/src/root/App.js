import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Dashboard from "./Dashboard";
import Home from "../pages/Home/Home";
import "../App.css"

const App = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname !== "/signUp" && pathname !== "/signIn" ? <Header /> : <div />}
      <Dashboard />
      {pathname !== "/signUp" && pathname !== "/signIn" ? <Footer /> : <div />}
    <Home/>
    </div>
  );
};

export default App;
