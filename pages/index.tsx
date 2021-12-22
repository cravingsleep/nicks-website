import ShoppingCart from 'Components/cart';
import Header from 'Components/header';
import Listings from 'Components/listings';
import { CartProvider } from 'context/cart';
import React, { Fragment } from 'react';
import styles from './index.module.scss';
import Head from 'next/head';
import Footer from 'Components/footer';

function Home() {
    return <Fragment>
        <Head>
            <link rel="prefetch" href="/add-svgrepo-com.svg" />
            <link rel="prefetch" href="/dust-bin-svgrepo-com.svg" />
        </Head>
        <Header />
        <main className={styles.container}>
            <CartProvider>
                <ShoppingCart />
                <Listings />
            </CartProvider>
        </main>
        <Footer />
    </Fragment>;
}

export default Home;
