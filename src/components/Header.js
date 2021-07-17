import React from 'react'
import logo from '../../src/images/logo.png'
import '../../src/styles/header.css'

const Header = (props) => {

    const {numOfItems,handleChange} = props

    return (
        <div className='header-cont'>
            <a href='/shopping-cart'>
            <img src={logo} className='logo-img'></img>
            <div className='heading'>THE SAPHFIRE ICECREAM</div>
            </a>
            <button className='gg-shopping-bag' onClick={() => {return handleChange()}}>
                {numOfItems}
            </button>
        </div>
    )
}

export default Header