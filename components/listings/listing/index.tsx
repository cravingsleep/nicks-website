import React from 'react';
import { Image } from 'Components/image';
import styles from './index.module.scss';
import ListingAddButton from '../toggle-button';

type ListingProps = {
    title: string,
    description: string,
    logoUrl: string,
    logoAlt: string
};

function Listing(props: ListingProps) {
    const { title, description, logoUrl, logoAlt } = props;

    return <li className={styles.container}>
        <section className={styles.listing}>
            <Image
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
            <ListingAddButton title={title} logoUrl={logoUrl} />
        </section>
    </li>;
}

export default Listing;
