import React, { Dispatch, useReducer } from 'react';

type CartItem = {
    title: string,
    logoUrl: string
};

type Cart = {
    items: CartItem[]
};

const emptyCart: Cart = {
    items: []
};

const emptyCartContext = {
    state: emptyCart,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    dispatch: (() => {}) as Dispatch<CartAction>
};

const CartContext = React.createContext(emptyCartContext);

type AddCart = {
    type: 'add',
    item: CartItem
}

type RemoveCart = {
    type: 'remove',
    item: CartItem
}

type CartAction = AddCart | RemoveCart;

function cartReducer(state: Cart, action: CartAction): Cart {
    switch (action.type) {
        case 'add':
            return {
                items: state.items.concat(action.item)
            };
        case 'remove':
            return {
                items: state.items.filter(item => item.title !== action.item.title)
            };
        default:
            throw new Error('Undefined action type!');
    }
}

type CartProviderProps = {
    children: React.ReactElement | React.ReactElement[]
}

function CartProvider(props: CartProviderProps) {
    const [state, dispatch] = useReducer(cartReducer, emptyCart);

    return <CartContext.Provider value={{state, dispatch}}>
        {props.children}
    </CartContext.Provider>;
}

export { CartProvider, CartContext };
