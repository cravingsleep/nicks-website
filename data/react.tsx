import React, { Fragment } from 'react';

function ReactExplanation() {
    return <Fragment>
        <p>
           I am a huge fan of React ever since I started using it in my first team at Expedia.
           From that point on I have been very passionate about building amazing and accessible
           user interfaces with it.
        </p>
        <p>
            My knowledge of React is extensive and I have been part of numerous projects where
            a deep understanding of the inner workings has proved vital for solutions which not
            only perform well in the browser but also allow future developers to understand what
            is going on.
        </p>
        <p>
            For example, in my experience the biggest problems in React projects always come down
            to global state management. I have good experience with MobX and Redux and understand 
            the role they play in solving some of these issues.
        </p>
        <p>
            However, I am always a big fan of finding solutions closer to home and reducing the
            amount of code that is sent over the wires. One of my bests pieces of work came from
            refactoring an old and slow MobX global state management solution to instead use the
            React Context.
        </p>
        <p>
            No modern applications come without a data layer as well and I have worked closely
            with GraphQL and Apollo. From solving pesky cache bugs to linking up view and data
            layers, I think I have seen it all!
        </p>
        <p>
            It is probably no suprise that this website is written all in React! In fact if you
            want to check out some of my approaches to global state management and React Context
            then check out the&nbsp;
            <a target="_blank" href="https://github.com/cravingsleep/nicks-website" rel="noreferrer">
                source
            </a>!
        </p>
    </Fragment>;
}

export default ReactExplanation;
