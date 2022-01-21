import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import "./AppBar.scss";

function index() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#091929",
          boxShadow: "rgb(19, 47, 76) 0px -1px 1px inset",
          backdropFilter: "blur(20px)",
          color: "#e7eaef",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            Crypto Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default index;
