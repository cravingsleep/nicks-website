import React from 'react';
import styles from './index.module.scss';
import Listing from './listing';

const react = `
    My time in the Hotels.com Web Platform team. Supporting a new and
    large React application from 0% traffic to 100%.
`;

const nodejs = `
    My work creating an ExpressJS backend to support massive amounts
    of traffic.
`;

const scss = `
    My experience working with carefully constructed design systems that meet the highest
    standards for responsiveness and accessibility. 
`;

const jenkins = `
    How I constructed a new Spinnaker and Jenkins pipeline with Github Actions integration.
`;

const docker = `
    How I rewrote Docker images for multi-stage build improvements.
`;

const experience = `
    My time at Expedia Group and the various teams I have been a part of.
`;

const aboutme = `
    My time on the Great Britain U24 Ultimate Frisbee team and my love of juggling, 
    sports and travel!
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
        <Listing
            title="Docker"
            description={docker}
        />
        <Listing
            title="Experience"
            description={experience}
        />
        <Listing
            title="Me"
            description={aboutme}
            // logoUrl="/face.jpg"
            // logoAlt="A picture of me"
        />
    </ul>;
}

export default Listings;
