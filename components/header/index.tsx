import React from 'react';
import classnames from 'Utils/classnames';
import styles from './index.module.scss';
import design from 'Design';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
    const router = useRouter();

    return <header className={classnames([design['box-border'], styles.header])}>
        <h3>Nick&apos;s Portfolio Shop</h3>
        {router.pathname === '/' || router.pathname === '/shop' && 
            <Link href="/whatisthis">What&#39;s this?</Link>}
        <nav className={styles.nav}>
            {router.pathname !== '/' && <Link href="/">Home</Link>}
            {router.pathname === '/shop' && <Link href="/inventory">My Items</Link>}
            {router.pathname !== '/shop' && <Link href="/shop">Shop</Link>}
        </nav>
    </header>;
}

export default Header;
