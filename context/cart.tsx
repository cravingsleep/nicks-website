import React, { Dispatch, useReducer } from 'react';
import Cart, { CartItem } from './domain';

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

type AddCart = {
    type: 'add',
    item: CartItem
}

type RemoveCart = {
    type: 'remove',
    item: CartItem
}

type ToggleCart = {
    type: 'toggle',
    item: CartItem
}

type ClearCart = {
    type: 'clear'
}

type CartAction = AddCart | RemoveCart | ToggleCart | ClearCart;

function cartReducer(state: State, action: CartAction): State {
    switch (action.type) {
        case 'add':
        case 'remove':
        case 'toggle':
            return {
                cart: state.cart[action.type](action.item)
            }; 
        case 'clear':
            return {
                cart: state.cart.clear()
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
