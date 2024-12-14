import { OrderStatus, PaymentType } from './OrderEnums';
import { Order } from './OrderInterfaces';

const orders: Order[] = [
    { id: '1', amount: 1250, status: OrderStatus.Processing, paymentType: PaymentType.CreditCard },
    { id: '2', amount: 2000, status: OrderStatus.Shipped, paymentType: PaymentType.BankTransfer },
    { id: '3', amount: 1900, status: OrderStatus.Pending, paymentType: PaymentType.BankTransfer },
];

const updateOrderStatus = (
    order: Order,
    getStatus: (currentStatus: OrderStatus) => OrderStatus
): Order => {
    const newStatus = getStatus(order.status);
    const updatedOrder = { ...order, status: newStatus };
    console.log(`Статус замовлення ID ${order.id} оновлено до: ${newStatus}`);
    return updatedOrder;
};

const getOrdersByStatus = (orders: Order[], status: OrderStatus): Order[] => {
    return orders.filter(order => order.status === status);
};


const updatedOrder = updateOrderStatus(orders[0], currentStatus => {
    if (currentStatus === OrderStatus.Processing) {
        return OrderStatus.Shipped;
    }
    return currentStatus;
});
console.log('Оновлене замовлення:', updatedOrder);

const pendingOrders = getOrdersByStatus(orders, OrderStatus.Pending);
console.log('Замовлення зі статусом Pending:', pendingOrders);
