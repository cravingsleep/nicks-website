import { Tag } from 'data';
import React, { Dispatch, useReducer } from 'react';

type State = { filters: Set<Tag> };

type ToggleAction = {
    type: 'toggle',
    tag: Tag
}

type ClearAction = {
    type: 'clear'
}

type Action = ToggleAction | ClearAction;

export const FilterContext = React.createContext({ 
    state: {
        filters: new Set<Tag>()
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    dispatch: (() => {}) as Dispatch<Action>
});

function filterReducer(state: State, action: Action): State {
    const { filters } = state;
    const { type } = action;

    switch (type) {
        case 'toggle': {
            const { tag } = action;

            if (filters.has(tag)) {
                filters.delete(tag);
            } else {
                filters.add(tag);
            }

            return { filters };
        }
        case 'clear':
            return { filters: new Set() };
    }
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
