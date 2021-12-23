import Cta from 'Components/cta';
import { CartContext } from 'context/cart';
import React, { Fragment, useCallback, useContext } from 'react';
import styles from './index.module.scss';

type RemoveCartItemButtonProps = {
    title: string,
    onRemove?: () => void
}

function RemoveCartItemButton(props: RemoveCartItemButtonProps) {
    const { dispatch } = useContext(CartContext);

    const removeItem = useCallback(() => {
        dispatch({
            type: 'remove',
            title: props.title
        });

        props.onRemove?.();
    }, []);

    return <Cta 
        type="negative"
        icon="bin" 
        onClick={removeItem}
    >
        Remove
    </Cta>;
}

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

    const lastRemoved = useCallback(() => {
        props.onClearAll?.();
    }, []);

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
                            <td>
                                <img className={styles.logo} src={item.logoUrl} />
                            </td>
                            <td>
                                {item.title}
                            </td>
                            <td>
                                <RemoveCartItemButton
                                    title={item.title}
                                    // if the cart item is the last one we want to emit
                                    // the cleared all event
                                    onRemove={
                                        state.cart.itemCount() === 1 ? lastRemoved : undefined
                                    }
                                />
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                <Cta type="negative" onClick={clearAll}>Clear All</Cta>
            </Fragment>
        }
    </Fragment>;
}

export default CartItems;
