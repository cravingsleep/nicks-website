import React, { useCallback, useContext } from 'react';
import { CartContext } from 'context/cart';
import Cta from 'Components/cta';
import type { ItemTitle } from 'data';
import styles from './index.module.scss';

type ListingToggleButtonProps = {
    title: ItemTitle
}

const ListingToggleButton = React.memo(function ListingToggleButton(props: ListingToggleButtonProps) {
    const { title } = props;

    const { state, dispatch } = useContext(CartContext);

    const onClick = useCallback(() => {
        dispatch({
            type: 'toggle',
            item: title
        });
    }, []);

    const purchased = state.cart.isPurchased(title);
    const added = state.cart.has(title);

    return purchased ? <p className={styles.purchased}>Purchased</p> : <Cta 
        type={added ? 'negative' : 'positive'}
        icon={added ? 'bin' : 'add'}
        onClick={onClick} 
    >
        {added ? 'Remove' : 'Add To Cart'}
    </Cta>;
});

export default ListingToggleButton;
