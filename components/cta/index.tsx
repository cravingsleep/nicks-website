import React, { MouseEventHandler } from 'react';
import classnames from 'Utils/classnames';
import styles from './index.module.scss';

type Icon = 'add' | 'close' | 'cart' | 'bin';

type CtaProps = {
    type: 'positive' | 'negative',
    onClick: MouseEventHandler<HTMLButtonElement>,
    icon?: Icon,
    children: React.ReactElement | React.ReactElement[] | string,
}

const Cta = React.memo(function Cta(props: CtaProps) {
    return <button 
        className={classnames([styles.cta, styles[props.type]], {
            [styles[props.icon || '']]: Boolean(props.icon)
        })}
        onClick={props.onClick} 
    >
        {props.children}
    </button>;
});

export default Cta;
