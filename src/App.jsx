import { useState } from "react";
import "./App.css";

import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import Poll from "./components/moderator/Poll";

// import { ThemeProvider, createTheme } from "@mui/material/styles";
import blue from "@mui/material/colors/blue";
import Navbar from "./components/Navbar";

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: "#afa274",
//       main: "#fbe8a6",
//       dark: "#fbecb7",
//       contrastText: "#fff",
//     },
//     secondary: {
//       light: "#aa694b",
//       main: "#f4976c",
//       dark: "#f6ab89",
//       contrastText: "#000",
//     },
//   },
// });

function App() {
  const [role, setRole] = useState("moderator");

  return (
    <>
      {role === "moderator" && (
        <>
          <Navbar />
          <Poll />
        </>
      )}
    </>
  );
}

export default App;
