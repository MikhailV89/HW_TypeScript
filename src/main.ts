// 1
interface Address {
    street: string;
    city: string;
    zipCode: number;
}

interface User {
    name: string;
    age: number;
}

interface UserWithAddress extends Address, User {
    email: string;
}

const userProfile: UserWithAddress = {
    street: 'Broadway41',
    city: 'Odessa',
    zipCode: 123,
    name: 'Valera',
    age: 23,
    email: 'rrrt@com'
}

console.log(userProfile);

// 2
interface Product {
    name: string;
    price: number;
    category: {
        categoryName: string;
        categoryId: number;
    };
}

interface Order {
    orderId: number;
    userId: number;
    products: Product[];
}

type OrderArray = Order[];

const orders: OrderArray = [
    {
        orderId: 1,
        userId: 11,
        products: [
            {
                name: "Laptop",
                price: 1200,
                category: {
                    categoryName: "Electronics",
                    categoryId: 1,
                },
            },
            {
                name: "Microwave",
                price: 25,
                category: {
                    categoryName: "Electronics",
                    categoryId: 2,
                },
            },
        ],
    },
    {
        orderId: 2,
        userId: 32,
        products: [
            {
                name: "Table",
                price: 50,
                category: {
                    categoryName: "Home supplies",
                    categoryId: 3,
                },
            },
        ],
    },
    {
        orderId: 3,
        userId: 43,
        products: [
            {
                name: "Book",
                price: 25,
                category: {
                    categoryName: "Books",
                    categoryId: 4,
                },
            },
            {
                name: "Nuts",
                price: 5,
                category: {
                    categoryName: "Food",
                    categoryId: 5,
                },
            },
        ],
    },
];

console.log(orders);

// 3
interface Person {
    firstName: string;
    lastName: string;
    middleName?: string;
}

function getFullName(person: Person) {
    if (!person.middleName) {
        return `${person.firstName} ${person.lastName}`;
    }

    return `${person.firstName} ${person.middleName} ${person.lastName}`;
}

const person1: Person = {
    firstName: 'Alice',
    lastName: 'Cooper'
}

const person2: Person = {
    firstName: 'Oleg',
    lastName: 'Dou',
    middleName: 'Petrovich',
}

console.log(getFullName(person1));
console.log(getFullName(person2));

// 4

interface Settings {
    theme: "light" | "dark";
    notifications: boolean;
    autoSave: {
        enabled: boolean;
        interval: number;
    };
}

function applySettings(settings: Settings): void {
    console.log(`Theme set to: ${settings.theme}`);

    if (settings.notifications) {
        console.log("Notifications are enabled.");
    } else {
        console.log("Notifications are disabled.");
    }

    if (settings.autoSave.enabled) {
        console.log(`AutoSave is enabled. Interval: ${settings.autoSave.interval} minutes.`);
    } else {
        console.log("AutoSave is disabled.");
    }
}

const mySettings: Settings = {
    theme: "dark",
    notifications: true,
    autoSave: {
        enabled: true,
        interval: 7,
    },
};

applySettings(mySettings);
