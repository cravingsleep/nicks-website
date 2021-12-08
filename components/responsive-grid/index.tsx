import React from 'react';
import styles from './index.module.scss';

type ResponsiveGridProps = {
    children: React.ReactNode
}

function ResponsiveGrid(props: ResponsiveGridProps) {
    return <div className={styles.grid}>
        {props.children}
    </div>;
}

export default ResponsiveGrid;
