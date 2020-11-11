import React from 'react'
import styled from "styled-components"
import MessageCreater from "../molecule/messageCreater"
const SChatBox = styled.section`
border-right:1px solid grey;
display:flex;
flex-direction:column;
main{
    flex-grow:2;
}
`
const ChatBox = () => {
    return (
        <SChatBox>
            <main>cas</main>
           <MessageCreater/>
        </SChatBox>
    )
}

export default ChatBox
