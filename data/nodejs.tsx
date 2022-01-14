import React, { Fragment } from 'react';

function NodeJSExplanation() {
    return <Fragment>
        <p>
           While not working within the React framework I am mostly deep within the NodeJS ecosystem. 
        </p>
        <p>
            Creating powerful developer tooling comes naturally in NodeJS and using Typescript along side
            has made for robust applications. 
        </p>
        <p>
            Examples of tools I have worked on include a build system akin to <code>webpack</code> that
            allowed unique business rules to take front and center while also maintaining speed and performance.
        </p>
        <p>
            I also created a build system health checker. I noticed the acceptance tests were failing
            infrequently, wasting developer time. I decided having a tool that could check which tests were
            failing the most would allow us to investigate and fix them faster.
        </p>
    </Fragment>;
}

export default NodeJSExplanation;
