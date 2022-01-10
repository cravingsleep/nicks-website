import data, { Item, ItemTitle } from 'data';

/**
 * An immutable shopping cart.
 */
class Cart {
    /**
     * The default empty cart.
     */
    public static readonly EMPTY_CART = new Cart(new Set());

    /**
     * the items
     */
    private readonly items: Set<ItemTitle>;

    constructor(items: Set<ItemTitle>) {
        this.items = items;
    }

    public toggle(title: ItemTitle): Cart {
        const hasItem = this.items.has(title);

        return hasItem ? this.remove(title) : this.add(title);
    }

    public add(title: ItemTitle): Cart {
        this.items.add(title);

        return new Cart(this.items);
    }

    public get(title: ItemTitle): Item | undefined {
        return this.items.has(title) ? data[title] : undefined;
    }

    public remove(title: ItemTitle): Cart {
        this.items.delete(title);

        return new Cart(this.items);
    }

    public clear(): Cart {
        return new Cart(new Set());
    }

    public has(title: ItemTitle): boolean {
        return this.items.has(title);
    }

    public toArray(): Item[] {
        return Array.from(this.items).map(itemTitle => data[itemTitle]);
    }

    public itemCount(): number {
        return this.items.size;
    }

    public empty(): boolean {
        return this.toArray().length === 0;
    }
}

export default Cart;
