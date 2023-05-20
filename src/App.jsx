import { useState } from "react";
import "./App.css";
import * as React from "react";
import Poll from "./components/moderator/Poll";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import blue from "@mui/material/colors/blue";
import Navbar from "./components/Navbar";
import ModeratorPage from "./pages/ModeratorPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#c5d7d6",
//     },
//     secondary: {
//       main: "#f3faf9",
//     },
//   },
// });

function App() {
  return (
    <>
      {
        <>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/moderator" element={<ModeratorPage />} />
            </Routes>
          </ThemeProvider>
        </>
      }
    </>
  );
}

export default App;
