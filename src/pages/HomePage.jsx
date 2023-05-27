import React from "react";
import Login from "../components/home/Login";
import Left from "../components/home/Left";


const HomePage = ({ setLoggedIn }) => {
  return (
    <div>
      <Login setLoggedIn={setLoggedIn} />
      <Left />
    </div>
  );
};

export default HomePage;
