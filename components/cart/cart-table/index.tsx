import Cta from 'Components/cta';
import { CartContext } from 'context/cart';
import React, { Fragment, useCallback, useContext } from 'react';
import classnames from 'Utils/classnames';
import styles from './index.module.scss';
import design from 'Design';
import { ItemTitle } from 'data';
import { useRouter } from 'next/router';

type RemoveCartItemButtonProps = {
    title: ItemTitle,
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

type CartTableProps = {
    onClearAll?: () => void,
}

function CartTable(props: CartTableProps) {
    const { state, dispatch } = useContext(CartContext);
    const router = useRouter();

    const clearAll = useCallback(() => {
        dispatch({
            type: 'clear'
        });

        props.onClearAll?.();
    }, [props.onClearAll]);

    const onCheckout = useCallback(() => {
        router.push('/checkout');
    }, []);

    const lastRemoved = useCallback(() => {
        console.log('last removed');
        props.onClearAll?.();
    }, []);

    return <Fragment>
        <h3>Shopping Cart</h3>
        {state.cart.empty() ? 
            <p>Your cart is empty...</p>
            : <Fragment>
                <table className={styles['cart-items']}>
                    <tbody>
                        {state.cart.listingsArray().map(item => <tr
                            className={classnames([design.divider, styles['cart-item']])} 
                            key={item.title}
                        >
                            <td>{item.title}</td>
                            <td>
                                <RemoveCartItemButton
                                    title={item.title}
                                    // if the cart item is the last one we want to emit
                                    // the cleared all event
                                    onRemove={state.cart.itemCount() === 1 ? lastRemoved : undefined}
                                />
                            </td>
                        </tr>)}
                    </tbody>
                    <tfoot>
                        {!state.cart.empty() && <tr className={classnames([design.divider, styles['cart-item']])} >
                            <td><Cta type="negative" onClick={clearAll}>Clear All</Cta></td>
                            <td><Cta type="positive" onClick={onCheckout}>Checkout</Cta></td>
                        </tr>}
                    </tfoot>
                </table>
            </Fragment>
        }
    </Fragment>;
}

export default CartTable;
