import Cta from 'Components/cta';
import { CartContext } from 'context/cart';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useCallback, useContext } from 'react';
import CartTable from '../cart-table';
import styles from './index.module.scss';

type CartItemsProps = {
    onClearAll?: () => void
}

function CartItems(props: CartItemsProps) {
    const router = useRouter();
    const { state, dispatch } = useContext(CartContext);

    const clearAll = useCallback(() => {
        dispatch({
            type: 'clear'
        });

        props.onClearAll?.();
    }, [props.onClearAll]);

    const onCheckout = useCallback(() => {
        router.push('/checkout');
    }, []);

    return state.cart.allPurchased() ? <div>
        <p>You have purchased everything!</p>
        <p>View your <Link href="/inventory"><a>purchases</a></Link>.</p>
    </div> : <Fragment>
        <CartTable title="Shopping Cart" />
        {!state.cart.empty() && <div className={styles['button-container']}>
            <Cta type="negative" onClick={clearAll}>Clear All</Cta>
            <Cta type="positive" onClick={onCheckout}>Checkout</Cta>
        </div>}
    </Fragment>;
}

export default CartItems;
