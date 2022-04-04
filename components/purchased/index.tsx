import React, { Fragment, useContext, useState } from 'react';

import { CartContext } from 'context/cart';
import styles from './index.module.scss';
import Cta from 'Components/cta';
import data, { ItemTitle } from 'data';
import Link from 'next/link';

function Purchased() {
    const { state } = useContext(CartContext);

    const [selectedTitle, setSelectedTitle] = useState<ItemTitle | undefined>(undefined);

    const displayedCartItem = selectedTitle ? data[selectedTitle] : undefined;

    if (state.cart.isPurchasedEmpty()) {
        return <Fragment>
            <p>You have not purchased anything yet!</p>
            <p>
                Browse my wares by going back to the <Link href="/shop">Shop</Link>.
            </p>
        </Fragment>;
    }

    return <Fragment>
        <nav className={styles.options}>
            {state.cart.purchasedItems().map(item => <Cta
                key={item.title}  
                type="neutral" 
                onClick={() => setSelectedTitle(item.title)} 
                disabled={item.title === selectedTitle}>
                {item.title}
            </Cta>)}
        </nav>
        {displayedCartItem ? <Fragment>
            <h3>{displayedCartItem.title}</h3>
            {displayedCartItem.explanation}
        </Fragment> : <p>
            Choose an item from the list above to see your purchase!
        </p>}
    </Fragment>;
}

export default Purchased;
