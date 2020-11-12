import React from 'react'
import styled from "styled-components"
import MessageCreater from "../molecule/messageCreater"
import MessageDisplay from "../molecule/messageDisplay"
const SChatBox = styled.section`
border-right:1px solid #3f4652;
display:flex;
flex-direction:column;
main{
    flex-grow:2;
}
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

