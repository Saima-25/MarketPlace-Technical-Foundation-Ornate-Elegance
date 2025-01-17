// User Schema
export const userSchema = {
  name: 'user',
  type: 'document',
  fields: [
    { name: 'fullName', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'phoneNumber', type: 'string' },
    { name: 'shippingAddress', type: 'string' },
    { name: 'billingAddress', type: 'string' },
    { name: 'userRole', type: 'string', options: { list: ['customer', 'admin'], layout: 'radio' } },
  ],
};

// Product Schema
export const productSchema = {
  name: 'product',
  type: 'document',
  fields: [
    { name: 'productName', type: 'string' },
    { name: 'price', type: 'number' },
    { name: 'description', type: 'text' },
    { name: 'images', type: 'array', of: [{ type: 'image' }] },
    { name: 'category', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'productName', maxLength: 100 } },
  ],
};

// Order Schema
export const orderSchema = {
  name: 'order',
  type: 'document',
  fields: [
    { name: 'orderID', type: 'string' },
    { name: 'user', type: 'reference', to: [{ type: 'user' }] },
    { name: 'totalPrice', type: 'number' },
    { name: 'productsOrdered', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
    { name: 'orderStatus', type: 'string', options: { list: ['pending', 'shipped', 'delivered', 'canceled'], layout: 'radio' } },
    { name: 'orderDate', type: 'datetime' },
  ],
};

// Payment Schema
export const paymentSchema = {
  name: 'payment',
  type: 'document',
  fields: [
    { name: 'paymentID', type: 'string' },
    { name: 'order', type: 'reference', to: [{ type: 'order' }] },
    { name: 'paymentMethod', type: 'string', options: { list: ['credit card', 'paypal', 'bank transfer'], layout: 'radio' } },
    { name: 'paymentStatus', type: 'string', options: { list: ['pending', 'completed', 'failed', 'canceled'], layout: 'radio' } },
    { name: 'amountPaid', type: 'number' },
    { name: 'paymentDate', type: 'datetime' },
  ],
};
