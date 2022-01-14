import React from 'react';
import DockerExplanation from './docker';
import ExperienceExplanation from './experience';
import JenkinsExplanation from './jenkins';
import MeExplanation from './me';
import NodeJSExplanation from './nodejs';
import ReactExplanation from './react';
import SCSSExplanation from './scss';

export type ItemTitle = 'React' | 'NodeJS' | 'SCSS' | 'Jenkins' | 'Docker' | 'Experience' | 'Me';

export type Tag = 'Tech' | 'Dev Ops' | 'Other';

export type Item = {
    title: ItemTitle,
    logo?: {
        url: string,
        alt: string
    },
    description: string,
    explanation: JSX.Element,
    tags: Tag[]
};

const data: Record<ItemTitle, Item> = {
    React: {
        title: 'React',
        logo: {
            url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
            alt: 'React logo'
        },
        description: `
            My time in the Hotels.com Web Platform team. Supporting a new and
            large React application from 0% traffic to 100%.
        `,
        explanation: <ReactExplanation />,
        tags: ['Tech']
    },
    NodeJS:  {
        title: 'NodeJS',
        logo: {
            url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
            alt: 'NodeJS logo'
        },
        description: `
            My work creating an ExpressJS backend to support massive amounts
            of traffic.
        `,
        explanation: <NodeJSExplanation />,
        tags: ['Tech']
    },
    SCSS:  {
        title: 'SCSS',
        logo: {
            url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
            alt: 'SCSS logo'
        },
        description: `
            My experience working with carefully constructed design systems that meet the highest
            standards for responsiveness and accessibility. 
        `,
        explanation: <SCSSExplanation />,
        tags: ['Tech']
    },
    Jenkins: {
        title: 'Jenkins',
        logo: {
            url: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg',
            alt: 'Jenkins logo'
        },
        description: `
            How I constructed a new Spinnaker and Jenkins pipeline with Github Actions integration.
        `,
        explanation: <JenkinsExplanation />,
        tags: ['Tech', 'Dev Ops']
    },
    Docker: {
        title: 'Docker',
        description: `
            How I rewrote Docker images for multi-stage build improvements.
        `,
        explanation: <DockerExplanation />,
        tags: ['Tech', 'Dev Ops']
    },
    Experience: {
        title: 'Experience',
        description:`
            My time at Expedia Group and the various teams I have been a part of.
        `,
        explanation: <ExperienceExplanation />,
        tags: ['Tech', 'Other']
    },
    Me: {
        title: 'Me',
        description: `
            My time on the Great Britain U24 Ultimate Frisbee team and my love of juggling, 
            sports and travel!
        `,
        explanation: <MeExplanation />,
        tags: ['Other']
    }
};

export default data;
