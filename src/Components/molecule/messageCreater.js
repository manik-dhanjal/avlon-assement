import React, { useState } from "react";
import styled from "styled-components";
import Input from "../atom/input";
import { ReactComponent as Send } from "../../assets/svg/send-button.svg";
const Container = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0px 0px 42px 6px rgba(0, 0, 0, 0.07);
  position: relative;
    z-index:0;
  .messenger {
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
    top: ${({ state }) => (state==='active' ? "-300px" : "0")};
    left: 0;
    z-index: -1;
    width: 300px;
    box-shadow: 13px -13px 21px rgba(0, 0, 0, 0.04);
    border-radius: 0px 8px 0px 0px;
    transition:0.5s ease;
    min-height:300px;
    background:white;
  }
`;
const MessageCreater = () => {
  const [message, setMessage] = useState("");
  const [toogleSuggest, setToggleSuggest] = useState("inactive");
  console.log(toogleSuggest);
  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log(e);
  };
  const handleToogle = () => {
    toogleSuggest === "active"
      ? setToggleSuggest("inactive")
      : setToggleSuggest("active");
  };

  return (
    <Container state={toogleSuggest}>
      <div className="messenger">
        <button className="suggestion-btn" onClick={handleToogle}>
          Suggestions
        </button>
        <Input name="message" value={message} handleChange={handleChange} />
        <div className="send-button">
          <Send />
        </div>
      </div>
      <div className="suggest-menu" >
        <ul>
          <input type="radio"/><label>casscas</label>
        </ul>
      </div>
    </Container>
  );
};

export default MessageCreater;
