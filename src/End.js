import React from 'react'
import './styles/end.css'
import ending from './images/end.png'

const End = () => {
    return(
        <div className='end-cont'>
            <img src={ending} className='end-img'></img>
            <p className='oops'>OOPSIE!</p>
            <p className=''>WE'RE STILL WORKING ON IT</p>
        </div>
    )
}

export default End