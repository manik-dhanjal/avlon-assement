import React,{useRef} from 'react'
import styled from "styled-components"
import {ReactComponent as User} from "../../assets/svg/ninja.svg"
import {ReactComponent as Cross} from "../../assets/svg/cross.svg"

const Div = styled.div`
background:#ebeced;
.client{
    padding:30px 20px;
}
.detail-list{
    list-style-type:none;
    .user-default-image{
        width:60px;
        height:60px;
        svg{
            height:100%;
            width:100%;
        }
    }
    .user-image{
        border-radius:50%;
        width:60px;
        height:60px;
        object-fit:cover;
        img{
            width:100%;
        }
    }
    .name{
        font-size:1.2em;
        font-weight:600;
    }
    .head{
        font-weight:600;
        margin-right:15px;
    }
    li:first-of-type{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    li:not(:first-of-type){
        margin-top:20px;
    }
}
.close{
    display:none;
}
@media screen and (max-width:1024px){
position:fixed;
right:-100%;
top:0;
height:100%;
transition:1s ease;
.close{
    display:block;
    padding-bottom:70px;
    svg{
        float:right;
        cursor:pointer;
    }
}
}
`

const ClientDetails = () => {
    const client= useRef()
    const handleClose = (e) =>{
      client.current.style.right="-100%"
    }
    return (
        <Div className="client-details" ref={client}>
          
            <div className="client">
            <div className="close" onClick={handleClose}><Cross/></div>
                <ul className="detail-list">
                    <li>  <div className="name">{user.name}</div>  {user.image?<div className="user-image"><image src={user.image}/></div>:<div className="user-default-image"><User fill="#26CBA0"/></div>} </li>
                    <li>   <span className="head"> Address: </span> <span className="body">{user.address}</span> </li>
                    <li>   <span className="head"> Account: </span> <span className="body">{user.account}</span> </li>
                    <li>   <span className="head"> Ideal Time: </span> <span className="body">{user.idelTime}</span> </li>
                    <li>   <span className="head"> Latest Purchase: </span> <span className="body">{user.latestPurchase}</span> </li>
                    <li>   <span className="head"> Membership Type: </span> <span className="body">{user.membershipType}</span> </li>
                    <li>   <span className="head"> Payment Info: </span> <span className="body">{user.paymentInfo}</span> </li>
                </ul>
            </div>
        </Div>
    )
}

export default ClientDetails

const user ={
    name:"John Doe",
    image:"",
    address:"45 street, New York, USA",
    account:"#468201",
    idelTime:"12:11 AM",
    latestPurchase:"16/5/2020",
    membershipType:"premium",
    paymentInfo:"payed"

}