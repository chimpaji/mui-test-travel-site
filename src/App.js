import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchAppBar from "./components/AppBar";
import Tour from "./pages/Tour";
import React from "react";
import { Paper } from "@mui/material";
import ToggleColorModeContext from "./context/DarkModeContext";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ToggleColorModeContext>
          <Paper sx={{ height: "100vh" }}>
            <SearchAppBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Tour />} />
            </Routes>
          </Paper>
        </ToggleColorModeContext>
      </Router>
    </div>
  );
}
