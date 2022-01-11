import ShoppingCart from 'Components/cart';
import Listings from 'Components/listings';
import React, { Fragment } from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import FilterProvider from 'context/filters';

function Home() {
    return <Fragment>
        <Head>
            <link rel="prefetch" href="/add-svgrepo-com.svg" />
            <link rel="prefetch" href="/dust-bin-svgrepo-com.svg" />
            <link rel="prefetch" href="/cart-svgrepo-com.svg" />
            <link rel="prefetch" href="/close-svgrepo-com.svg" />
        </Head>
        <FilterProvider>
            <div className={styles.container}>
                <ShoppingCart />
                <Listings />
            </div>
        </FilterProvider>
    </Fragment>;
}

export default Home;
