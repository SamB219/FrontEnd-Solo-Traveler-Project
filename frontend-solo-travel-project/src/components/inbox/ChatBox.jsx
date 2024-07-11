import React, { useEffect, useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MessageCard from "./MessageCard";
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
              <PersonAddIcon sx={{ height: 30, width: 30 }} />
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

{
  /*

      <Message
              model={{
                direction: "incoming",
                message: "Hello my friend",
                position: "single",
                sender: "Zoe",
                sentTime: "15 mins ago",
              }}
            ></Message>
   <Message
              avatarSpacer
              model={{
                direction: "outgoing",
                message: "Hello my friend",
                position: "single",
                sender: "Patrik",
                sentTime: "15 mins ago",
              }}
            />
  
  
  <Message
              avatarSpacer
              model={{
                direction: "incoming",
                message: "Hello my friend",
                position: "first",
                sender: "Zoe",
                sentTime: "15 mins ago",
              }}
            />
            <Message
              avatarSpacer
              model={{
                direction: "incoming",
                message: "Hello my friend",
                position: "normal",
                sender: "Zoe",
                sentTime: "15 mins ago",
              }}
            />
            <Message
              avatarSpacer
              model={{
                direction: "incoming",
                message: "Hello my friend",
                position: "normal",
                sender: "Zoe",
                sentTime: "15 mins ago",
              }}
            />
            <Message
              model={{
                direction: "incoming",
                message: "Hello my friend",
                position: "last",
                sender: "Zoe",
                sentTime: "15 mins ago",
              }}
            >
              <Avatar
                name="Zoe"
                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
              />
            </Message>
            <Message
              model={{
                direction: "outgoing",
                message: "Hello my friend",
                position: "first",
                sender: "Patrik",
                sentTime: "15 mins ago",
              }}
            />
            <Message
              model={{
                direction: "outgoing",
                message: "Hello my friend",
                position: "normal",
                sender: "Patrik",
                sentTime: "15 mins ago",
              }}
            />
            <Message
              model={{
                direction: "outgoing",
                message: "Hello my friend",
                position: "normal",
                sender: "Patrik",
                sentTime: "15 mins ago",
              }}
            />
            <Message
              model={{
                direction: "outgoing",
                message: "Hello my friend",
                position: "last",
                sender: "Patrik",
                sentTime: "15 mins ago",
              }}
            />
            <Message
              avatarSpacer
              model={{
                direction: "incoming",
                message: "Hello my friend",
                position: "first",
                sender: "Zoe",
                sentTime: "15 mins ago",
              }}
            />
            <Message
              model={{
                direction: "incoming",
                message: "Hello my friend",
                position: "last",
                sender: "Zoe",
                sentTime: "15 mins ago",
              }}
            >
              <Avatar
                name="Zoe"
                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
              />
            </Message> */
}
