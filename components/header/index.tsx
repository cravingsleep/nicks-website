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
        <nav className={styles.nav}>
            {router.pathname !== '/inventory' && <Link href="/inventory">
                <a>My Items</a>
            </Link>}
            {router.pathname !== '/' && <Link href="/">
                <a>Shop</a>    
            </Link>}
        </nav>
    </header>;
}

export default Header;
