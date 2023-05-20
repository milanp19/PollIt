import React from "react";
import Login from "../components/home/Login";
import Left from "../components/home/Left";
import SignUp from "../components/home/SignUp";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>
      <AnimatePresence>
        <Login />
        <Left />
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
