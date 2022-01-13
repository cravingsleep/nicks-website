import React  from 'react';
import classnames from 'Utils/classnames';
import styles from './index.module.scss';
import design from 'Design';
import CartTable from '../cart-table';

function DesktopCart() {
    return <article className={classnames([design['box-border'], styles.cart])}>
        <CartTable />
    </article>;
}

export default DesktopCart;
