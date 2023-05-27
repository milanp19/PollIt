import { Check, Close } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Card,
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

const Dashboard = () => {
  const polls = [
    {
      poll: "Poll Name",
      question: "Poll Question",
      options: ["option 1", "option 2", "option 3", "option 4"],
      completed: false,
    },
    {
      poll: "Poll Name",
      question: "Poll Question",
      options: ["option 1", "option 2", "option 3", "option 4"],
      completed: false,
    },
    {
      poll: "Poll Name",
      question: "Poll Question",
      options: ["option 1", "option 2", "option 3", "option 4"],
      completed: false,
    },
    {
      poll: "Poll Name",
      question: "Poll Question",
      options: ["option 1", "option 2", "option 3", "option 4"],
      completed: false,
    },
    {
      poll: "Poll Name",
      question: "Poll Question",
      options: ["option 1", "option 2", "option 3", "option 4"],
      completed: false,
    },
    {
      poll: "Poll Name",
      question: "Poll Question",
      options: ["option 1", "option 2", "option 3", "option 4"],
      completed: false,
    },
    {
      poll: "Poll Name",
      question: "Poll Question",
      options: ["option 1", "option 2", "option 3", "option 4"],
      completed: false,
    },
  ];

  return (
    <Container sx={{ p: "50px 20px" }}>
      <Card
        sx={{
          borderRadius: "10px",
          padding: "20px 0px 0px",
          background: "var(--secondary)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            pl: "15px",
          }}
        >
          Available Polls
        </Typography>
        <br />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>Sl No</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Poll</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Question</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Options</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {polls.map((poll, index) => (
                <TableRow key={index} style={{ textAlign: "center" }}>
                  <TableCell sx={{ textAlign: "center" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {poll.poll}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {poll.question}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Autocomplete
                      options={poll.options}
                      PaperComponent={{}}
                      value={poll.options[0]}
                      renderInput={(params) => (
                        <TextField {...params} label="Options" />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button>Vote</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
};

export default Dashboard;
