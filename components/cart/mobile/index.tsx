import { CartContext } from 'context/cart';
import React, { Fragment, useCallback, useContext, useState } from 'react';
import CartItems from '../cart-items';
import styles from './index.module.scss';

function MobileCart() {
    const { state } = useContext(CartContext);

    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCartOpen = useCallback(() => {
        setIsCartOpen(prev => !prev);
    }, []);

    const closeCart = useCallback(() => {
        setIsCartOpen(false);
    }, []);

    return <Fragment>
        <div className={styles['container']}>
            {isCartOpen && <article className={styles.cart}>
                <CartItems onClearAll={closeCart} />
            </article>}
            <button
                className={styles['cart-button']}
                onClick={toggleCartOpen}
            >
                <img 
                    src={isCartOpen ? '/close-svgrepo-com.svg' : '/cart-svgrepo-com.svg'}
                    alt="Shopping Cart Icon"
                />
                {!isCartOpen && state.cart.itemCount() > 0 &&
                    <span className={styles['cart-number']}>{state.cart.itemCount()}</span>
                }
            </button>
        </div>

    </Fragment>;
}

export default MobileCart;
