import React from 'react'
import './styles/app.css'
import I from './images/ice-cream-1.jpg'
import C from './images/ice-creme.jpeg'
import E from './images/icecream-img.jpg'
import A from './images/icecream.jpg'
import F from './images/ice-cream-2.jpg'
import logo from './images/logo.png'
import { NavLink } from "react-router-dom"

const App = () => {

  const imgOut = () => {
    let randInt = Math.floor((Math.random()*5))

    if(randInt === 0){return I}
    if(randInt === 1){return C}
    if(randInt === 2){return E}
    if(randInt === 3){return A}
    if(randInt === 4){return F}
  }
  return (
    <div className='app-cont' style={{'background-image': 'url('+ imgOut() + ')'}}>
      <div className='grad'>
        <div className='app-head'>
          <div className='centre'>
            <img src={logo} className='logo-app'></img>
            <p className='app-title'>THE SAPHFIRE</p>
          </div>
        </div>
        <NavLink className='link-btn' to="/page">
          <p className='name'>SHOP</p>
        </NavLink>
      </div>
    </div>
  );
}

export default App;
