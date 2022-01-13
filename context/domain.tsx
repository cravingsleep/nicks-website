import data, { Item, ItemTitle } from 'data';

class Cart {
    /**
     * The default empty cart.
     */
    public static readonly EMPTY_CART = new Cart(new Set());

    /**
     * the items with title -> item
     */
    private items: Set<ItemTitle>;

    /**
     * The items the user has purchased.
     */
    private purchased: Set<ItemTitle>;

    constructor(items: Set<ItemTitle>) {
        this.items = items;
        this.purchased = new Set();
    }

    public toggle(title: ItemTitle): Cart {
        const hasItem = this.items.has(title);

        return hasItem ? this.remove(title) : this.add(title);
    }

    public add(title: ItemTitle): Cart {
        this.items.add(title);

        return this;
    }

    public buy(): Cart {
        // clone the cart to purchased
        Array.from(this.items).forEach(item => this.purchased.add(item));

        // reset the cart items
        this.items = new Set();

        return this;
    }

    public get(title: ItemTitle): Item | undefined {
        return this.items.has(title) ? data[title] : undefined;
    }

    public remove(title: ItemTitle): Cart {
        this.items.delete(title);

        return this;
    }

    public clear(): Cart {
        this.items = new Set();
        
        return this;
    }

    public has(title: ItemTitle): boolean {
        return this.items.has(title);
    }

    public isPurchased(title: ItemTitle): boolean {
        return this.purchased.has(title);
    }

    public purchasedItems(): Item[] {
        return Array.from(this.purchased).map(itemTitle => data[itemTitle]);
    }

    public listingsArray(): Item[] {
        return Array.from(this.items).map(itemTitle => data[itemTitle]);
    }

    public itemCount(): number {
        return this.items.size;
    }

    public empty(): boolean {
        return this.listingsArray().length === 0;
    }

    public isPurchasedEmpty(): boolean {
        return this.purchased.size === 0;
    }

    public allPurchased(): boolean {
        return this.purchased.size === Object.keys(data).length;
    }
}

export default Cart;
