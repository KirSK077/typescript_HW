export class Cart {
    id: number;
    name: string;
    price: number;
    discount: number;

    private _items: {id: number, name: string, price: number, discount: number}[] = [];

    constructor(id: number, name: string, price: number, discount: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.discount = discount
    }

    add(item: {id: number, name: string, price: number, discount: number}): void {
        this._items.push(item);
    }

    get() {
        return [...this._items];
    }

    calculateTotal(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
    }

    calculateTotalWithoutDiscount(): number {
        return this.calculateTotal()
    }

    calculateTotalWithDiscount(): number {
        return this._items.reduce((total, item) => total + item.price * (1 - item.discount / 100), 0);
    }

    removeItemById(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}