import ListingAddButton from 'Components/listings/add-button';
import { CartContext } from 'context/cart';
import React, { Fragment, useCallback, useContext } from 'react';
import styles from './index.module.scss';
import MobileCart from './mobile';

type CartItemsProps = {
    onClearAll?: () => void
}

function CartItems(props: CartItemsProps) {
    const { state, dispatch } = useContext(CartContext);

    const clearAll = useCallback(() => {
        dispatch({
            type: 'clear'
        });

        props.onClearAll?.();
    }, [props.onClearAll]);

    return <Fragment>
        <h3>Shopping Cart</h3>
        {state.cart.empty() ? 
            <p>Your cart is empty...</p>
            : <Fragment>
                <table className={styles['cart-items']}>
                    <tbody>
                        {state.cart.toArray().map(item => <tr
                            className={styles['cart-item']} 
                            key={item.title}
                        >
                            <td><img className={styles.logo} src={item.logoUrl} /></td>
                            <td>{item.title}</td>
                            <td><ListingAddButton title={item.title} logoUrl={item.logoUrl} /></td>
                        </tr>)}
                    </tbody>
                </table>
                <button className={styles.clear} onClick={clearAll}>Clear All</button>
            </Fragment>
        }
    </Fragment>;
}

const ShoppingCart = React.memo(function ShoppingCart() {
    return <Fragment>
        <article className={styles.cart}>
            <CartItems />
        </article>
        <MobileCart />
    </Fragment>;
});

export { CartItems };

export default ShoppingCart;
