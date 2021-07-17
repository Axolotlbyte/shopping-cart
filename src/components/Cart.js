import React, { useEffect, useState } from 'react'
import Item from './Cartitem'
import '../../src/styles/cart.css'
import { NavLink } from 'react-router-dom'

const Cart = (props) => {
    
    const {change, cartItems, deleteItem, handleCart} = props
    const [visibility,setVisibility] = useState('visible')
    const [price,setPrice] = useState(0)

    useEffect(() => {
        if(visibility === 'visible'){
            setVisibility('hidden')
        }
        else{
            setVisibility('visible')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[change])

    useEffect(() => {
        const priceTotal = () => {
            if(cartItems.length === 0){
                return 0
            }
            else if (cartItems.length === 1){
                return cartItems[0].price
            }
            else {
                console.log(cartItems.reduce((a,b) => {return a + b.price},0))
            return cartItems.reduce((tot,a) => {return tot + a.price},0)
            }    
        }

        let temp = priceTotal()

        setPrice(temp)
    },[cartItems])

    const handleVisiblility = () => {
        if(visibility === 'visible'){
            setVisibility('hidden')
        }
        else{
            setVisibility('visible')
        }
    }

    return (
        <div className='cart-container'>
            <div className='t-div' onClick={handleVisiblility} style={{visibility: visibility}}></div>
            <div className='cart-cont' style={{visibility: visibility}}>
                <div className='cart-title'>Cart</div>
                <hr/>
                <div className='item-disp'>
                    {cartItems.map((item) => {return <Item item={item} key={item.id} deleteItem={deleteItem} handleCart={handleCart}/> })}
                </div>
                <div className='total'>
                    Total: {
                        price + '$'
                    }
                    <NavLink to='/end' style={{'text-decoration': 'none'}}>
                        <button className='checkout'>Proceed to Checkout</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Cart