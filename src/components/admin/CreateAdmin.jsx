import {
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
  Box,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const CreateAdmin = ({ setAddTag, setTags }) => {
  const [tagName, setTagName] = useState("");
  const [poll, setPoll] = useState("");
  const handleChange = (event) => {
    setPoll(event.target.value);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }} className="create">
      <Typography
        style={{
          fontSize: "40px",
          userSelect: "none",
        }}
      >
        Create a Tag of your choice
      </Typography>
      <br />
      <Divider />
      <br />
      <TextField
        variant="outlined"
        label="Tag Name"
        placeholder="Tag Name"
        sx={{ width: 400, "& .MuiInputBase-root": { height: 50 } }}
        style={{
          boxShadow: "4px 3px rgba(19, 18, 18, 0.149)",
          borderRadius: "5px",
        }}
        onChange={(e) => setTagName(e.target.value)}
      />
      <br />
      <br />
      <Box>
        <FormControl
          variant="outlined"
          sx={{ width: 400, "& .MuiInputBase-root": { height: 50 } }}
          style={{
            boxShadow: "4px 3px rgba(19, 18, 18, 0.149)",
            borderRadius: "5px",
          }}
        >
          <InputLabel id="poll">Poll Type</InputLabel>
          <Select
            labelId="poll"
            id="POLL"
            label="setPoll"
            value={poll}
            onChange={handleChange}
          >
            <MenuItem value={1}>Public</MenuItem>
            <MenuItem value={2}>Private</MenuItem>
          </Select>
        </FormControl>
      </Box>{" "}
      <br />
      <TextField
        variant="outlined"
        placeholder="Description"
        label="Description"
        sx={{ width: 400 }}
        style={{
          boxShadow: "4px 3px rgba(19, 18, 18, 0.149)",
          borderRadius: "5px",
        }}
        multiline
        rows={5}
        maxRows={10}
      ></TextField>
      <br />
      <br />
      <Button
        variant="contained"
        style={{
          boxShadow: "4px 3px rgba(19, 18, 18, 0.149)",
          borderRadius: "8px",
          minWidth: "400px",
        }}
        onClick={() => {
          setTags((prev) => {
            return [...prev, tagName];
          });
          setAddTag(false);
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default CreateAdmin;
