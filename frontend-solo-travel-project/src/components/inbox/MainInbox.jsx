import React, { useEffect, useState } from "react";
import MessageSidebar from "./MessageSidebar";
import ChatBox from "./ChatBox";
import { Box } from "@mui/material";
import { baseURL } from "../../environment";

function MainInbox({ token, userId }) {
  const userName = localStorage.getItem("userName");
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentDm, setCurrent] = useState();

  //FETCH ALL ROOMS(Not messages)
  const fetchRooms = async () => {
    const url = `${baseURL}/room/all`; //ENDPOINT HERE
    const options = {
      method: "GET",
      headers: new Headers({
        Authorization: token,
      }),
    };

    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await res.json();
      setRooms(data.result);
      console.log(data.result);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //FETCH ALL MESSAGES(only messages involving the user )
  const fetchMessages = async () => {
    const url = `${baseURL}/message/${userName}/${currentDm}` //ENDPOINT HERE
    const options = {
      method: "GET",
      headers: new Headers({
        Authorization: token,
      }),
    };

    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await res.json();
      setMessages(data.result);
      console.log(data.result);
    } catch (err) {
      console.error(err.message);
    }
  };

  //EXECUTES FETCH ON PAGE RELOAD
  useEffect(() => {
    if (token) {
      fetchRooms();
      fetchMessages();
    }
  }, [token]);

  return (
    <Box sx={{ height: "95vh", width: "87.5vw", display: "flex", pt: "68px" }}>
      <Box sx={{ flex: "1", maxWidth: "300px" }}>
        <MessageSidebar
          rooms={rooms}
          userName={userName}
          messages={messages}
          setCurrent={setCurrent}
        />
      </Box>
      <Box sx={{ flex: "3", height: "100%" }}>
        <ChatBox
          token={token}
          userId={userId}
          userName={userName}
          currentDm={currentDm}
          messages={messages}
        />
      </Box>
    </Box>
  );
}

export default MainInbox;
