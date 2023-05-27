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
      style={{ paddingTop: "250px", textAlign: "center" }}
      className="right"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={leftAnimation}
      transition={{ duration: 0.6, ease: "backInOut" }}
    >
      <Typography
        style={{
          fontSize: "60px",
          textShadow: "4px 3px rgba(19, 18, 18, 0.149)",
          color: "black",
        }}
      >
        Welcome to Poll'IT
      </Typography>
      <br />
      <Divider />
      <br />
      <br />
      <Typography variant="caption" style={{ fontSize: "20px" }}>
        Your Voice, Your Vote, Your Impact!
      </Typography>
    </motion.div>
  );
};

export default Left;
