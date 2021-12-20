import React, { useCallback, useContext } from 'react';
import { CircleImage } from 'Components/image';
import styles from './index.module.scss';
import { CartContext } from 'context/cart';
import classnames from 'Utils/classnames';

type ListingAddButtonProps = {
    title: string,
    logoUrl: string
}

function ListingAddButton(props: ListingAddButtonProps) {
    const { title, logoUrl } = props;

    const { state, dispatch } = useContext(CartContext);

    const onClick = useCallback(() => {
        dispatch({
            type: 'add',
            item: {
                title,
                logoUrl
            }
        });
    }, []);

    const added = Boolean(state.items.find(item => item.title === title));

    return <input 
        className={classnames([styles.buy], {
            [styles.added]: added
        })} 
        type="button" 
        value={added ? 'Added' :'Add to Cart'} 
        onClick={added ? undefined : onClick} 
    />;
}

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
            <ListingAddButton title={title} logoUrl={logoUrl} />
        </section>
    </article>;
}

const placeholder = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
`;

type ListingProps = {
    title: string,
    description: string,
    logoUrl: string,
    logoAlt: string
};

function Listings() {
    return <ul className={styles.listings}>
        <Listing
            title="React"
            description={placeholder}
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            logoAlt="React logo"
        />
        <Listing
            title="NodeJS"
            description={placeholder}
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            logoAlt="NodeJS logo"
        />
        <Listing
            title="SCSS"
            description={placeholder}
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
            logoAlt="SCSS logo"
        />
        <Listing
            title="Jenkins"
            description={placeholder}
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg"
            logoAlt="Jenkins logo"
        />
    </ul>;
}

export default Listings;
