import { Button, TextField, Typography, duration } from "@mui/material";
import React, { useState } from "react";
import { Link, Form } from "react-router-dom";
import SignUp from "./SignUp";
import { motion } from "framer-motion";

const Login = () => {
  const [login, setLogin] = useState(true);
  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className="login"
    >
      {login ? (
        <motion.form onSubmit={(e) => console.log(e)}>
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
            <Link to="/moderator">
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
              <span style={{ color: "blue" }}>
                <span onClick={() => setLogin(false)}>Sign Up</span>
              </span>
            </Typography>
          </div>
        </motion.form>
      ) : (
        <SignUp setLogin={setLogin} />
      )}
    </div>
  );
};

export default Login;
