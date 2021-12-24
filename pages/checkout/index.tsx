import CartTable from 'Components/cart/cart-table';
import React from 'react';
import styles from './index.module.scss';

function Checkout() {
    return <article className={styles.container}>
        <CartTable title="Checkout" hideButtons />
    </article>;
}

export default Checkout;
