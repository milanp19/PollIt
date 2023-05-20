import { Button, TextField } from "@mui/material";
import React from "react";
import "../../index.css";

const SignUp = ({ setLogin }) => {
  return (
    <>
      <div className="card ">
        <h2 className="title">Sign up </h2>
        <TextField className="text-field" label="Enter your name:" />
        <br />
        <br />
        <TextField className="text-field" label="Enter your password:" />
        <br />
        <br />
        <TextField className="text-field" label="Confirm new password:" />
        <br />
        <br />
        <Button
          className="confirm-btn"
          variant="contained"
          onClick={() => setLogin(true)}
        >
          Confirm
        </Button>
      </div>
    </>
  );
};

export default SignUp;
