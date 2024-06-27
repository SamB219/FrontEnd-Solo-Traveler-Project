import React from 'react'
import "react-chat-elements/dist/main.css";
import { MessageBox } from "react-chat-elements";

function Messaging() {
    return (
        <>
            <MessageBox
                position={"left"}
                type={"text"}
                title={"Message Box Title"}
                text="Here is a text type message box"
            />;
        </>
    )
}

export default Messaging
