import { Conversation, ConversationList, Search, Sidebar } from "@chatscope/chat-ui-kit-react";
import { Avatar } from "@mui/material";
import React from "react";

function MessageSidebar() {
    return (
        <>
            <Sidebar position="left">
                <Search placeholder="Search..." />
                <ConversationList>
                    <Conversation
                        name="Lilly"
                        info="Yes i can do it for you"
                        lastSenderName="Lilly"
                    >
                        <Avatar
                            alt="Lilly"
                            src="https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg"
                            status="available"
                        />
                    </Conversation>
                    <Conversation
                        name="Joe"
                        info="Yes i can do it for you"
                        lastSenderName="Joe"
                    >
                        <Avatar
                            alt="Joe"
                            src="https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg"
                            status="dnd"
                        />
                    </Conversation>
                    <Conversation
                        name="Emily"
                        info="Yes i can do it for you"
                        lastSenderName="Emily"
                        unreadCnt={3}
                    >
                        <Avatar
                            alt="Emily"
                            src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
                            status="available"
                        />
                    </Conversation>
                    <Conversation
                        name="Kai"
                        info="Yes i can do it for you"
                        lastSenderName="Kai"
                        unreadDot
                    >
                        <Avatar
                            alt="Kai"
                            src="https://chatscope.io/storybook/react/assets/kai-5wHRJGb2.svg"
                            status="unavailable"
                        />
                    </Conversation>
                    <Conversation
                        name="Akane"
                        info="Yes i can do it for you"
                        lastSenderName="Akane"
                    >
                        <Avatar
                            alt="Akane"
                            src="https://chatscope.io/storybook/react/assets/akane-MXhWvx63.svg"
                            status="eager"
                        />
                    </Conversation>
                    <Conversation
                        name="Eliot"
                        info="Yes i can do it for you"
                        lastSenderName="Eliot"
                    >
                        <Avatar
                            alt="Eliot"
                            src="https://chatscope.io/storybook/react/assets/eliot-JNkqSAth.svg"
                            status="away"
                        />
                    </Conversation>
                    <Conversation
                        name="Zoe"
                        info="Yes i can do it for you"
                        lastSenderName="Zoe"
                        active
                    >
                        <Avatar
                            alt="Zoe"
                            src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                            status="dnd"
                        />
                    </Conversation>
                </ConversationList>
            </Sidebar>
        </>
    );
}

export default MessageSidebar;
