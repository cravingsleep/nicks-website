import CartTable from 'Components/cart/cart-table';
import React from 'react';
import design from 'Design';

function Checkout() {
    return <article className={design['box-border']}>
        <CartTable title="Checkout" hideButtons />
    </article>;
}

export default Checkout;
