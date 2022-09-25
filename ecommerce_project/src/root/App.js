import React from "react";
import "./App.css";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Dashboard from "./Dashboard";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname !== "/signIn" && "/signUp" ? <Header /> : <div />}
      <Dashboard />
      {pathname !== "/signIn" && "/signIn" ? <Footer /> : <div />}
    </div>
  );
};

export default App;
