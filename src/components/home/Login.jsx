import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  duration,
} from "@mui/material";
import React, { useState } from "react";
import { Link, Form } from "react-router-dom";
import SignUp from "./SignUp";
import { motion, stagger, AnimatePresence } from "framer-motion";

import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = ({ setLoggedIn }) => {
  const [login, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      key="login"
      style={{
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
            transition={{ duration: 0.5 }}
          >
            <Typography style={{ fontSize: "30px", color: "black" }}>
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
              type={showPassword ? "text" : "password"}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <br />
            <br />
            {/*Dynamic link */}
            <Link to="/moderator" onClick={() => setLoggedIn(true)}>
              <Button
                variant="contained"
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
              <Link style={{ color: "indigo" }}>
                <span onClick={() => setLogin(false)}>Sign Up</span>
              </Link>
            </Typography>
          </motion.form>
        ) : (
          <SignUp setLogin={setLogin} key="signup" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;
