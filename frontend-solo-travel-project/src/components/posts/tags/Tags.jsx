import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import "../../../App.css";

export default function ColorChips(props) {
  const [variant, setVariant] = useState();

  function handleClick(e) {
    e.target.classList.add("chip");
  }

  return (
    <>
      <Box p={2} sx={{ position: "relative", right: 7 }}>
        <Stack direction="row" spacing={1} p={0.5}>
          <Chip label="Outdoors" variant={variant} onClick={handleClick} />
          <Chip label="Indoors" variant={variant} />
          <Chip label="Cofee" variant="outlined" />
          <Chip label="Museum" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1} p={0.5}>
          <Chip label="Art" variant="outlined" />
          <Chip label="Sightseeing" variant="outlined" />
          <Chip label="Hike" variant="outlined" />
          <Chip label="Group Activity" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1} p={0.5}></Stack>
      </Box>
    </>
  );
}
