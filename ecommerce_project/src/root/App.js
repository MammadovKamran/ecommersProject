import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Dashboard from "./Dashboard";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname !== "/signUp" && pathname !== "/signIn" ? <Header /> : <div />}
      <Dashboard />
      {pathname !== "/signUp" && pathname !== "/signIn" ? <Footer /> : <div />}
    </div>
  );
};

export default App;
