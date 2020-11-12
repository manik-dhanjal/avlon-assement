import React from 'react'
import styled from "styled-components"
import Message from "../atom/messageCont"
const Div = styled.div`
flex-grow:2;
padding:0 20px;
padding-top:30px;
background:#3f4652;
`
const MessageDisplay = ({messages}) => {
    console.log(messages)
    return (
        <Div>
            {messages.map(({id,text,type})=>(
                <Message type={type} key={id}>{text}</Message>
            ))}
        </Div>
    )
}

export default MessageDisplay
