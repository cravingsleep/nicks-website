import ShoppingCart from 'Components/cart';
import Header from 'Components/header';
import Listings from 'Components/listing';
import { CartProvider } from 'context/cart';
import React, { Fragment } from 'react';
import styles from './index.module.scss';

function Home() {
    return <Fragment>
        <Header />
        <section className={styles.container}>
            <CartProvider>
                <ShoppingCart />
                <Listings />
            </CartProvider>
        </section>
    </Fragment>;
}

export default Home;
