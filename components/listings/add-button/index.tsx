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
            type: 'toggle',
            item: {
                title,
                logoUrl
            }
        });
    }, []);

    const added = Boolean(state.items.find(item => item.title === title));

    return <button 
        className={classnames([], {
            [styles.buy]: !added,
            [styles.added]: added
        })} 
        onClick={onClick} 
    >{added ? 'Remove' : 'Add'}</button>;
}

export default ListingAddButton;