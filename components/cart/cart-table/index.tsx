import Cta from 'Components/cta';
import { CartContext } from 'context/cart';
import React, { Fragment, useCallback, useContext } from 'react';
import classnames from 'Utils/classnames';
import styles from './index.module.scss';
import design from 'Design';

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

type CartTableProps = {
    title: string,
    onClearAll?: () => void,
}

function CartTable(props: CartTableProps) {
    const { state } = useContext(CartContext);

    const lastRemoved = useCallback(() => {
        props.onClearAll?.();
    }, []);

    return <Fragment>
        <h3>{props.title}</h3>
        {state.cart.empty() ? 
            <p>Your cart is empty...</p>
            : <Fragment>
                <table className={styles['cart-items']}>
                    <tbody>
                        {state.cart.toArray().map(item => <tr
                            className={classnames([design.divider, styles['cart-item']])} 
                            key={item.title}
                        >
                            <td>
                                {item.title}
                            </td>
                            <td>
                                {item.logoUrl && <img className={styles.logo} src={item.logoUrl} />}
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
            </Fragment>
        }
    </Fragment>;
}

export default CartTable;
