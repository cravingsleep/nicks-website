import React from 'react';
import styles from './index.module.scss';
import Listing from './listing';

// const placeholder = `
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// `;

const react = `
    Learn more about my time in the Hotels.com Web Platform team. Supporting a new and
    large React application from 0% traffic to 100%.
`;

const nodejs = `
    My time on the Hotels.com Web Platform team encompasses a lot of back end work in both
    Hapi and Express.js.
`;

const scss = `
    I love making unique and accessible interfaces using CSS and SCSS. Including this one!
`;

const jenkins = `
    Add me to the cart to learn about how I constructed a new Spinnaker and Jenkins pipeline.
`;

function Listings() {
    return <ul className={styles.listings}>
        <Listing
            title="React"
            description={react}
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            logoAlt="React logo"
        />
        <Listing
            title="NodeJS"
            description={nodejs}
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            logoAlt="NodeJS logo"
        />
        <Listing
            title="SCSS"
            description={scss}
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
            logoAlt="SCSS logo"
        />
        <Listing
            title="Jenkins"
            description={jenkins}
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg"
            logoAlt="Jenkins logo"
        />
    </ul>;
}

export default Listings;
