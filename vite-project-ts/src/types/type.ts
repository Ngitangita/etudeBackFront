export interface ProductType{
    id?: number,
    productName: string,
    description: string,
    price: DoubleRange,
    currentStock: number
}

export interface ClientType {
    id?: number,
    firstName: string,
    lastName: string,
    address: string,
    phoneNumber: number,
    email: string
}

export interface EmployeeType extends ClientType{
    position: string
}

export interface OrderType{
    id?: number,
    clintId: ClientType,
    employeeId: EmployeeType,
    orderDate: Date,
    orderStatus: string
}

export interface OrderDetailType{
    id?: number,
    orderId: OrderType,
    productId: ProductType,
    quantityOrdered: number,
    unitPrice: DoubleRange
}

export interface StockType{
    id?: number,
    productId: ProductType,
    quantityInStock: number,
    lastUpdated: Date
}

