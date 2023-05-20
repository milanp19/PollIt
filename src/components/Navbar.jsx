import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PollIcon from "@mui/icons-material/Poll";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useRef, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import { Logout } from "@mui/icons-material";
import { Button } from "@mui/material";

const Navbar = ({ loggedIn }) => {
  const [file, setFile] = useState({
    image: "",
  });
  const [anchorE1, setAnchorE1] = useState(null);
  // const anchorE1 = useRef();
  const open = Boolean(anchorE1);
  const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <PollIcon /> &nbsp; &nbsp; &nbsp;
          <Typography
            variant="h5"
            noWrap
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Poll'IT
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", sm: "flex", alignItems: "center" } }}
          >
            {loggedIn ? (
              <>
                <Typography variant="button">Profile</Typography>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="upload picture"
                  component="label"
                  aria-haspopup="true"
                  color="primary"
                >
                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      event.preventDefault();
                      const reader = new FileReader();
                      const file = event.target.files[0];
                      reader.onloadend = () => {
                        setFile({
                          image: reader.result,
                        });
                      };
                      reader.readAsDataURL(file);
                    }}
                  />

                  <img
                    src={
                      file.image ||
                      "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg"
                    }
                    alt=""
                    width="30px"
                    height="30px"
                    style={{ borderRadius: "50%" }}
                  />
                </IconButton>
              </>
            ) : (
              <>
                <Button variant="contained">Sign In</Button>
                &nbsp; &nbsp;
                <Button variant="contained">Sign Up</Button>
              </>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <Tooltip title="More Settings">
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                color="inherit"
                onClick={handleClick}
              >
                <MoreIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorE1={anchorE1}
            id="account-menu"
            open={open}
            onClose={handleClick}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 5,
                ml: -0.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            // transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
          >
            <MenuItem onClick={handleClick}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClick}>
              <Avatar /> My Account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
