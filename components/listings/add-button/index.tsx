import React, { useCallback, useContext } from 'react';
import styles from './index.module.scss';
import { CartContext } from 'context/cart';
import classnames from 'Utils/classnames';

type ListingAddButtonProps = {
    title: string,
    logoUrl: string
}

function ListingAddButton(props: ListingAddButtonProps) {
    const { title, logoUrl } = props;

    const { state, dispatch } = useContext(CartContext);

    const onClick = useCallback(() => {
        dispatch({
            type: 'add',
            item: {
                title,
                logoUrl
            }
        });
    }, []);

    const added = Boolean(state.items.find(item => item.title === title));

    return <input 
        className={classnames([styles.buy], {
            [styles.added]: added
        })} 
        type="button" 
        value={added ? 'Added' :'Add to Cart'} 
        onClick={added ? undefined : onClick} 
    />;
}

export default ListingAddButton;
