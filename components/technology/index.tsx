import DecodingText from 'Components/decoding-text';
import Section from 'Components/section';
import React from 'react';
import Carousel from './carousel';
import TechInfo from './techInfo';

const reactText = `
    React is my everyday. I have a deep understanding of the internals of React. I have worked
    on improving individual component performance as well as performing massive architectural
    migrations.
`;

const nodeJsText = `
    I am great at NodeJS, I am the best.
`;

function Technology() {
    return <Section>
        <h3>Technologies</h3>
        <Carousel>
            <TechInfo
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React Icon"
                info={<DecodingText text={reactText}></DecodingText>}
            />
            <TechInfo
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                alt="NodeJS Icon"
                info={nodeJsText}
            />
            <TechInfo
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                alt="TypeScript Icon"
            />
            <TechInfo
                src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
                alt="GraphQL Icon"
            />
            <TechInfo
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
                alt="SCSS Icon"
            />
            <TechInfo
                src="https://logowik.com/content/uploads/images/301_docker.jpg"
                alt="Docker Icon"
            />
        </Carousel>
    </Section>;
}

export default Technology;
