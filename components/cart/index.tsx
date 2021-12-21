import { CartContext } from 'context/cart';
import React, { useContext } from 'react';
import styles from './index.module.scss';

function ShoppingCart() {
    const { state } = useContext(CartContext);

    return <article className={styles.cart}>
        <h3>Shopping Cart</h3>
        {state.cart.empty() ? 
            <p>Your cart is empty...</p>
            : <ul>
                {state.cart.toArray().map((item, i) => <li key={i}>
                    {item.title}
                </li>)}
            </ul>}
    </article>;
}

export default ShoppingCart;
