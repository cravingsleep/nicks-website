import React from 'react';
import design from 'Design';
import Link from 'next/link';

function WhatIsThis() {
    return <section className={design['box-border']}>
        <h3>What is this website?</h3>
        <p>
            This is my idea of telling you a bit about me and displaying a few of my technical skills
            while also having a bit of fun.
        </p>
        <p>
            On the <Link href="/">shop</Link> page you will find a bunch of categories you can &#39;purchase&#39;
            by adding them to your cart. Don&#39;t worry, everything is free! Then once purchased you can
            read them in the <Link href="/inventory">My Items</Link> section.
        </p>
        <p>
            Note all your selections and purchases will reset on each page visit. I do not want to clutter your
            computer with unnecessary cookies just so the selection can stay!
        </p>
    </section>;
}

export default WhatIsThis;
