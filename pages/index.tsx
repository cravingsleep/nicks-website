import ShoppingCart from 'Components/cart';
import Header from 'Components/header';
import Listings from 'Components/listings';
import { CartProvider } from 'context/cart';
import React, { Fragment } from 'react';
import styles from './index.module.scss';
import Head from 'next/head';

function Home() {
    return <Fragment>
        <Head>
            <link rel="prefetch" href="/add-svgrepo-com.svg" />
            <link rel="prefetch" href="/dust-bin-svgrepo-com.svg" />
        </Head>
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
