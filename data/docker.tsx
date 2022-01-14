import React, { Fragment } from 'react';

function DockerExplanation() {
    return <Fragment>
        <p>
            Although most people groan when it comes to Docker I actually have a bit of a soft spot for it!
            All my jobs so far have included having a detailed look at Docker images and finding areas
            to improve from a performance perspective and size perspective.
        </p>
        <p>
            I recently rewrote a whole bunch of Docker images to enable multi-stage building. This massively
            improved the time it took to construct these images and sped up the pipeline.
        </p>
        <p>
            I also have great experience working with <code>docker-compose</code> and utilising it to launch
            applications in different configurations such as production mode and testing mode.
        </p>
    </Fragment>;
}

export default DockerExplanation;
