import React  from 'react';
import CartItems from '../cart-items';
import styles from './index.module.scss';

function DesktopCart() {
    return <article className={styles.cart}>
        <CartItems />
    </article>;
}

export default DesktopCart;
