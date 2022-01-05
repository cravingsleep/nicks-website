import React from 'react';
import styles from './index.module.scss';
import design from 'Design';

type SingleSelectionProps = {
    title: string
};

function SingleSelection(props: SingleSelectionProps) {
    return <div className={design.divider}>
        <p>{props.title}</p>
        <p className={styles.quantity}>Price: £0.00</p>
        <p className={styles.quantity}>Quantity: 1</p>
    </div>;
}

export default SingleSelection;
