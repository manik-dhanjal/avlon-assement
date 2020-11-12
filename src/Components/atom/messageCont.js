import React from 'react'
import styled from "styled-components"

const Div = styled.div`
display:flex;
justify-content:${(({type})=>type==="sent"?"end":"start")};
margin:20px 0px;
.message-cont {
    position: relative;
    background: ${(({type})=>type==="sent"?"#B7F5E5":"white")};
    padding: 10px 15px;
    border-radius: 6px;
    max-width:90%;
    display:flex;
    .time{
        font-size:0.7em;
        color:grey;
        padding-left:5px;
        position:relative;
        bottom:-4px;
        right:-5px;
        white-space:nowrap;
        display:inline-block;
        align-self:end;
    }
    .message{
        flex-grow:2;
    }
  }
  

.message-cont::after {
    content: '';
    position: absolute;
    visibility: visible;
    top: 0px;
    right: ${(({type})=>type==="sent"?"-8px":"auto")};
    left: ${(({type})=>type==="sent"?"auto":"-8px")};
    border: 10px solid transparent;
    border-top: 10px solid ${(({type})=>type==="sent"?"#B7F5E5":"white")};
    clear: both;
  }

`
const Message = ({children, type,timestamp}) => {
  
   const timeConverter = (stamp) => {
        var time = new Date(stamp).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
        return time;
      }
    return (
        <Div type={type}>
              <span className="message-cont"> <span className="message">{children}</span> <div className="time"> {timeConverter(timestamp)} </div></span>  

        </Div>
    )
}

export default Message
