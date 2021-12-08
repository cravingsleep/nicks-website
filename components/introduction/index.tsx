import { CircleImage } from 'Components/image';
import ResponsiveGrid from 'Components/responsive-grid';
import Section from 'Components/section';
import React from 'react';

function Introduction() {
    return <Section>
        <h3>Introduction</h3>
        <ResponsiveGrid>
            <CircleImage src="/face.jpg" alt="Picture of me" />
            <p>
                Hi I am Nick! I am a Full Stack Software Developer!
                I built this entire website and it is running on React!
            </p>
        </ResponsiveGrid>
    </Section>;
}

export default Introduction;
