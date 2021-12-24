import React from 'react';
import classnames from 'Utils/classnames';
import styles from './index.module.scss';

type ImageProps = {
    alt: string,
    src: string,
    width?: number,
    height?: number,
    className?: string,
    circle?: boolean
};

function Image(props: ImageProps) {
    return <img
        alt={props.alt}
        className={classnames([styles['image'], props.className || ''], {
            [styles['circle']]: Boolean(props.circle)
        })}
        src={props.src}
        width={props.width}
        height={props.height}
    />;
}

export { Image };
