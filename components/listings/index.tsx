import data from 'data';
import React, { useContext } from 'react';
import styles from './index.module.scss';
import Listing from './listing';
import { FilterContext } from 'context/filters';

function Listings() {
    const { state } = useContext(FilterContext);

    const listingsFiltered = state.filters.size === 0 ? Object.values(data) : Object.values(data)
        .filter(listing => listing.tags.find(tag => state.filters.has(tag)));

    return <ul className={styles.listings}>
        {listingsFiltered.map(listing => <Listing
            key={listing.title}
            title={listing.title}
            description={listing.description}
            logoUrl={listing.logo?.url}
            logoAlt={listing.logo?.alt}
        />)}
    </ul>;
}

export default Listings;
