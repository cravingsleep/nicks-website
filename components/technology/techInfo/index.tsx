import { CircleImage } from 'Components/image';
import Info from 'Components/info';
import React, { Fragment } from 'react';
import styles from './index.module.scss';

type TechInfoProps = {
    info?: string | React.ReactNode,
    src: string,
    alt: string,
}

function TechInfo(props: TechInfoProps) {
    return <Fragment>
        <div className={styles['tech-info']}>
            <CircleImage
                src={props.src}
                alt={props.alt}
                width={64}
                height={64}
            />
        </div>
        <Info>{props.info || ''}</Info>
    </Fragment>;
}

export default TechInfo;
