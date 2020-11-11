import React from 'react'
import styled from "styled-components"
import ChatBox from "../organism/chatBox"
import ClientDetails from "../organism/clientdetails"
const Template = styled.div`

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
