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
    </Fragment>;
}

export default IndexPage;
