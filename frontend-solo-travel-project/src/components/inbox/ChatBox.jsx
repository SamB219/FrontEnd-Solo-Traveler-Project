import { Avatar, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Sidebar, Search, ConversationList, Conversation, ConversationHeader, VoiceCallButton, VideoCallButton, InfoButton, TypingIndicator, MessageSeparator, ExpansionPanel } from '@chatscope/chat-ui-kit-react';


function InboxDisplay({ roomId }) {
    console.log('INBOX')
    const [messages, setMessages] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                    height: "100%"
                }}
            >
                <ChatContainer>
                    <ConversationHeader>
                        <ConversationHeader.Back />
                        <Avatar
                            name="Zoe"
                            src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                        />
                        <ConversationHeader.Content
                            info="Active 10 mins ago"
                            userName="Zoe"
                        />
                        <ConversationHeader.Actions>
                            <VoiceCallButton disabled/>
                            <VideoCallButton disabled/>
                            <InfoButton />
                        </ConversationHeader.Actions>
                    </ConversationHeader>
                    <MessageList typingIndicator={<TypingIndicator content="Zoe is typing" />}>
                        <MessageSeparator content="Saturday, 30 November 2019" />
                        <Message
                            model={{
                                direction: 'incoming',
                                message: 'Hello my friend',
                                position: 'single',
                                sender: 'Zoe',
                                sentTime: '15 mins ago'
                            }}
                        >
                            <Avatar
                                name="Zoe"
                                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                            />
                        </Message>
                        <Message
                            avatarSpacer
                            model={{
                                direction: 'outgoing',
                                message: 'Hello my friend',
                                position: 'single',
                                sender: 'Patrik',
                                sentTime: '15 mins ago'
                            }}
                        />
                        <Message
                            avatarSpacer
                            model={{
                                direction: 'incoming',
                                message: 'Hello my friend',
                                position: 'first',
                                sender: 'Zoe',
                                sentTime: '15 mins ago'
                            }}
                        />
                        <Message
                            avatarSpacer
                            model={{
                                direction: 'incoming',
                                message: 'Hello my friend',
                                position: 'normal',
                                sender: 'Zoe',
                                sentTime: '15 mins ago'
                            }}
                        />
                        <Message
                            avatarSpacer
                            model={{
                                direction: 'incoming',
                                message: 'Hello my friend',
                                position: 'normal',
                                sender: 'Zoe',
                                sentTime: '15 mins ago'
                            }}
                        />
                        <Message
                            model={{
                                direction: 'incoming',
                                message: 'Hello my friend',
                                position: 'last',
                                sender: 'Zoe',
                                sentTime: '15 mins ago'
                            }}
                        >
                            <Avatar
                                name="Zoe"
                                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                            />
                        </Message>
                        <Message
                            model={{
                                direction: 'outgoing',
                                message: 'Hello my friend',
                                position: 'first',
                                sender: 'Patrik',
                                sentTime: '15 mins ago'
                            }}
                        />
                        <Message
                            model={{
                                direction: 'outgoing',
                                message: 'Hello my friend',
                                position: 'normal',
                                sender: 'Patrik',
                                sentTime: '15 mins ago'
                            }}
                        />
                        <Message
                            model={{
                                direction: 'outgoing',
                                message: 'Hello my friend',
                                position: 'normal',
                                sender: 'Patrik',
                                sentTime: '15 mins ago'
                            }}
                        />
                        <Message
                            model={{
                                direction: 'outgoing',
                                message: 'Hello my friend',
                                position: 'last',
                                sender: 'Patrik',
                                sentTime: '15 mins ago'
                            }}
                        />
                        <Message
                            avatarSpacer
                            model={{
                                direction: 'incoming',
                                message: 'Hello my friend',
                                position: 'first',
                                sender: 'Zoe',
                                sentTime: '15 mins ago'
                            }}
                        />
                        <Message
                            model={{
                                direction: 'incoming',
                                message: 'Hello my friend',
                                position: 'last',
                                sender: 'Zoe',
                                sentTime: '15 mins ago'
                            }}
                        >
                            <Avatar
                                name="Zoe"
                                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                            />
                        </Message>
                    </MessageList>
                    <MessageInput placeholder="Type message here" />
                </ChatContainer>
            </MainContainer>
        </>
    );
}

export default InboxDisplay;
