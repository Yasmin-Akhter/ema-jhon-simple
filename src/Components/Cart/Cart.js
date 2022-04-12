import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(props.children);
    let totalPrice = 0;
    let shipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = parseFloat((totalPrice * 0.1).toFixed(2));
    let grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected Item:{cart.length}</p>
            <p>Total price: ${totalPrice} </p>
            <p>Shipping:{shipping} </p>
            <p>Tax:{tax} </p>
            <h5>Grand Total:{grandTotal} </h5>
            {props.children}

        </div>
    );
};

export default Cart;