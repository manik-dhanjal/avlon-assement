import React from 'react'
import styled from "styled-components"

const Div = styled.div`
display:flex;
justify-content:${(({type})=>type==="sent"?"end":"start")};
span {
    position: relative;
    background: ${(({type})=>type==="sent"?"#B7F5E5":"white")};
    text-align: ${(({type})=>type==="sent"?"right":"left")};
    min-width: 200px;
    padding: 10px 15px;
    border-radius: 6px;
  }
  

 span::after {
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
const Message = ({children, type}) => {
    return (
        <Div type={type}>
              <span className={type}> {children} </span>   
        </Div>
    )
}

export default Message
