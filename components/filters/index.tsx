import React, { MouseEventHandler, useCallback, useState } from 'react';
import design from 'Design';
import styles from './index.module.scss';
import Cta from 'Components/cta';
import { Tag } from 'data';

type FilterButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>,
    children: string
};

function FilterButton(props: FilterButtonProps) {
    const [active, setActive] = useState(false);

    const onClick = useCallback(e => {
        setActive(disabled => !disabled);

        props.onClick(e);
    }, []);

    return <Cta type={active ? 'positive' : 'neutral'} onClick={onClick}>{props.children}</Cta>;
}

type FiltersProps = {
    onFilterClick: (tag: Tag) => void
};

const Filters = React.memo(function Filters(props: FiltersProps) {
    const { onFilterClick } = props;

    const onTech = useCallback(() => {
        onFilterClick('Tech');
    }, []);

    const onDevOps = useCallback(() => {
        onFilterClick('Dev Ops');
    }, []);

    const onOther = useCallback(() => {
        onFilterClick('Other');
    }, []);

    return <section className={design['box-border']}>
        <h3>Filters</h3>
        <div className={styles.filters}>
            <FilterButton onClick={onTech}>Tech</FilterButton>
            <FilterButton onClick={onDevOps}>Dev Ops</FilterButton>
            <FilterButton onClick={onOther}>Other</FilterButton>
        </div>
    </section>;
});

export default Filters;
