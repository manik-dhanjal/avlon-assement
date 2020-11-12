import React, { useState ,useRef} from "react";
import styled from "styled-components";
import Input from "../atom/input";
import InputRadio from "../atom/inputRadio"
import { ReactComponent as Send } from "../../assets/svg/send-button.svg";
import { ReactComponent as Arrow } from "../../assets/svg/down-chevron.svg";
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
    cursor:pointer;
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
  .arrow{
    width:20px;
    height:20px;
    display:none;
    svg{
      width:100%;
      height:100%;
      transform:rotate(180deg)
    }
  }
  @media screen and (max-width:1024px){
    .messenger {
      padding: 0px 10px;
    }
    .arrow{
      display:block;
    }
    .suggestion-btn{
      display:none;
    }
    .messenger input{
      font-size:14px;
    }
  }
`;
const PopOver = styled.div`
  padding:${({ state }) => (state==='active' ? "30px" : "0")} 20px;
  height: ${({ state }) => (state==='active' ? "500px" : "0")};
  overflow:hidden;
  width: 100%;
  box-shadow: 13px -13px 21px rgba(0, 0, 0, 0.04);
  border-radius: 0px 8px 0px 0px;
  transition:0.5s ease;
  background:white;
  display:flex;
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

`
const MessageCreater = () => {
  const [message, setMessage] = useState("");
  const [toogleSuggest, setToggleSuggest] = useState("inactive");
  const [radioBtn, setRadioBtn] = useState('greetings')
  const setMessageUpdate = useMessageUpdate();
  const arrow = useRef()
  const handleChange = (e) => {
    setMessage(e.target.value);
    
  };
  const handleToogle = () => {
    toogleSuggest === "active"
      ? setToggleSuggest("inactive")
      : setToggleSuggest("active");
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
    <>
    <PopOver state={toogleSuggest}>
        <ul onChange={handleRadio}>
          <InputRadio name="message-type" value="greetings">Greetings</InputRadio>
          <InputRadio name="message-type" value="account">Account</InputRadio>
          <InputRadio name="message-type" value="product">Product of</InputRadio>
          <InputRadio name="message-type" value="payment">Payment</InputRadio>
        </ul>
        <div className="search-drop">
          <Input name="search" value="" placeholder="search" />
        </div>
    </PopOver>
    <Container >
      <div className="messenger">
        <button className="suggestion-btn" onClick={handleToogle}>
          Suggestions
        </button>
        <div className="arrow"  onClick={handleToogle} ref={arrow}><Arrow/></div>
        <Input name="message" value={message} handleChange={handleChange} placeholder="Type a Message"/>
        <div className="send-button" onClick={handleSubmit}>
          <Send />
        </div>
      </div>
     
    </Container>
    </>
  );
};

export default MessageCreater;
