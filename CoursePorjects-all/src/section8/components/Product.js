import React, { useState } from 'react';

const Product = ({ product, addToCart, addToFavorites, setProductRating }) => {
    const [rating, setRating] = useState(product.rating);

    const handleRatingChange = (e) => {
        const newRating = parseInt(e.target.value);
        setRating(newRating);
        setProductRating(product.id, newRating);
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-700 text-lg mb-2">${product.price}</p>
            <div className="mb-4">
                <label className="text-gray-600">Rating: </label>
                <input
                    type="number"
                    value={rating}
                    onChange={handleRatingChange}
                    min="0"
                    max="5"
                    className="border rounded p-2 w-16 text-center"
                />
            </div>
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white py-2 px-2 mx-2 rounded-lg hover:bg-blue-500 transition-colors"
                >
                    Add to Cart
                </button>
                <button
                    onClick={() => addToFavorites(product)}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-400 transition-colors"
                >
                    Add to Favorites
                </button>
            </div>
        </div>
    );
};

export default Product;
