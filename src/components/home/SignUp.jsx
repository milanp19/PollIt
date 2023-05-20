import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import "../../index.css";
import { motion, stagger } from "framer-motion";
import { Link } from "react-router-dom";

const SignUp = ({ setLogin }) => {
  return (
    <>
      <motion.form
        onSubmit={(e) => console.log(e)}
        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: 1, display: "block" }}
        exit={{ opacity: 0, display: "none" }}
        transition={{ delay: 0.1 }}
      >
        <div>
          <Typography style={{ fontSize: "30px" }}>
            Create New Account
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
          <TextField
            variant="outlined"
            label="Confirm Password"
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
          <Button
            variant="contained"
            sx={{ color: "#e3e6d8" }}
            style={{
              boxShadow: "4px 3px rgba(19, 18, 18, 0.149)",
              borderRadius: "10px",
              minWidth: "400px",
            }}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setLogin(true);
            }}
          >
            Create
          </Button>
          <br />
          <br />
          <br />
          <Typography
            variant="h1"
            style={{ fontSize: "15px", fontWeight: "380", color: "grey" }}
          >
            Already have an account? &nbsp;
            <Link>
              <span onClick={() => setLogin(true)}>Sign In</span>
            </Link>
          </Typography>
        </div>
      </motion.form>
    </>
  );
};

export default SignUp;
