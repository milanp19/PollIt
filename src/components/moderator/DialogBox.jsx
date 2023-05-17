import {
  DialogTitle,
  DialogContent,
  Dialog,
  Box,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
// import Divider from "@mui/material/Divider";
import { useState } from "react";

const DialogBox = ({ open, setOpen, poll }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth={true}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            aria-label="basic tabs example"
            value={value}
            onChange={handleChange}
            variant="fullWidth"
          >
            <Tab label="Vote Ratio" sx={{ bgcolor: "var(--secondary)" }} />
            <Tab label="Attended" sx={{ bgcolor: "var(--secondary)" }} />
          </Tabs>
        </Box>
        <Box bgcolor="var(--body)">
          <DialogTitle>{value === 0 ? poll.question : ""}</DialogTitle>
          <DialogContent>
            {value === 0 ? (
              poll.options.map((option, index) => (
                <div
                  key={index}
                  style={{
                    padding: "0.5rem",
                    backgroundColor: "var(--secondary)",
                    marginBlock: "0.3rem",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {option}
                  <Typography variant="caption" align="center">
                    0 votes
                  </Typography>
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center" }}>No one attended this poll</p>
            )}
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
};

export default DialogBox;
