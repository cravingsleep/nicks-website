import data, { Tag } from 'data';
import React from 'react';
import styles from './index.module.scss';
import Listing from './listing';
import { Set } from 'immutable';

type ListingsProps = {
    filters: Set<Tag>
};

function Listings(props: ListingsProps) {
    console.log(props.filters.toArray());
    const listingsFiltered = props.filters.size === 0 ? Object.values(data) : Object.values(data)
        .filter(listing => props.filters.intersect(listing.tags).size > 0);

    return <ul className={styles.listings}>
        {listingsFiltered.map(listing => <Listing
            key={listing.title}
            title={listing.title}
            description={listing.description}
            logoUrl={listing.logo?.url}
            logoAlt={listing.logo?.alt}
        />)}
    </ul>;

    // return <ul className={styles.listings}>
    //     <Listing
    //         title="React"
    //         description={react}
    //         logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    //         logoAlt="React logo"
    //     />
    //     <Listing
    //         title="NodeJS"
    //         description={nodejs}
    //         logoUrl="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    //         logoAlt="NodeJS logo"
    //     />
    //     <Listing
    //         title="SCSS"
    //         description={scss}
    //         logoUrl="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
    //         logoAlt="SCSS logo"
    //     />
    //     <Listing
    //         title="Jenkins"
    //         description={jenkins}
    //         logoUrl="https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg"
    //         logoAlt="Jenkins logo"
    //     />
    //     <Listing
    //         title="Docker"
    //         description={docker}
    //     />
    //     <Listing
    //         title="Experience"
    //         description={experience}
    //     />
    //     <Listing
    //         title="Me"
    //         description={aboutme}
    //     />
    // </ul>;
}

export default Listings;
