import React, { useState } from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Cart from './components/Cart'
import Footer from './components/Footer'
import './styles/shop-page.css'
import coco from './flavours/Coconut.jpg'
import darkchoc from './flavours/dark-chocolate.jpg'
import licorice from './flavours/licorice.jpg'
import pista from './flavours/pistachio.jpg'
import oreo from './flavours/oreo.jpg'
import sorbet from './flavours/sorbet.jpg'
import snickers from './flavours/snickers.png'
import straci from './flavours/straciatella.jpg'
import vanilla from './flavours/vanilla.jpg'

const Page = () => {
    const [cartItems,setCart] = useState([]);
    const [change,setChange] = useState(true)

    const cardItems = [
        {id: 1, price: 0, qty: 0, val: 40, src: coco, title: 'Coconut Icecream'},
        {id: 2, price: 0, qty: 0, val: 30, src: darkchoc, title: 'Dark Chocolate Icecream'},
        {id: 3, price: 0, qty: 0, val: 60, src: licorice, title: 'Licorice Icecream'},
        {id: 4, price: 0, qty: 0, val: 20, src: pista, title: 'Pistachio Icecream'},
        {id: 5, price: 0, qty: 0, val: 25, src: oreo, title: 'Oreo Icecream'},
        {id: 6, price: 0, qty: 0, val: 30, src: snickers, title: 'Snickers Icecream'},
        {id: 7, price: 0, qty: 0, val: 35, src: straci, title: 'Straciatella Icecream'},
        {id: 8, price: 0, qty: 0, val: 50, src: vanilla, title: 'Vanilla Icecream'},
        {id: 9, price: 0, qty: 0, val: 25, src: sorbet, title: 'Fruit Sorbet Icecream'},
        {id: 0, price: null, qty: null, val: null, src: null, title: null}
    ]

    const handleCart = (card,val) => {
        let index = findItem(card);
        
        if(index === null){
        card.qty = 1
        card.price = card.qty * card.val
        console.log(card)
        console.log(card.qty)
        console.log(card.price)
        return setCart([...cartItems,card])
        }else{
            if(val === '+'){
                let tmpArr = cartItems;
                tmpArr[index].qty++;
                tmpArr[index].price = tmpArr[index].qty * card.val
                return setCart([...tmpArr])
            }else{
                let tmpArr = cartItems;
                tmpArr[index].qty--;
                tmpArr[index].price = tmpArr[index].qty * card.val
                return setCart([...tmpArr])
            }
        }
    }

    const findItem = (item) => {
        let ind = null;
        console.log('ind:' + ind)
        for(var i in cartItems){
            if(cartItems[i].id === item.id){
                ind = i
                break;
            }
        }
        console.log('ind:' + ind)
        return ind
    }

    const deleteItem = (item) => {
        let array = [...cartItems]
        let index = array.indexOf(item)
        if(index !== -1) {
            array.splice(index,1);
            return setCart(array)
        }
    }

    const handleChange = () => {
        if(change === true){
            setChange(false)
            console.log(change)
        }else{
            setChange(true)
            console.log(change)
        }

    }

    return (
        <div className='container'>
            <Cart change={change} cartItems={cartItems} deleteItem={deleteItem} handleCart={handleCart}/>
            <Header numOfItems={cartItems.length} handleChange={handleChange}/>
            <div className='mid-cont'>    
                <div className='cards-cont'>
                    {cardItems.map((card) => {return <Card key={card.id} cardItem={card} handleCart={handleCart} />})}
                </div> 
            </div>
            <Footer/>
        </div>
    )
}

export default Page