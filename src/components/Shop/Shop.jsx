// import React from 'react';
import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h3>Product container: {products.length}</h3>
            </div>
            <div className='cart-container'>
                <h1>Order Summary</h1>
            </div>
            
        </div>
    );
};

export default Shop;