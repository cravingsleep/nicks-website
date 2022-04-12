import React, { MouseEventHandler } from 'react';
import classnames from 'Utils/classnames';
import styles from './index.module.scss';

type Icon = 'add' | 'close' | 'cart' | 'bin';

type CtaProps = {
    type: 'positive' | 'negative' | 'neutral',
    onClick?: MouseEventHandler<HTMLButtonElement>,
    icon?: Icon,
    children: React.ReactElement | React.ReactElement[] | string,
    disabled?: boolean
}

const Cta = React.forwardRef(function Cta(props: CtaProps, ref: React.ForwardedRef<HTMLButtonElement>) {
    return <button 
        ref={ref}
        disabled={props.disabled}
        className={classnames([styles.cta], {
            [styles[props.type]]: !props.disabled,
            [styles[props.icon || '']]: Boolean(props.icon)
        })}
        onClick={props.onClick} 
    >
        {props.children}
    </button>;
});

export default Cta;
