import React, { useState } from "react";
import styled from "styled-components";
import Input from "../atom/input";
import {ReactComponent as Send} from "../../assets/svg/send-button.svg"
const Container = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0px 0px 42px 6px rgba(0, 0, 0, 0.07);
  display:flex;
  align-items:center;
  padding:0px 20px;
  .input-container{
      flex-grow:2;
      margin:0px 20px;
  }
  & input{
    border-color:#E5E5E5;
  }
  .send-button{
    width:50px;
    padding-bottom:7px;
    svg{
        width:100%;
        height:100%;
    }
  }
  .suggestion-btn{
    background: #FFFFFF;
    border: 2px solid #26CBA0;
    color:#26CBA0;
    border-radius: 8px;
    padding:8px 20px;
    font-size:1.05em;
  }
`;
const MessageCreater = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log(e);
  };

  return (
    <Container>
      <button className="suggestion-btn">Suggestions</button>
      <Input name="message" value={message} handleChange={handleChange} />
      <div className="send-button"><Send/></div>
    </Container>
  );
};

export default MessageCreater;
