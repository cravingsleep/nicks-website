import React from 'react';
import { Image } from 'Components/image';
import styles from './index.module.scss';
import design from 'Design';
import ListingAddButton from '../toggle-button';
import type { ItemTitle } from 'data';

type ListingProps = {
    title: ItemTitle,
    description: string,
    logoUrl?: string,
    logoAlt?: string
};

function Listing(props: ListingProps) {
    const { title, description, logoUrl, logoAlt } = props;

    return <li className={design['box-border']}>
        <section className={styles.listing}>
            {logoUrl && logoAlt && <Image
                src={logoUrl}
                alt={logoAlt}
                className={styles['listing-item-image']}
            />}
            <div className={styles['listing-item']}>
                <h3>{title}</h3>
                <h5>Find out more about...</h5>
                <p>{description}</p>
            </div>
        </section>
        <section className={styles['buy-container']}>
            <ListingAddButton title={title} />
        </section>
    </li>;
}

export default Listing;
