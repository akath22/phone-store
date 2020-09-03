import React, { Component } from 'react'
import CartItem from "./CartItem"

export default class cartList extends Component {
    render() {
        const cart=this.props.cartItems
        return (
            <div className="container-fluid">
                {
                    cart.map((item)=>{
                        return <CartItem key={item.id} item={item}/>
                    })
                }
            </div>
        )
    }
}
