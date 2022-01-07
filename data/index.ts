export type ItemTitle = 'React' | 'NodeJS' | 'SCSS' | 'Jenkins' | 'Docker' | 'Experience' | 'Me';

export type Item = {
    title: ItemTitle,
    logoUrl?: string,
    description: string,
    explanation: string
};

const data: Record<ItemTitle, Item> = {
    React: {
        title: 'React',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        description: `
            My time in the Hotels.com Web Platform team. Supporting a new and
            large React application from 0% traffic to 100%.
        `,
        explanation: ''
    },
    NodeJS:  {
        title: 'NodeJS',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        description: `
            My work creating an ExpressJS backend to support massive amounts
            of traffic.
        `,
        explanation: ''
    },
    SCSS:  {
        title: 'SCSS',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
        description: `
            My experience working with carefully constructed design systems that meet the highest
            standards for responsiveness and accessibility. 
        `,
        explanation: ''
    },
    Jenkins: {
        title: 'Jenkins',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg',
        description: `
            How I constructed a new Spinnaker and Jenkins pipeline with Github Actions integration.
        `,
        explanation: ''
    },
    Docker: {
        title: 'Docker',
        description: `
            How I rewrote Docker images for multi-stage build improvements.
        `,
        explanation: ''
    },
    Experience: {
        title: 'Experience',
        description:`
            My time at Expedia Group and the various teams I have been a part of.
        `,
        explanation: ''
    },
    Me: {
        title: 'Me',
        description: `
            My time on the Great Britain U24 Ultimate Frisbee team and my love of juggling, 
            sports and travel!
        `,
        explanation: ''
    }
};

export default data;
