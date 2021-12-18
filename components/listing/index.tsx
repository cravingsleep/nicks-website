import React, { Fragment } from 'react';
import { CircleImage } from 'Components/image';
import styles from './index.module.scss';

type ListingProps = {
    title: string,
    description: string,
    logoUrl: string,
    logoAlt: string
};

function Listing(props: ListingProps) {
    const { title, description, logoUrl, logoAlt } = props;

    return <article className={styles.container}>
        <section className={styles.listing}>
            <CircleImage
                src={logoUrl}
                alt={logoAlt}
                className={styles['listing-item-image']}
            />
            <div className={styles['listing-item']}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </section>
        <section className={styles['buy-container']}>
            <input className={styles.buy} type="button" value="Add to Cart" />
        </section>
    </article>;
}

const reactText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
`;

function Listings() {
    return <ul className={styles.listings}>
        <Listing
            title="React"
            description={reactText}
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            logoAlt="React logo"
        />
        <Listing
            title="React"
            description={reactText}
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            logoAlt="React logo"
        />
        <Listing
            title="React"
            description={reactText}
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            logoAlt="React logo"
        />
        <Listing
            title="React"
            description={reactText}
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            logoAlt="React logo"
        />
    </ul>;
}

export default Listings;
