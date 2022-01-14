import React, { Fragment } from 'react';

function ExperienceExplanation() {
    return <Fragment>
        <h5>Search Engine Management Tools Team</h5>
        <h6>July 2016 - August 2017</h6>
        <p>
            My first job landed me on the Search Engine Management Tools Team (SEM) within the Expedia Group. It was
            predominantly a Scala team but I got my first taste of React when I constructed a whole new user interface
            in order to allow analysts to run and see the status of their own scripts.
        </p>
        <p>
            I hugely enjoyed my time on the SEM team and will always have a massive appreciation for functional
            programming because of it. I also got to take part in the Expedia Code Academy where I taught both
            Scala and Python to a mixture of technical and non-technical colleagues.
        </p>
        <h5>Web Platform Team</h5>
        <h6>July 2018 - Present</h6>
        <p>
            After obtaining my degree from the University of Surrey I returned to Expedia and joined the Web Platform
            team. It was there that my React experience really ramped up as we took a whole new website experience
            for <a href="https://hotels.com">hotels.com</a> from 0% traffic to 100% across three years. 
        </p>
        <p>
            I became a subject matter expert on the website, from everything to React components to the build pipeline.
            I got to cut my teeth on a whole raft of new technologies as well including AWS, Kubernetes, Grafana, Splunk
            and even improved my Bash programming.
        </p>
        <h3>Achievements</h3>
        <h5>Expedia Horizon Award</h5>
        <p>
            I won an Expedia Horizon Award for outstanding work and effort across the whole year. This included refactoring
            and upgrading vital page components (such as the calendar and the search results box). It also included
            creating a modern localisation solution in React hooks, allowing functional components to utilise multiple global
            translations.
        </p>
        <h5>Expedia Travel Award</h5>
        <p>
            I was referred for this award by my technical manager for exceptional work that goes above the norm. This work
            included the migration of our pipeline infrastructure from an outdated and clunky Atlassian Bamboo implementation
            to the industry standard of Jenkins and Spinnaker. I also combined the new pipeline with Github Actions for developer
            ease and happiness.
        </p>
    </Fragment>;
}

export default ExperienceExplanation;
