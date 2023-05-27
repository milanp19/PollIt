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
import AdminPage from "./pages/AdminPage";
import { green, purple, amber, grey } from "@mui/material/colors";
import UserPage from "./pages/UserPage";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#673ab7",
//     },
//     secondary: {
//       main: "#11cb5f",
//     },
//   },
// });

// const theme = createTheme({
//   palette: {
//     main: green[50],
//   },
//   secondary: {
//     main: "#11cb5f",
//   },
// });

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: green[500],
//     },
//   },
// });

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

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#FF6F61",
//       contrastText: "#000000",
//       mode: "light",
//     },
//   },
// });

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#FF6F61",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#FF6F61",
          },
        }),
  },
});

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const theme = createTheme(getDesignTokens(darkMode));
  const [loggedIn, setLoggedIn] = useState(false);
  const role = "user";
  return (
    <>
      {
        <>
          <ThemeProvider theme={theme}>
            <Navbar loggedIn={loggedIn} />
            <Routes>
              <Route
                path="/"
                element={
                  loggedIn && role ? (
                    <UserPage />
                  ) : (
                    <HomePage setLoggedIn={setLoggedIn} />
                  )
                }
              />
              <Route path="/moderator" element={<ModeratorPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/user" element={<UserPage />} />
            </Routes>
          </ThemeProvider>
        </>
      }
    </>
  );
}

export default App;
