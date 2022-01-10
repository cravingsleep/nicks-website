import ShoppingCart from 'Components/cart';
import Listings from 'Components/listings';
import React, { Fragment, useCallback, useState } from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import Filters from 'Components/filters';
import { Tag } from 'data';
import { Set } from 'immutable';

function Home() {
    const [filtersApplied, setFiltersApplied] = useState<Set<Tag>>(Set());

    const toggleFilter = (tag: Tag) => {
        console.log('toggle', tag, filtersApplied);
        if (filtersApplied.has(tag)) {
            setFiltersApplied(f => f.delete(tag));
        } else {
            setFiltersApplied(f => f.add(tag));
        }
    };

    return <Fragment>
        <Head>
            <link rel="prefetch" href="/add-svgrepo-com.svg" />
            <link rel="prefetch" href="/dust-bin-svgrepo-com.svg" />
            <link rel="prefetch" href="/cart-svgrepo-com.svg" />
            <link rel="prefetch" href="/close-svgrepo-com.svg" />
        </Head>
        <div className={styles.container}>
            <ShoppingCart />
            <Filters onFilterClick={toggleFilter}/>
            <Listings filters={filtersApplied} />
        </div>
    </Fragment>;
}

export default Home;
