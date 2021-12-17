import Header from 'Components/header';
import Listing from 'Components/listing';
import React, { Fragment } from 'react';

const reactText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

function Home() {
    return <Fragment>
        <Header />
        <Listing
            title="React"
            description={reactText}
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            logoAlt="React logo"
        />
    </Fragment>;
}

export default Home;
