import React  from 'react';
import classnames from 'Utils/classnames';
import CartItems from '../cart-items';
import styles from './index.module.scss';
import design from 'Design';

function DesktopCart() {
    return <article className={classnames([design['box-border'], styles.cart])}>
        <CartItems />
    </article>;
}

export default DesktopCart;
