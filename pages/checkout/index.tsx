import React, { useCallback, useContext } from 'react';
import Selection from 'Components/selection';
import Cta from 'Components/cta';
import design from 'Design';
import classnames from 'Utils/classnames';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import { CartContext } from 'context/cart';

function Checkout() {
    const { dispatch } = useContext(CartContext);
    const router = useRouter();

    const onBuy = useCallback(() => {
        dispatch({
            type: 'buy'
        });

        router.push('/inventory');
    }, []);

    return <article className={classnames([design['box-border']])}>
        <Selection />
        <p className={styles.total}>Total: £0.00</p>
        <Cta type="positive" onClick={onBuy}>
            Buy
        </Cta>
    </article>;
}

export default Checkout;
