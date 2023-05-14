import {
  DialogTitle,
  DialogContent,
  Dialog,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
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

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

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
            <Tab label="Vote Ratio" sx={{ bgcolor: "beige" }} />
            <Tab label="Attended" sx={{ bgcolor: "beige" }} />
          </Tabs>
        </Box>
        <DialogTitle>{value === 0 ? poll.question : ""}</DialogTitle>
        <DialogContent>
          {value == 0
            ? poll.options.map((option, index) => (
                <div
                  key={index}
                  style={{
                    padding: "0.5rem",
                    backgroundColor: "#f3f3f3",
                    marginBlock: "0.3rem",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {option}
                  <Typography variant="caption">0 votes</Typography>
                </div>
              ))
            : "No one attended this poll"}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogBox;