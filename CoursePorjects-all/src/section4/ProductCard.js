import React, { useState } from 'react';

const ProductCard = ({ name, price, specs, stock, image, onAddToFavorites }) => {
    const [currentStock, setCurrentStock] = useState(stock);

    const handleBuy = () => {
        if (currentStock > 0) {
            setCurrentStock(currentStock - 1);
            console.log('تم الشراء');
        } else {
            console.log('Out of stock');
        }
    };

    return (
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg rounded-lg p-4 m-4 text-white">
            <img src={image} alt={name} className="w-full h-32 object-cover rounded-t-lg" />
            <div className="p-4">
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-gray-100">${price}</p>
                <p className="text-gray-200 text-sm">{specs}</p>
                <p className="text-gray-200 text-sm">Stock: {currentStock}</p>

                <div className="mt-4 space-x-2">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                        onClick={onAddToFavorites}
                    >
                        Add to Favorites
                    </button>

                    <button
                        className={`${currentStock > 0 ? 'bg-green-500' : 'bg-gray-400'
                            } text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300`}
                        onClick={handleBuy}
                        disabled={currentStock === 0}
                    >
                        {currentStock > 0 ? 'Buy' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
