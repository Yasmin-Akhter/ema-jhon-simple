import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hook/useCart';
import useProducts from '../../Hook/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleDeleteBtn = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);

    }
    return (
        <div className='shopContainer'>
            <div className="review-item-container">

                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleDeleteBtn={handleDeleteBtn}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/inventory">
                        <button>Process Checkout</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;