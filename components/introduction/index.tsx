import { CircleImage } from 'Components/image';
import Info from 'Components/info';
import ResponsiveGrid from 'Components/responsive-grid';
import Section from 'Components/section';
import React from 'react';

function Introduction() {
    return <Section>
        <h3>Introduction</h3>
        <ResponsiveGrid>
            <CircleImage src="/face.jpg" alt="Picture of me" />
            <Info>
                Hi I am Nick! I am a Full Stack Software Developer!
                I built this entire website and it is running on React!
                It is designed so you can learn a little bit more about me.
                I love making interesting UI experiences and hopefully I can
                showcase some of them now.
            </Info>
        </ResponsiveGrid>
    </Section>;
}

export default Introduction;
