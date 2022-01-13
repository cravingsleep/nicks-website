import { CartContext } from 'context/cart';
import React, { Fragment, useContext } from 'react';
import styles from './index.module.scss';
import SingleSelection from './single';

function Selection() {
    const { state } = useContext(CartContext);

    return <Fragment>
        <h2>Selection</h2>
        <section className={styles.selections}>
            {state.cart.listingsArray().map(item => 
                <SingleSelection key={item.title} title={item.title} />)
            }
        </section>
    </Fragment>;
}

export default Selection;
