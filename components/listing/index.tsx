import React from 'react';
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

    return <div className={styles.container}>
        <div className={styles.listing}>
            <section className={styles['listing-item-image']}>
                <CircleImage
                    src={logoUrl}
                    alt={logoAlt}
                />
            </section>
            <section className={styles['listing-item']}>
                <h3>{title}</h3>
                <p>{description}</p>
            </section>
        </div>
        <section className={styles['buy-container']}>
            <input className={styles.buy} type="button" value="Add to Cart" />
        </section>
    </div>;
}

export default Listing;
