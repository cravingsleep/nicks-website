import React from 'react';
import styles from './index.module.scss';

type InfoProps = {
    children: string | React.ReactNode
}

function Info(props: InfoProps) {
    return <p className={styles.info}>
        {props.children}
    </p>;
}

export default Info;
