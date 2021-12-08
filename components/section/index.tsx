import React from 'react';
import classnames from 'Utils/classnames';
import styles from './index.module.scss';

type SectionProps = {
    children: React.ReactNode
}

function Section(props: SectionProps) {
    return <section className={classnames([
        styles.section
    ])}>
        {props.children}
    </section>;
}

export default Section;
