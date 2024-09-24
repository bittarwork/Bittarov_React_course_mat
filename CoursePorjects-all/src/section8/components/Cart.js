import React from 'react';

const Cart = ({ cart, dispatch }) => {
  // حساب المبلغ الإجمالي
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-blue-700">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">No items in the cart yet.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item })}
                  className="bg-gray-300 text-gray-800 py-1 px-2 rounded-lg"
                >
                  -
                </button>
                <button
                  onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item })}
                  className="bg-gray-300 text-gray-800 py-1 px-2 rounded-lg"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}
                  className="bg-red-500 text-white py-1 px-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 p-4 bg-blue-100 rounded-lg">
            <h3 className="text-xl font-semibold">Total Amount: ${totalAmount.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
