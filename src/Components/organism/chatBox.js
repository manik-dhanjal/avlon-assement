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
            <MessageDisplay messages={messages}/>
           <MessageCreater/>
        </SChatBox>
    )
}

export default ChatBox

const messages=[
    {
        timestamp:"9999-12-31T22:59:59.999999999Z",
        name:"manik",
        type:"sent",
        text:"this is dummy",
        id:"s1"
    },
    {
        timestamp:"9999-12-31T21:50:59.999999999Z",
        name:"singh",
        type:"recieved",
        text:"this is dummy dsv",
        id:"r1"
    },
    {
        timestamp:"9999-12-31T22:58:59.999999999Z",
        name:"manik",
        type:"sent",
        text:"this is dummy ds",
        id:"s2"
    },
    {
        timestamp:"9999-12-31T21:20:59.999999999Z",
        name:"singh",
        type:"recieved",
        text:"this is dummy dsv s",
        id:"r2"
    },
    {
        timestamp:"9999-12-31T12:59:59.999999999Z",
        name:"manik",
        type:"sent",
        text:"this is dummy 3",
        id:"s3"
    },
    {
        timestamp:"9999-12-31T21:50:59.999999999Z",
        name:"singh",
        type:"recieved",
        text:"this is dummy 4",
        id:"r3"
    },
]