import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MessageBox } from 'react-chat-elements';
import { Input } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';

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
            <Box sx={{ paddingTop: 11, paddingLeft: 3, }}>
                <Box
                    height={50}
                    width={1000}
                    my={4}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={2}
                    sx={{ border: '2px solid grey' }}
                >
                    <Input
                        
                        multiline={true}
                        border="solid"
                    />
                </Box>
                {messages.length > 0 ? (
                    messages.map(message => (
                        <MessageBox
                            key={message._id}
                            position={message.user === 'currentUser' ? 'right' : 'left'} // Adjust based on the current user
                            type="text"
                            text={message.body}
                            date={new Date(message.when)}
                        />
                    ))
                ) : (
                    <div>No messages found.</div>
                )}
            </Box>
        </>
    );
}

export default InboxDisplay;
