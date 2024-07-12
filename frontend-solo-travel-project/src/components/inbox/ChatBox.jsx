import React, { useEffect, useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MessageCard from "./MessageCard";
import { Avatar, Box, Button, IconButton } from "@mui/material";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
} from "@chatscope/chat-ui-kit-react";
import { baseURL } from "../../environment";

function InboxDisplay({
  roomId,
  token,
  userName,
  currentDm,
  messages,
  userId,
  setMessages,
  fetchMessages,
}) {
  async function sendMessage(userMessage) {
    const body = userMessage;
    const user = userName;
    const room = [userName, currentDm];

    let bodyObj = JSON.stringify({
      body,
      user,
      room,
    });

    const url = `${baseURL}/message/new`;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", token);

    const requestOption = {
      headers,
      body: bodyObj,
      method: "POST",
    };

    try {
      const response = await fetch(url, requestOption);
      const data = await response.json();
      fetchMessages();
    } catch (err) {
      console.error(err.message);
    }
  }

  const handleFriendRequest = async (friend) => {
    const url = `${baseURL}/user/friends`;
    console.log(url);
    const headers = new Headers();
    headers.append("Authorization", token);
    headers.append("Content-Type", "application/json");

    const body = { friendUserName: friend, userId: userId };

    const requestOptions = {
      headers,
      method: "POST",
      body: JSON.stringify(body),
    };

    console.log(body);

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error("Failed to send friend request");
      }

      console.log("Friend request sent successfully.");
    } catch (error) {
      console.error("Error sending friend request:", error.message);
    }
  };

  // console.log(messages[3]);
  // useEffect(() => {
  //     const fetchMessages = async () => {
  //         try {
  //             const response = await fetch(`/message/inbox`);
  //             if (!response.ok) {
  //                 throw new Error('Network response was not ok');
  //             }
  //             const data = await response.json();
  //             setMessages(data.result);
  //         } catch (error) {
  //             setError(error.message);
  //         } finally {
  //             setLoading(false);
  //         }
  //     };

  //     fetchMessages();
  // }, [roomId]);

  // if (loading) {
  //     return <div>Loading...</div>;
  // }

  // if (error) {
  //     return <div>Error: {error}</div>;
  // }

  return (
    <>
      <MainContainer
        responsive
        style={{
          height: "100%",
        }}
      >
        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Content
              /*  info="Active 10 mins ago" */
              userName={currentDm}
            />
            <ConversationHeader.Actions>
              <IconButton
                onClick={() => {
                  handleFriendRequest(currentDm);
                }}
              >
                <PersonAddIcon />
              </IconButton>
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList
          /*   typingIndicator={<TypingIndicator content="Zoe is typing" />} */
          /*  <MessageSeparator content="Saturday, 30 November 2019" /> */
          >
            {messages.map((message) => (
              <MessageCard message={message} userName={userName}></MessageCard>
            ))}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={sendMessage} />
        </ChatContainer>
      </MainContainer>
    </>
  );
}

export default InboxDisplay;
