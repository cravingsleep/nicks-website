import { CircleImage } from 'Components/image';
import ResponsiveGrid from 'Components/responsive-grid';
import Section from 'Components/section';
import React from 'react';

type ShownSection = 'react' | 'nodejs';

function Technology() {


    return <Section>
        <h3>Technologies</h3>
        <p>Click to find out more</p>
        <ResponsiveGrid>
            <CircleImage
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React Icon"
                width={128}
                height={128}
                onClick={() => { }}
            />
            <CircleImage
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                alt="NodeJS Icon"
                width={128}
                height={128}
                onClick={() => { }}
            />
            <CircleImage
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                alt="TypeScript Icon"
                width={128}
                height={128}
                onClick={() => { }}
            />
            <CircleImage
                src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
                alt="GraphQL Icon"
                width={128}
                height={128}
                onClick={() => { }}
            />
            <CircleImage
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
                alt="SCSS Icon"
                width={128}
                height={128}
                onClick={() => { }}
            />
            <CircleImage
                src="https://logowik.com/content/uploads/images/301_docker.jpg"
                alt="Docker Icon"
                width={128}
                height={128}
                onClick={() => { }}
            />
        </ResponsiveGrid>
    </Section>;
}

export default Technology;
