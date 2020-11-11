import React from 'react'
import styled from "styled-components"
import { Link,useLocation } from "react-router-dom";
import { ReactComponent as Merge } from "../../assets/svg/arrow-merge-symbol.svg"
import { ReactComponent as Chart } from "../../assets/svg/bar-chart-and-polyline.svg"
import { ReactComponent as Logo } from "../../assets/svg/bebo-logo.svg"
import { ReactComponent as LogOut } from "../../assets/svg/door-exit.svg"
import { ReactComponent as Help } from "../../assets/svg/help.svg"
import { ReactComponent as Chat } from "../../assets/svg/speech-bubbles.svg"
const SHeader = styled.header`
nav{
    background:#616161;
    position:fixed;
    top:0;
    left:0;
    width:70px;
    height:100%;
    padding:30px 18px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    .primary-menu, .secondary-menu{
        list-style-type:none;
        li{
            height:50px;
            padding:5px 0px;
            svg{
                width:100%;
                height:50px;
            }
        }
    }
}
`
const Header = () => {
    let {pathname} = useLocation();
    return (
        <SHeader>
            <nav>
                <ul className="primary-menu">
                    <li>  <Link to="/">  <Logo fill={pathname!=="/"?"#fff":"#26CBA0"} />  </Link>  </li>
                    <li>  <Link to="/chat">   <Chat fill={pathname!=="/chat"?"#fff":"#26CBA0"} />   </Link>  </li>
                    <li>  <Link to="/merge">  <Merge fill={pathname!=="/merge"?"#fff":"#26CBA0"}/>   </Link>  </li>
                    <li>  <Link to="/chart">  <Chart fill={pathname!=="/chart"?"#fff":"#26CBA0"} />   </Link>  </li>
                </ul> 
                <ul className="secondary-menu">
                    <li> <Help fill="#fff" />  </li>
                    <li> <LogOut fill="#fff" />  </li>
                </ul>
            </nav>
        </SHeader>
    )
}

export default Header
