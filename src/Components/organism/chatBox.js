import React from 'react'
import styled from "styled-components"
import MessageCreater from "../molecule/messageCreater"
import MessageDisplay from "../molecule/messageDisplay"

const SChatBox = styled.section`
display:flex;
flex-direction:column;
height:100%;
`
const ChatBox = () => {
 
    return (
        <SChatBox>
            <MessageDisplay/>
           <MessageCreater/>
        </SChatBox>
    )
}

export default ChatBox

