import React from "react";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";

import "./App.scss";
import AppBar from "../AppBar";
import CryptoTable from "../CryptoTable";
import Themes from "../../utils/Themes";

function App() {
  return (
    <ThemeProvider theme={Themes}>
      <div className="App">
        <AppBar />
        <div className="AppCont">
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            className="heading"
          >
            Crypto Dash
          </Typography>
          <CryptoTable />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
