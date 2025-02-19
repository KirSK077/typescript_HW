import Buyable from "../domain/Buyable";
export class Cart implements Buyable {
    constructor (
        public readonly id: number,
        public name: string,
        public price: number,
        public discount: number
    ) {}
    private items: Buyable[] = [];

    add(item: Buyable): void {
        this.items.push(item);
    }

    get(): Buyable[] {
        return [...this.items];
    }

    calculateTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    calculateTotalWithoutDiscount(): number {
        return this.calculateTotal()
    }

    calculateTotalWithDiscount(): number {
        return this.items.reduce((total, item) => total + item.price * (1 - item.discount / 100), 0);
    }

    removeItemById(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }
}