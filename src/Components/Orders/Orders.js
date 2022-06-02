import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useCart from '../../Hook/useCart';
import useProducts from '../../Hook/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const handleDeleteBtn = (product) => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }
    return (
        <div className='shopContainer'>
            <div className="review-item-container">

                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleDeleteBtn={handleDeleteBtn}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>

                    <button onClick={() => navigate('/shipment')}>Process Checkout</button>

                </Cart>
            </div>

        </div>
    );
};

export default Orders;