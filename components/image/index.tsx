import React, { MouseEventHandler } from 'react';
import classnames from 'Utils/classnames';
import styles from './index.module.scss';

type CircleImageProps = {
    alt: string,
    src: string,
    width?: number,
    height?: number,
    onClick?: MouseEventHandler<HTMLImageElement>
};

function CircleImage(props: CircleImageProps) {
    return <img
        alt={props.alt}
        className={classnames([styles['circle-image']], {
            [styles.interactable]: Boolean(props.onClick)
        })}
        src={props.src}
        width={props.width}
        height={props.height}
        onClick={props.onClick}
    />;
}

export { CircleImage };
