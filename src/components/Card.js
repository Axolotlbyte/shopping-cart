import React from 'react'
import '../../src/styles/card.css'
import { NavLink } from "react-router-dom"

const Card = (props) => {

    const {handleCart,cardItem} = props

    return (
        <div className='card-cont'>
            <div className='photo'>
                <img src={cardItem.src} className='prod-img'></img>
            </div>
            <p className='prod-tit'>{cardItem.title}</p>
            <p className='prod-price'>{cardItem.val}$</p>
            <button onClick={() => {return handleCart(cardItem,'+')}} className='addcart-btn'>Add to card</button>
            <NavLink to='/end' className='buy-now'>
                <button className='addcart-btn'>Buy Now</button>
            </NavLink>
        </div>
    )
}

export default Card