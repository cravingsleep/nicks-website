import React, { Fragment } from 'react';
import DesktopCart from './desktop';
import MobileCart from './mobile';

const ShoppingCart = React.memo(function ShoppingCart() {
    return <Fragment>
        <DesktopCart />
        <MobileCart />
    </Fragment>;
});

export default ShoppingCart;
