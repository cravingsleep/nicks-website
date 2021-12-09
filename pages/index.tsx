import Experience from 'Components/experience';
import Introduction from 'Components/introduction';
import Technology from 'Components/technology';
import React, { Fragment } from 'react';

function Home() {
    return <Fragment>
        <Introduction />
        <Technology />
        <Experience />
    </Fragment>;
}

export default Home;
