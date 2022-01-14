import React, { Fragment } from 'react';

function JenkinsExplanation() {
    return <Fragment>
        <p>
            I am no stranger to Dev Ops work. I have worked with Jenkins across some big projects,
            constructing a whole new pipeline from scratch. From the very first steps of building
            to unit testing to acceptance tests to deploying.
        </p>
        <p>
            This Jenkins pipeline work also included getting to grips with Spinnaker. This allowed
            me to get hands on experience with developing ideas such as live feature branches
            and automatic acceptance testing.
        </p>
        <p>
            I also managed to hook this new pipeline up to Github Actions, which let developers
            see what stage their pipeline was at and whether they had the rights to merge (i.e.
            if all their unit and acceptance tests were passing).
        </p>
    </Fragment>;
}

export default JenkinsExplanation;
