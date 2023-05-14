import InfoIcon from "@mui/icons-material/Info";
import {
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import DialogBox from "./DialogBox";

const Poll = () => {
  const [open, setOpen] = useState(false);
  const [poll, setPoll] = useState({ id: "", title: "", options: [] });
  const polls = [
    {
      question: "What is your favorite color?",
      options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      question: "What is your favorite animal?",
      options: ["Dog", "Cat", "Horse", "Bird"],
    },
    {
      question: "What is your favorite food?",
      options: ["Pizza", "Burger", "Pasta", "Sushi"],
    },
    {
      question: "What is your favorite movie?",
      options: [
        "The Lord of the Rings: The Return of the King",
        "The Silence of the Lambs",
      ],
    },
    {
      question: "What is your favorite book?",
      options: [
        "The Catcher in the Rye",
        "To Kill a Mockingbird",
        "The Lord of the Rings",
        "The Hitchhiker's Guide to the Galaxy",
      ],
    },
    {
      question: "What is your favorite TV show?",
      options: [
        "Friends",
        "The Office",
        "Game of Thrones",
        "The Big Bang Theory",
      ],
    },
    {
      question: "What is your favorite song?",
      options: ["Bohemian Rhapsody", "Stairway to Heaven"],
    },
    {
      question: "What is your favorite sport?",
      options: ["Football", "Basketball", "Baseball", "Soccer"],
    },
    {
      question: "What is your favorite video game?",
      options: [
        "Super Mario Bros.",
        "Minecraft",
        "The Witcher 3: Wild Hunt",
        "Fortnite",
      ],
    },
    {
      question: "What is your favorite place to travel?",
      options: ["Paris", "Rome", "London", "New York City"],
    },
  ];

  const handleClick = (poll) => {
    setOpen(true);
    setPoll((prevPoll) => ({
      ...prevPoll,
      id: poll.id,
      question: poll.question,
      options: poll.options,
    }));
  };
  return (
    <>
      <br />
      {/* Add polls */}
      <div
        style={{
          margin: "auto",
          width: "min(90%, 800px)",
          background: "#f9f9f9",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h4">Make a poll</Typography>
        <label>
          <br />
          <span>Poll title</span>
          <TextField
            id="outlined-basic"
            placeholder="Enter poll title"
            variant="outlined"
            fullWidth
          />
        </label>
        <Stack
          direction="row"
          justifyContent="space-between"
          gap="16px"
          flexWrap="wrap"
          sx={{ mt: "16px" }}
        >
          <div style={{ width: "180px", flexGrow: "1" }}>
            <InputLabel id="label">Visibility</InputLabel>
            <Select
              labelId="label"
              id="select"
              value="public"
              style={{ display: "block" }}
            >
              <MenuItem value="private">Private</MenuItem>
              <MenuItem value="public">Public</MenuItem>
            </Select>
          </div>
          <div style={{ width: "180px", flexGrow: "1" }}>
            <InputLabel id="label">Tags</InputLabel>
            <Select
              labelId="label"
              id="select"
              value="tech"
              style={{ display: "block" }}
            >
              <MenuItem value="sports">Sports</MenuItem>
              <MenuItem value="design">Design</MenuItem>
              <MenuItem value="web">Web Development</MenuItem>
              <MenuItem value="tech">Technology</MenuItem>
            </Select>
          </div>
        </Stack>
      </div>

      <br />

      {/* Available Polls */}
      <div
        style={{
          margin: "auto",
          width: "min(90%, 800px)",
          background: "#f9f9f9",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6">Available Polls</Typography>
        <br />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Poll Questions</TableCell>
                <TableCell align="right">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {polls.map((poll, index) => (
                <TableRow key={index}>
                  <TableCell>{poll.question}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleClick(poll)}>
                      <InfoIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <DialogBox open={open} setOpen={setOpen} poll={poll} />
    </>
  );
};

export default Poll;
