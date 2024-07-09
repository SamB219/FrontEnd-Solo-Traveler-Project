import React from "react";
import MessageSidebar from "./MessageSidebar";
import ChatBox from "./ChatBox";
import { Box } from "@mui/material";

function MainInbox({ token }) {
  return (
    <Box sx={{ height: "95vh", width: "87.5vw", display: "flex", pt: "68px" }}>
      <Box sx={{ flex: "1", maxWidth: "300px" }}>
        <MessageSidebar />
      </Box>
      <Box sx={{ flex: "3", height: "100%" }}>
        <ChatBox token={token} />
      </Box>
    </Box>
  );
}

export default MainInbox;
