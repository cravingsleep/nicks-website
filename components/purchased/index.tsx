import React, { Fragment, useContext, useState } from 'react';
import { CartContext } from 'context/cart';
import styles from './index.module.scss';
import design from 'Design';
import Cta from 'Components/cta';
import { ItemTitle } from 'data';

function Purchased() {
    const { state } = useContext(CartContext);

    const [selectedTitle, setSelectedTitle] = useState<ItemTitle | undefined>(undefined);

    const displayedCartItem = selectedTitle ? state.cart.get(selectedTitle) : undefined;

    return <Fragment>
        <nav className={styles.options}>
            {state.cart.toArray().map(item => <Cta
                key={item.title}  
                type="neutral" 
                onClick={() => setSelectedTitle(item.title)} 
                disabled={item.title === selectedTitle}>
                {item.title}
            </Cta>)}
        </nav>
        {displayedCartItem ? <Fragment>
            <h3>{displayedCartItem.title}</h3>
            <p>{displayedCartItem.explanation}</p>
        </Fragment> : <p>
            Choose an item from the list above to see your purchase!
        </p>}
    </Fragment>;
}

export default Purchased;
