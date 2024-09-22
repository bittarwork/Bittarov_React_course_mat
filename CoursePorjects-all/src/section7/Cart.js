import React, { useReducer } from 'react';
import 'tailwindcss/tailwind.css'; // تأكد من استيراد Tailwind CSS

// تعريف المخفض (Reducer) لإدارة حالة العربة
function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.find(item => item.id === action.item.id);
            if (existingItem) {
                return state.map(item =>
                    item.id === action.item.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...state, { ...action.item, quantity: 1 }];

        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.id);

        case 'INCREASE_QUANTITY':
            return state.map(item =>
                item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
            );

        case 'DECREASE_QUANTITY':
            return state.map(item =>
                item.id === action.id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );

        default:
            return state;
    }
}

function ProductCard({ product, dispatch }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-64">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600 mt-1">${product.price}</p>
            <button
                onClick={() => dispatch({ type: 'ADD_TO_CART', item: product })}
                className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
                أضف إلى العربة
            </button>
        </div>
    );
}

function Cart({ cart, dispatch }) {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full">
            <h2 className="text-xl font-bold mb-4">عربة التسوق</h2>
            {cart.length === 0 ? (
                <p className="text-gray-600">العربة فارغة.</p>
            ) : (
                <>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id} className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-600">
                                        ${item.price} × {item.quantity}
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => dispatch({ type: 'DECREASE_QUANTITY', id: item.id })}
                                        className="bg-gray-300 px-2 py-1 rounded-md"
                                    >
                                        -
                                    </button>
                                    <span className="px-2">{item.quantity}</span>
                                    <button
                                        onClick={() => dispatch({ type: 'INCREASE_QUANTITY', id: item.id })}
                                        className="bg-gray-300 px-2 py-1 rounded-md"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => dispatch({ type: 'REMOVE_FROM_CART', id: item.id })}
                                        className="ml-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
                                    >
                                        إزالة
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <p className="font-bold text-lg">الإجمالي: ${total.toFixed(2)}</p>
                    </div>
                </>
            )}
        </div>
    );
}

function ShoppingCartApp() {
    const [cart, dispatch] = useReducer(cartReducer, []);

    const products = [
        { id: 1, name: 'منتج 1', price: 19.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'منتج 2', price: 29.99, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'منتج 3', price: 9.99, image: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">متجر المنتجات</h1>
            <div className="flex space-x-4 mb-8">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} dispatch={dispatch} />
                ))}
            </div>
            <Cart cart={cart} dispatch={dispatch} />
        </div>
    );
}

export default ShoppingCartApp;
