import React from 'react'
import styled from "styled-components"

const Div = styled.div`
margin-bottom:30px;
`
const InputRadio = ({name,value,children}) => {
    return (
        <Div>
            <input type="radio" name={name} value={value} id={value}/> <label htmlFor={value}>{children}</label>
        </Div>
    )
}

export default InputRadio
