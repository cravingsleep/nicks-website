import Header from 'Components/header';
import Listings from 'Components/listing';
import React, { Fragment } from 'react';

function Home() {
    return <Fragment>
        <Header />
        <Listings />
    </Fragment>;
}

export default Home;
