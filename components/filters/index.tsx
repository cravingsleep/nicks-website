import React, { useCallback, useContext } from 'react';
import design from 'Design';
import styles from './index.module.scss';
import Cta from 'Components/cta';
import { Tag } from 'data';
import { FilterContext } from 'context/filters';

type FilterButtonProps = {
    tag: Tag
};

function FilterButton(props: FilterButtonProps) {
    const { state, dispatch } = useContext(FilterContext);

    const onClick = useCallback(() => {
        dispatch({
            type: 'toggle',
            tag: props.tag
        });
    }, []);

    return <Cta type={state.filters.has(props.tag) ? 'positive' : 'neutral'} onClick={onClick}>{props.tag}</Cta>;
}

function ClearAllButton() {
    const { state, dispatch } = useContext(FilterContext);

    const onClick = useCallback(() => {
        dispatch({ type: 'clear' });
    }, []);

    return <Cta disabled={state.filters.size === 0} type="negative" onClick={onClick}>Clear All</Cta>;
}

function FilterCount() {
    const { state } = useContext(FilterContext);

    return state.filters.size > 0 ? <span className={styles.count}>Applied: {state.filters.size}</span> : null;
}

const Filters = React.memo(function Filters() {
    return <section className={design['box-border']}>
        <div className={styles.title}>
            <h3>Filters</h3>
            <FilterCount />
        </div>
        <div className={styles.filters}>
            <FilterButton tag="Tech" />
            <FilterButton tag="Dev Ops" />
            <FilterButton tag="Other" />
            <ClearAllButton />
        </div>
    </section>;
});

export default Filters;
