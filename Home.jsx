import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ReorderRoundedIcon from '@material-ui/icons/ReorderRounded';
import {NavLink} from "react-router-dom";
import pic1 from "./pp.png";

import "./Home.css"
export const Home = (props) => {
  return(<><div className="main-main">
    <div className="Home-nav">
    <div>
         <body>
     
     <nav>
     <div className="Home-nav-main">
     <div className="Home-nav-main-three">
     <img className="nav-logo-img" src={pic1}/>
     <div className="nav-logo-detail">
     <label className="profile-bud" >PROFILEBUD</label>
    <br></br>
     <label className="agency">AGENCY</label>
     </div>
     </div>
     
     <ul >
     <div className="Home-nav-link">
       <li> <NavLink exact activeClassName="nav-link-class-name1"  to="/" >USPs</NavLink> </li>
       <li> <NavLink exact activeClassName="nav-link-class-name1"  to="/" >PRICING</NavLink> </li>
      <li id='list-icon-id'><AddShoppingCartIcon  className="list-icon-class-name"/></li>
      {/*} <li> <NavLink exact activeClassName="nav-link-class-name"  to="/AboutUs" >ABOUT US</NavLink> </li>*/}
       </div>
       {/*<li><img src={smvitm} className={navbar?"nav-bar-off-logo":"header-path-body-nav-ul-class-name-logo"} /></li>*/}
     </ul>
     {/*<label id='list-icon-id'><AddShoppingCartIcon  className="list-icon-class-name"/></label>*/}
     
     
     </div>
     </nav>  
     
     </body>
    </div>
    </div>
    <div className="Home-detail">
        <h1 className="Home-detail-one">We Extract Leads & Data From Instagram</h1>
        <h3 className="Home-detail-two">Our agency does all the hardwork and <br></br> gives you the clean targeted data in Sheets! </h3>
        <button className="Home-detail-button">GET LEADS</button>
    </div>
    
    <div className="main-two">

    <div className="Home-box-main">
    <div className="Home-box-main-sub1">
        <h4 className="Home-box-icon1" id="one">.</h4>
        
        <h2 className="Home-box-heading">Followers / Following of @any_user</h2>
       
    </div>    
        <h3 className="Home-box-data">some random followers detail which is not mentioned in assignment .. .. .. ..</h3>
        <button className="Home-detail-button" id="one">SAMPLE DATA</button>
    </div>

    <div className="Home-box-main">
    <div className="Home-box-main-sub1">
        <h4 className="Home-box-icon1" id="two" >.</h4>
        
        <h2 className="Home-box-heading">Followers / Following of @any_user</h2>
       
    </div>    
        <h3 className="Home-box-data">some random followers detail which is not mentioned in assignment .. .. .. ..</h3>
        <button className="Home-detail-button" id="two">SAMPLE DATA</button>
    </div>

    
    <div className="Home-box-main">
    <div className="Home-box-main-sub1">
        <h4 className="Home-box-icon1" id="three">.</h4>
        
        <h2 className="Home-box-heading">Followers / Following of @any_user</h2>
       
    </div>    
        <h3 className="Home-box-data">some random followers detail which is not mentioned in assignment .. .. .. ..</h3>
        <button className="Home-detail-button" id="three">SAMPLE DATA</button>
    </div>

    
    <div className="Home-box-main">
    <div className="Home-box-main-sub1">
        <h4 className="Home-box-icon1" id="four">.</h4>
        
        <h2 className="Home-box-heading">Followers / Following of @any_user</h2>
       
    </div>    
        <h3 className="Home-box-data">some random followers detail which is not mentioned in assignment .. .. .. ..</h3>
        <button className="Home-detail-button" id="four">SAMPLE DATA</button>
    </div>

    
    <div className="Home-box-main">
    <div className="Home-box-main-sub1">
        <h4 className="Home-box-icon1" id="five">.</h4>
        
        <h2 className="Home-box-heading">Followers / Following of @any_user</h2>
       
    </div>    
        <h3 className="Home-box-data">some random followers detail which is not mentioned in assignment .. .. .. ..</h3>
        <button className="Home-detail-button" id="five">SAMPLE DATA</button>
    </div>
    </div>
    
    <div className="last-div">
    <div className="Home-main-3">
    <div className="Home-main-3-first">
      <h1 className="noa">NUMBER OF ACCOUNTS</h1>
      <br></br>
      <button className="Home-main-3-button">ENTER NUMBER HERE</button>
      <br></br>
      <br></br>
      <h1 className="dollar">$0.00</h1>
    </div>
    <div className="Home-main-3-second">
      <h1 className="yellow">TRY IT FREE</h1>
      <h2 className="dark-gray">Pay As You Go Rates</h2>
     <h3 className="gray"> Email Price Per Email<br></br>
      Up to 10,000 $0.008<br></br>
      Up to 100,000 $0.005<br></br>
      Up to 250,000 $0.004<br></br>
      Up to 1,000,000 $0.003</h3>
      
      <h2 className="dark-gray">Enterprise Package</h2>
      <h3 className="gray">
      over 1,000,000</h3>
      
      <h2 className="yellow">Contact Us</h2>
      <h2 className="yellow">Learn More About Enterprise</h2>
    </div>
    </div>
    </div>
    </div>
    </>
   )

 }