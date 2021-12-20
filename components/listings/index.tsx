import React from 'react';
import styles from './index.module.scss';
import Listing from './listing';

const placeholder = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
`;

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
