import React ,{useEffect,useRef} from 'react'
import styled from "styled-components"
import Message from "../atom/messageCont"
import {useMessage} from "../context/messages.context"
import {ReactComponent as Phone} from "../../assets/svg/telephone-handle-silhouette.svg"
import {ReactComponent as Add} from "../../assets/svg/add.svg"
import {ReactComponent as Video} from "../../assets/svg/video-player.svg"
import {ReactComponent as Menu} from "../../assets/svg/menu.svg"
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
const MessageNav = styled.div`
height:60px;
width:100%;
padding:20px 0px;
background:white;
display:flex;
justify-content:end;
align-items:center;
.icons{
    width:30px;
    height:30px;
    margin-right:20px;
    cursor:pointer;
    &:nth-of-type(3){
        width:45px;
        height:45px;
    }
}
svg{
    width:100%;
    height:100%;
}
.mobile{
    display:none;
}
@media screen and (max-width:1024px){
    .mobile{
        display:block;
    }
}
`
const MessageDisplay = () => {
    const messages=useMessage().sort(function(a,b){
        return new Date(b.timestamp) - new Date(a.timestamp);
      }).reverse();
      const dummy = useRef()
      const openClient = () =>{
        document.querySelector(".client-details").style.right="0";
      }
      useEffect(()=>{
        dummy.current.scrollIntoView({behaviour:'smooth'})
      },[messages])
    return (
        <>
            <MessageNav>
                <div className="icons" ><Add fill="#26CBA0"/></div>
                <div className="icons" ><Phone fill="#26CBA0"/></div>
                <div className="icons" ><Video fill="#26CBA0"/></div>
                <div className="icons mobile" onClick={openClient} ><Menu fill="#26CBA0"/></div>
                
            </MessageNav>
            <Div>
                {messages.map((otherProps,{id,text})=>(
                    <Message key={otherProps.id} {...otherProps}>{otherProps.text}</Message>
                ))}
                <div style={{ float:"left", clear: "both" }} ref={dummy} />
            </Div>
        </>
    )
}

export default MessageDisplay
