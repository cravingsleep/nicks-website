import React, { Dispatch, useReducer } from 'react';
import Cart from './domain';
import type { ItemTitle } from 'data';

type State = {
    cart: Cart
}

const emptyCartContext = {
    state: {
        cart: Cart.EMPTY_CART
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    dispatch: (() => {}) as Dispatch<CartAction>
};

const CartContext = React.createContext(emptyCartContext);

type Add = {
    type: 'add',
    item: ItemTitle
}

type RemoveItem = {
    type: 'remove',
    title: ItemTitle
}

type ToggleItem = {
    type: 'toggle',
    item: ItemTitle
}

type ClearCart = {
    type: 'clear'
}

type Buy = {
    type: 'buy'
}

type CartAction = Add | RemoveItem | ToggleItem | ClearCart | Buy;

function cartReducer(state: State, action: CartAction): State {
    switch (action.type) {
        case 'add':
        case 'toggle':
            return {
                cart: state.cart[action.type](action.item)
            }; 
        case 'remove':
            return {
                cart: state.cart.remove(action.title)
            };
        case 'clear':
            return {
                cart: state.cart.clear()
            };
        case 'buy':
            return {
                cart: state.cart.buy()
            };
        default:
            throw new Error('Unrecognised cart command.');
    }
}

type CartProviderProps = {
    children: React.ReactElement | React.ReactElement[]
}

function CartProvider(props: CartProviderProps) {
    const [state, dispatch] = useReducer(cartReducer, { cart: Cart.EMPTY_CART });

    return <CartContext.Provider value={{state, dispatch}}>
        {props.children}
    </CartContext.Provider>;
}

export { CartProvider, CartContext };
