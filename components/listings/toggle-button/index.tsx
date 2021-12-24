import React, { useCallback, useContext } from 'react';
import { CartContext } from 'context/cart';
import Cta from 'Components/cta';

type ListingToggleButtonProps = {
    title: string,
    logoUrl: string
}

const ListingToggleButton = React.memo(function ListingToggleButton(props: ListingToggleButtonProps) {
    const { title, logoUrl } = props;

    const { state, dispatch } = useContext(CartContext);

    const onClick = useCallback(() => {
        dispatch({
            type: 'toggle',
            item: {
                title,
                logoUrl
            }
        });
    }, []);

    const added = state.cart.has(title);

    return <Cta 
        type={added ? 'negative' : 'positive'}
        icon={added ? 'bin' : 'add'}
        onClick={onClick} 
    >
        {added ? 'Remove' : 'Add To Cart'}
    </Cta>;
});

export default ListingToggleButton;
