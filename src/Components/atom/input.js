import React from 'react'
import styled from "styled-components"

const SInput = styled.div`
input{
    background: #FFFFFF;
    border-radius: 8px;
    font-size:1.05em;
    padding:10px 20px;
    border:1px solid black;
    font-weight:300;
    width:100%;
}
`
const Input = ({name,value,handleChange,placeholder}) => {

    return (
        <SInput className="input-container">
            <input name={name} type="text" value={value} onChange={(e)=>handleChange(e)} placeholder={placeholder}/>
        </SInput>
    )
}

export default Input
