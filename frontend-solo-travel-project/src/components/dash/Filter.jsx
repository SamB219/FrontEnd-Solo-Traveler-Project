import React from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

function Filter() {
  return (
    <>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          marginLeft: 5,
          height: 468,
          width: 300,
          position: "absolute",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        SEARCH FILTERS HERE
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 0, mb: 0 }}
          size="large"
        >
          Find Travel Buddies
        </Button>
      </Paper>
    </>
  );
}

export default Filter;
