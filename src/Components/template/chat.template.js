import React from 'react'
import styled from "styled-components"
import ChatBox from "../organism/chatBox"
import ClientDetails from "../organism/clientdetails"
const Template = styled.div`
display:grid;
grid-template-columns: 75% 25%;
grid-template-rows:100vh;
`
const ChatTemplate = () => {
    return (
        <Template>
            <ChatBox/>
            <ClientDetails/>
        </Template>
    )
}

export default ChatTemplate
