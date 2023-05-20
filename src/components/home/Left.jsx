import { Button, ButtonGroup, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { delay, motion } from "framer-motion";

const Left = () => {
  const leftAnimation = {
    opacity: 1,
    scale: 1,
    type: "spring",
  };
  return (
    <motion.div
      style={{ paddingTop: "140px", textAlign: "center" }}
      className="right"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={leftAnimation}
      transition={{ duration: 0.6, ease: "backInOut" }}
    >
      <Typography
        style={{
          fontFamily: "Roboto",
          fontSize: "60px",
          textShadow: "4px 3px rgba(19, 18, 18, 0.149)",
        }}
      >
        Welcome to Poll'IT
      </Typography>
      <br />
      <Divider />
      <br />
      <br />
      <Stack direction="row" gap={4} alignItems="center" paddingLeft={4}>
        <Typography
          style={{
            fontFamily: "Roboto",
            fontSize: "20px",
            textShadow: "2px 2px rgba(19, 18, 18, 0.149)",
          }}
        >
          Log In as:
        </Typography>
        <br />
        <ButtonGroup orientation="vertical" style={{ gap: "8px" }}>
          <Button
            variant="contained"
            sx={{ color: "#e3e6d8" }}
            style={{
              color: "#e3e6d8",
              fontFamily: "Roboto",
              boxShadow: "4px 3px rgba(19, 18, 18, 0.149)",
              borderRadius: "4px",
              minWidth: "200px",
            }}
          >
            Admin
          </Button>
          <br />
          <br />
          <Button
            variant="contained"
            sx={{ color: "#e3e6d8" }}
            style={{
              color: "#e3e6d8",
              fontFamily: "Roboto",
              boxShadow: "4px 3px rgba(19, 18, 18, 0.149)",
              borderRadius: "4px",
              minWidth: "200px",
            }}
          >
            Moderator
          </Button>
          <br />
          <br />
          <Button
            variant="contained"
            sx={{ color: "#e3e6d8" }}
            style={{
              color: "#e3e6d8",
              boxShadow: "4px 3px rgba(19, 18, 18, 0.149)",
              borderRadius: "4px",
              minWidth: "200px",
            }}
          >
            User
          </Button>
        </ButtonGroup>
      </Stack>
    </motion.div>
  );
};

export default Left;
