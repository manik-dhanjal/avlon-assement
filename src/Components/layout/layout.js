import React from "react";
import Header from "./header"
import styled from "styled-components"

const Main = styled.main`
margin-left:70px;
`
const Layout = ({ children }) => {

    return( 
        <>
            <Header/>
            <Main>{children}</Main>
        </>
    );
};

export default Layout;
