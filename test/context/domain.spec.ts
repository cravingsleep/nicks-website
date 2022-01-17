import Cart from 'Context/domain';

describe('Cart', () => {
    it('should initialise as empty', () => {
        const cart = new Cart();

        expect(cart.itemCount()).toBe(0);
        expect(cart.purchasedItems().length).toBe(0);
    });

    it('should toggle an item on', () => {
        const next = new Cart()
            .toggle('Docker');

        expect(next.get('Docker')).toBeTruthy();
    });

    it('should toggle an item off', () => {
        const cart = new Cart()
            .toggle('Docker')
            .toggle('Docker');

        expect(cart.get('Docker')).toBeUndefined();
    });

    it('should move items to purchased on a buy', () => {
        const cart = new Cart()
            .toggle('Docker')
            .toggle('Experience')
            .buy();

        expect(cart.itemCount()).toBe(0);

        expect(cart.isPurchased('Docker'));
        expect(cart.isPurchased('Experience'));
    });

    it('should return undefined if the item is not in the cart', () => {
        const cart = new Cart();

        expect(cart.get('Docker')).toBeUndefined();
    });

    it('should remove an item', () => {
        const cart = new Cart()
            .toggle('Docker')
            .remove('Docker');

        expect(cart.get('Docker')).toBeUndefined();
    });

    it('should clear', () => {
        const cart = new Cart()
            .toggle('Docker')
            .toggle('Experience')
            .clear();

        expect(cart.itemCount()).toBe(0);
    });

    it('should know if an item is in the cart', () => {
        const cart = new Cart()
            .toggle('Docker');

        expect(cart.has('Docker'));
    });

    it('should know the cart is empty', () => {
        const cart = new Cart();

        expect(cart.empty());
        expect(cart.isPurchasedEmpty());
    });

    it('should know if all is purchased', () => {
        const cart = new Cart()
            .toggle('Docker')
            .toggle('Experience')
            .toggle('Jenkins')
            .toggle('Me')
            .toggle('NodeJS')
            .toggle('React')
            .toggle('SCSS');

        expect(cart.allPurchased());
    });
});