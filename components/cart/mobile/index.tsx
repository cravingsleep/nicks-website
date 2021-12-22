import { CartContext } from 'context/cart';
import React, { Fragment, useCallback, useContext, useState } from 'react';
import { CartItems } from '..';
import styles from './index.module.scss';

function MobileCart() {
    const { state } = useContext(CartContext);

    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCartOpen = useCallback(() => {
        setIsCartOpen(prev => !prev);
    }, []);

    return <Fragment>
        <div className={styles['container']}>
            {isCartOpen && <article className={styles.cart}>
                <CartItems />
            </article>}
            <button 
                className={styles['cart-button']}
                onClick={toggleCartOpen}
            >
                <img 
                    src={isCartOpen ? '/close-svgrepo-com.svg' : '/cart-svgrepo-com.svg'}
                    alt="Shopping Cart Icon"
                />
            </button>
            <span className={styles['cart-number']}>{state.cart.itemCount()}</span>
        </div>

    </Fragment>;
}

export default MobileCart;
