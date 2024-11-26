import React from 'react';

const CartPage = () => {
  // Dummy product data
  const products = [
    { id: 1, name: 'Apple', price: 1.5, quantity: 3 },
    { id: 2, name: 'Banana', price: 0.8, quantity: 5 },
    { id: 3, name: 'Orange', price: 1.2, quantity: 2 }
  ];

  // Function to calculate the total price
  const calculateTotal = (products) => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const total = calculateTotal(products);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Your Cart</h1>
      
      {/* Cart Items */}
      <div className="space-y-6">
        {products.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty!</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition-all duration-300">
              <div className="flex-1">
                <p className="text-lg font-medium text-gray-800">{product.name}</p>
                <p className="text-sm text-gray-500">Price: ${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">
                  Total: ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 flex justify-between items-center text-xl font-semibold text-gray-800">
        <p className="text-lg text-gray-600">Total: ${total.toFixed(2)}</p>
        <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
