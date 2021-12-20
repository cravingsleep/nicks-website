import { CartContext } from 'context/cart';
import React, { useContext } from 'react';
import styles from './index.module.scss';

function ShoppingCart() {
    const { state } = useContext(CartContext);

    return <article className={styles.cart}>
        <h3>Shopping Cart</h3>
        {state.items.length === 0 ? 
            <p>Your cart is empty...</p>
            : <ul>
                {state.items.map((item, i) => <li key={i}>
                    {item.title}
                </li>)}
            </ul>}
    </article>;
}

export default ShoppingCart;
