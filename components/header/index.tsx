import React from 'react';
import classnames from 'Utils/classnames';
import styles from './index.module.scss';
import design from 'Design';

function Header() {
    return <header className={classnames([design['box-border'], styles.header])}>
        <h3>Nick&apos;s Portfolio Shop</h3>
    </header>;
}

export default Header;
