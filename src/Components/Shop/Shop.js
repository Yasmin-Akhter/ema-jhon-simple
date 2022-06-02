import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hook/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([])
    const [pagesCount, setPagesCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);


    useEffect(() => {
        fetch(`https://warm-tor-18663.herokuapp.com/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size])

    useEffect(() => {
        fetch('https://warm-tor-18663.herokuapp.com/productsCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPagesCount(pages);
            });
    }, [])



    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }

        }
        setCart(savedCart);
    }, [products])

    const addToCardBtn = (product) => {
        console.log(product);
        //copy the element of cart array in newCart array and adding the product into it
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product._id);
    }


    return (
        <div className='shopContainer'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        addToCardBtn={addToCardBtn}
                    ></Product>)
                }
                <div className='pagination'>
                    {
                        [...Array(pagesCount).keys()].map(number => <button
                            className={page === number ? 'selected' : ''}
                            onClick={() => setPage(number)}
                        >{number}</button>)
                    }

                    <select onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>

                    </select>
                </div>
            </div>
            <div className="cart-container">

                <Cart cart={cart}>
                    <Link to="/order">
                        <button>Review order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;