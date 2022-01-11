import { Tag } from 'data';
import React, { Dispatch, useReducer } from 'react';

type State = { filters: Set<Tag> };

const FilterContext = React.createContext({ 
    state: {
        filters: new Set<Tag>()
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    dispatch: (() => {}) as Dispatch<Tag>
});

function filterReducer(state: State, action: Tag): State {
    const { filters } = state;

    if (filters.has(action)) {
        filters.delete(action);
    } else {
        filters.add(action);
    }

    return { filters };
}

type FilterProviderProps = {
    children: React.ReactElement | React.ReactElement[]
}
 
function FilterProvider(props: FilterProviderProps) {
    const [state, dispatch] = useReducer(filterReducer, { filters: new Set<Tag>() });

    return <FilterContext.Provider value={{ state, dispatch }}>
        {props.children}
    </FilterContext.Provider>;
} 

export default FilterProvider;
