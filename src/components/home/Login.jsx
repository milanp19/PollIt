import { Button, TextField, Typography, duration } from "@mui/material";
import React, { useState } from "react";
import { Link, Form } from "react-router-dom";
import SignUp from "./SignUp";
import { motion, stagger } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Login = ({ setLoggedIn }) => {
  const [login, setLogin] = useState(true);
  return (
    <div
      key="login"
      style={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className="login"
    >
      <AnimatePresence initial="false">
        {login ? (
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();

              setLogin(false);
            }}
            initial={{ opacity: 0, display: "none" }}
            animate={{ opacity: 1, display: "block" }}
            exit={{ opacity: 0, display: "none" }}
            transition={{ delay: 0.1 }}
          >
            <div>
              <Typography style={{ fontSize: "30px" }}>
                Login to Your Account
              </Typography>
              <br />
              <br />
              <br />
              <TextField
                variant="outlined"
                label="Username"
                sx={{
                  width: 400,
                  "& .MuiInputBase-root": { height: 50 },
                }}
                style={{
                  boxShadow: "4px 3px rgba(19, 18, 18, 0.149)",
                  borderRadius: "5px",
                }}
                required
              />
              <br />
              <br />
              <TextField
                variant="outlined"
                label="Password"
                sx={{ width: 400, "& .MuiInputBase-root": { height: 50 } }}
                style={{
                  boxShadow: "4px 3px rgba(19, 18, 18, 0.149)",
                  borderRadius: "5px",
                }}
                type="password"
                required
              />
              <br />
              <br />
              <br />
              <Link to="/moderator" onClick={() => setLoggedIn(true)}>
                <Button
                  variant="contained"
                  sx={{ color: "#e3e6d8" }}
                  style={{
                    boxShadow: "4px 3px rgba(19, 18, 18, 0.149)",
                    borderRadius: "10px",
                    minWidth: "400px",
                  }}
                  type="submit"
                >
                  Login
                </Button>
              </Link>

              <br />
              <br />
              <br />
              <br />
              <Typography
                variant="h1"
                style={{ fontSize: "15px", fontWeight: "380", color: "grey" }}
              >
                New User? &nbsp;{" "}
                <Link>
                  <span onClick={() => setLogin(false)}>Sign Up</span>
                </Link>
              </Typography>
            </div>
          </motion.form>
        ) : (
          <SignUp setLogin={setLogin} key="signup" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;
