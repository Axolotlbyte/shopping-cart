import React, { useState, useEffect} from 'react'
import logo from '../../src/images/logo.png'
import '../../src/styles/header.css'

const Header = (props) => {

    const {numOfItems,handleChange} = props
    const [size, setSize] = useState({
        x: window.innerWidth,
        y: window.innerHeight
    });
    const updateSize = () => {
        return setSize({
            x: window.innerWidth,
            y: window.innerHeight
        });
    }
    useEffect(() => (window.onresize = updateSize),[]);


    if(size !== undefined && size.x < 600){
        return (
            <div className='header-cont' >
                <a href='/shopping-cart'>
                <img src={logo} className='logo-img'></img>
                <div className='heading'>ICECREAM</div>
                </a>
                <button className='gg-shopping-bag' onClick={() => {return handleChange()}}>
                    {numOfItems}
                </button>
            </div>
        )
    }

    return (
        <div className='header-cont' >
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