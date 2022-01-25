import React, { Fragment } from 'react';
import design from 'Design';
import Link from 'next/link';
import Cta from 'Components/cta';
import styles from './index.module.scss';

function IndexPage() {
    return <Fragment>
        <section className={design['box-border']}>
            <h2>Welcome!</h2>
            <p>
                Head into my portfolio shop to learn a bit about me.
                Select from a variety of categories and purchase, for free!
            </p>
            <div className={styles.enter}>
                <Link href="/shop">
                    <Cta type="positive">Enter Nick&#39;s Portfolio Shop</Cta>
                </Link>
            </div>
        </section>
        <section className={design['box-border']}>
            <h2>My Other Work</h2>
            <p>While you are here check out some of my other projects.</p>
            <ul>
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://radiant-everglades-00233.herokuapp.com/">
                            Premier League Percentage Points Taken Table
                    </a>
                    <p className={styles['other-info']}>
                        A Premier League table sorted by percentage of points won.
                        Updated every hour with a neat little cache layer.
                    </p>
                </li>
            </ul>
        </section>
    </Fragment>;
}

export default IndexPage;
