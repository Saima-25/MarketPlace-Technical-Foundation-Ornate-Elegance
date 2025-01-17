
Product Endpoints
GET /products: Fetch all jewellery products.
Response Example:
[
{
"id": "1",
"name": "Diamond Ring",
"price": 10000.0,
"stock": 50
}
]
GET /products/{id}: Fetch a jewellery product by ID.
Response Example:
{
"id": "1",
"name": "Diamond Ring",
"price": 10000.0,
"stock": 50
}
POST /products: Save new jewellery product details.
Request Example:
{
"name": "Diamond Ring",
"price": 10000.0,
"stock": 50
}
PUT /products/{id}: Update a jewellery product by ID.
Request Example:
{
"name": "Diamond Ring",
"price": 12000.0,
"stock": 50
}
DELETE /products/{id}: Delete a jewellery product by ID.
Response Example:
{
"message": "Product deleted successfully"
}
Order Endpoints
POST /orders: Save new order details.
Request Example:
{
"customerId": "123",
"products": ["1", "2"],
"total": 20000.0
}
GET /orders: Fetch all orders.
Response Example:
[
{
"id": "1",
"customerId": "123",
"total": 20000.0,
"status": "pending"
}
]
GET /orders/{id}: Fetch an order by ID.
Response Example:
{
"id": "1",
"customerId": "123",
"total": 20000.0,
"status": "pending"
}
PUT /orders/{id}: Update an order by ID.
Request Example:
{
"customerId": "123",
"total": 25000.0,
"status": "shipped"
}
DELETE /orders/{id}: Delete an order by ID.
Response Example:
{
"message": "Order deleted successfully"
}
Rental Endpoints (Agar aap rental service bhi provide kar rahe hain)
GET /rentals: Fetch all available rental jewellery.
Response Example:
[
{
"id": "1",
"name": "Diamond Necklace",
"rentalPrice": 5000,
"availability": true
}
]
POST /rentalOrders: Save new rental booking details.
Request Example:
{
"customerId": "123",
"jewelleryId": "1",
"rentalDuration": 5,
"total": 25000
}
GET /rentalOrders: Fetch all rental orders.
Response Example:
[
{
"id": "1",
"customerId": "123",
"jewelleryId": "1",
"rentalDuration": 5,
"total": 25000
}
]
Shipment Endpoints
GET /shipment: Fetch the shipment status for an order.
Response Example:
{
"orderId": "123",
"status": "In Transit"
}
POST /shipment: Update the shipment status for an order.
Request Example:
{
"orderId": "123",
"status": "Delivered"
}