import React ,{useEffect,useRef} from 'react'
import styled from "styled-components"
import Message from "../atom/messageCont"
import {useMessage} from "../context/messages.context"
const Div = styled.div`
flex-grow:2;
padding:0 20px;
padding-top:30px;
background:#3f4652;
overflow-y:auto;
scroll-behavior: smooth;
&::-webkit-slider-thumb {
    width: 1px;
    height: 15px;
    border:1px solid black;
 }
`
const MessageDisplay = () => {
    const messages=useMessage().sort(function(a,b){
        return new Date(b.timestamp) - new Date(a.timestamp);
      }).reverse();
      const dummy = useRef()
      useEffect(()=>{
        dummy.current.scrollIntoView({behaviour:'smooth'})
      },[messages])
    return (
        <Div>
            {messages.map((otherProps,{id,text})=>(
                <Message key={otherProps.id} {...otherProps}>{otherProps.text}</Message>
            ))}
            <div style={{ float:"left", clear: "both" }} ref={dummy} />
        </Div>
    )
}

export default MessageDisplay
