import { Cart } from '../service/Cart';

describe('Cart Class', () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart(1, 'Test Cart', 100, 10);
    });

    test('Должен быть создан с корректными свойствами', () => {
        expect(cart.id).toBe(1);
        expect(cart.name).toBe('Test Cart');
        expect(cart.price).toBe(100);
        expect(cart.discount).toBe(10);
    });

    test('Должен добавить товар в корзину', () => {
        const item = { id: 1, name: 'Item 1', price: 50, discount: 0 };
        cart.add(item);
        expect(cart.get()).toContain(item);
    });

    test('Должен вернуть вернуть товары из корзины', () => {
        const item1 = { id: 1, name: 'Item 1', price: 50, discount: 0 };
        const item2 = { id: 2, name: 'Item 2', price: 30, discount: 0 };
        cart.add(item1);
        cart.add(item2);
        expect(cart.get()).toEqual([item1, item2]);
    });

    test('Должен посчитать общую стоимость корзины', () => {
        const item1 = { id: 1, name: 'Item 1', price: 50, discount: 0 };
        const item2 = { id: 2, name: 'Item 2', price: 30, discount: 0 };
        cart.add(item1);
        cart.add(item2);
        expect(cart.calculateTotal()).toBe(80);
    });

    test('Должен посчитать общую стоимость корзины без скидки', () => {
        const item1 = { id: 1, name: 'Item 1', price: 50, discount: 0 };
        const item2 = { id: 2, name: 'Item 2', price: 30, discount: 0 };
        cart.add(item1);
        cart.add(item2);
        expect(cart.calculateTotalWithoutDiscount()).toBe(80);

    });

    test('Должен посчитать общую стоимость корзины со скидкой', () => {
        const item1 = { id: 1, name: 'Item 1', price: 100, discount: 10 }; 
        cart.add(item1);
        expect(cart.calculateTotalWithDiscount()).toBe(90); 
    });

    test('Должен удалить товар по ID', () => {
        const item1 = { id: 1, name: 'Item 1', price: 50, discount: 0 };
        const item2 = { id: 2, name: 'Item 2', price: 30, discount: 0 };
        cart.add(item1);
        cart.add(item2);
        cart.removeItemById(1);
        expect(cart.get()).not.toContain(item1);
        expect(cart.get()).toContain(item2);
    });
});
