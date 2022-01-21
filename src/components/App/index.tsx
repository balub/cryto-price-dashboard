import React from "react";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";

import "./App.scss";
import AppBar from "../AppBar";
import Themes from "../../utils/Themes";

function App() {
  return (
    <ThemeProvider theme={Themes}>
      <div className="App">
        <AppBar />
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          className="heading"
        >
          Crypto Dash
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
