import React from 'react'
import logo from "../../assets/logo.png";
const Header=()=> {
  return (
     <header className="header">
        <img src={logo} alt="logo" />
        <h1>InvestIT</h1>
      </header>
  )
}

export default Header