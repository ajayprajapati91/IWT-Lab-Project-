import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]= useState("MenuonClick ={}");
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo"/>
      <ul className="navbar-menu">
        <li onClick ={()=>setMenu("Home")}className={menu==="Home"?"active":""}>Home</li>
        <li onClick ={()=>setMenu("Menu")}className={menu==="Menu"?"active":""}>Menu</li>
    
        <li onClick ={()=>setMenu("Contact-us")}className={menu==="Contact-us"?"active":""}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt=""/>
            <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
