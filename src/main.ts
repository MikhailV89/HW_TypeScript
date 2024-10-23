
type Product = {
    name: string;
    price: number;
    available: boolean;
};

function typeProduct (product: Product): string {
    const isAvailable = product.available ? 'Yes' : 'No';
    return `Your product request: Item - ${product.name}, price - ${product.price}, available - ${isAvailable}`
}

const product: Product = {
    name: 'Laptop',
    price: 32000,
    available: true,
};

const result = typeProduct(product);
console.log(result);
