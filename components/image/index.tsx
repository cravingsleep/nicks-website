import React from 'react';
import classnames from 'Utils/classnames';
import styles from './index.module.scss';

type CircleImageProps = {
    alt: string,
    src: string,
    width?: number,
    height?: number,
    active?: boolean
};

const CircleImage = React.memo(function CircleImage(props: CircleImageProps) {
    return <img
        alt={props.alt}
        className={classnames([styles['circle-image'], styles.interactable])}
        src={props.src}
        width={props.width}
        height={props.height}
    />;
});

export { CircleImage };
