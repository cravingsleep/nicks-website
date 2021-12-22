type CartItem = {
    title: string,
    logoUrl: string
};

/**
 * An immutable shopping cart.
 */
class Cart {
    /**
     * The default empty cart.
     */
    public static readonly EMPTY_CART = new Cart(new Map());

    /**
     * the items with title -> item
     */
    private readonly items: Map<string, CartItem>;

    constructor(items: Map<string, CartItem>) {
        this.items = items;
    }

    public toggle(cartItem: CartItem): Cart {
        const hasItem = this.items.has(cartItem.title);

        const addOrRemove = hasItem ? 'remove' : 'add';

        return this[addOrRemove](cartItem);
    }

    public add(cartItem: CartItem): Cart {
        this.items.set(cartItem.title, cartItem);

        return new Cart(this.items);
    }

    public remove(cartItem: CartItem): Cart {
        this.items.delete(cartItem.title);

        return new Cart(this.items);
    }

    public clear(): Cart {
        return new Cart(new Map());
    }

    public has(title: string): boolean {
        return this.items.has(title);
    }

    public toArray(): CartItem[] {
        return Array.from(this.items.values());
    }

    public itemCount(): number {
        return this.items.size;
    }

    public empty(): boolean {
        return this.toArray().length === 0;
    }
}

export type { CartItem };

export default Cart;
