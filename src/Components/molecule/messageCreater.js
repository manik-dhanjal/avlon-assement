import React, { useState } from "react";
import styled from "styled-components";
import Input from "../atom/input";
import InputRadio from "../atom/inputRadio"
import { ReactComponent as Send } from "../../assets/svg/send-button.svg";
import { useMessageUpdate} from "../context/messages.context"
const Container = styled.div`
  width: 100%;

  box-shadow: 0px 0px 42px 6px rgba(0, 0, 0, 0.07);
  position: relative;
    z-index:0;
  .messenger {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    z-index: 3;
    background: white;
  }

  .input-container {
    flex-grow: 2;
    margin: 0px 20px;
  }
  .messenger input {
    border-color: #e8e8e8;
  }
  .send-button {
    width: 50px;
    padding-bottom: 7px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .suggestion-btn {
    background: #ffffff;
    border: 2px solid #26cba0;
    color: #26cba0;
    border-radius: 8px;
    padding: 8px 20px;
    font-size: 1.05em;
    cursor:pointer;
  }
  .suggest-menu {
    position: absolute;
    padding:30px 20px;
    top: ${({ state }) => (state==='active' ? "-250px" : "0")};
    left: 0;
    z-index: -1;
    width: 350px;
    box-shadow: 13px -13px 21px rgba(0, 0, 0, 0.04);
    border-radius: 0px 8px 0px 0px;
    transition:0.5s ease;
    min-height:250px;
    background:white;
    display:flex;
    display:none;
    ul{
      min-width:100px;
    }
    .search-drop{
      font-size:14px;
      input{
        padding:8px 10px;
        border-color:#e5e5e5
      }
    }
  }
`;
const MessageCreater = () => {
  const [message, setMessage] = useState("");
  const [toogleSuggest, setToggleSuggest] = useState("inactive");
  const [radioBtn, setRadioBtn] = useState('greetings')
  const setMessageUpdate = useMessageUpdate();
  console.log(toogleSuggest);
  const handleChange = (e) => {
    setMessage(e.target.value);
    
  };
  const handleToogle = () => {
    toogleSuggest === "active"
      ? setToggleSuggest("inactive")
      : setToggleSuggest("active");
      console.log(message);
  };
  const handleRadio = (e) =>{
    setRadioBtn(()=>e.target.value)
    console.log(radioBtn)
  }
  const handleSubmit = () =>{
     setMessageUpdate(message);
     console.log(message)
      setMessage("")
      console.log(message)
  }
  return (
    <Container state={toogleSuggest}>
      <div className="messenger">
        <button className="suggestion-btn" onClick={handleToogle}>
          Suggestions
        </button>
        <Input name="message" value={message} handleChange={handleChange} placeholder="Type a Message"/>
        <div className="send-button" onClick={handleSubmit}>
          <Send />
        </div>
      </div>
      <div className="suggest-menu" >
        <ul onChange={handleRadio}>
          <InputRadio name="message-type" value="greetings">Greetings</InputRadio>
          <InputRadio name="message-type" value="account">Account</InputRadio>
          <InputRadio name="message-type" value="product">Product of</InputRadio>
          <InputRadio name="message-type" value="payment">Payment</InputRadio>
        </ul>
        <div className="search-drop">
          <Input name="search" value="" placeholder="search" />
        </div>
      </div>
    </Container>
  );
};

export default MessageCreater;
