import React from "react";
import Login from "../components/home/Login";
import Left from "../components/home/Left";
import SignUp from "../components/home/SignUp";

const HomePage = ({ setLoggedIn }) => {
  return (
    <div>
      <Login setLoggedIn={setLoggedIn} />
      <Left />
    </div>
  );
};

export default HomePage;
