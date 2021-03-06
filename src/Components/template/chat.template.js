import React from 'react'
import styled from "styled-components"
import ChatBox from "../organism/chatBox"
import ClientDetails from "../organism/clientdetails"
import { MessageProvider } from "../context/messages.context"
const Template = styled.div`
display:grid;
grid-template-columns: 75% 25%;
grid-template-rows:100vh;
overflow:hidden;
@media screen and (max-width:1024px){
   display:block;
   height:100vh;
}
`
const ChatTemplate = () => {
    return (
        <MessageProvider>
            <Template>
                <ChatBox/>
                <ClientDetails />
            </Template>
        </MessageProvider>    
    )
}

export default ChatTemplate
