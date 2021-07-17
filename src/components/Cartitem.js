import React from 'react'
import '../../src/styles/item.css'

const Item = (props) => {

    const {item ,deleteItem, handleCart} = props
    return (
        <div className='item-cont'>
            <div className='itm-img-cont'>
                <img src={item.src} className='item-img'></img>
            </div>
            <p className='name-it'>{item.title}</p>
            <div className='price-it'>
            <p>{item.val}$</p>
            </div>
            <div>
                <div className='del-cont'>
                <button onClick={() => {return deleteItem(item)}}>remove from cart</button>
                </div>
                <div className='qty-cont'>
                    <button className='qty-btn' onClick={() => handleCart(item,'-')}>-</button>
                    <div className='qty-disp'>{item.qty}</div>
                    <button className='qty-btn' onClick={() => handleCart(item,'+')}>+</button>
                </div>
            </div>
            <hr className='item-hr'/>
        </div>
    )
}

export default Item