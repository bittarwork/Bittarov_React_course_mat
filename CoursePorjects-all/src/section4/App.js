import React, { useState } from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import FavoritesList from './FavoritesList';

const App = () => {
    const [favorites, setFavorites] = useState([]);

    const products = [
        {
            name: 'Product 1',
            price: '29.99',
            specs: 'High quality product',
            stock: 10,
            image: 'https://via.placeholder.com/150'
        },
        {
            name: 'Product 2',
            price: '49.99',
            specs: 'Latest version with features',
            stock: 5,
            image: 'https://via.placeholder.com/150'
        },
        {
            name: 'Product 3',
            price: '49.99',
            specs: 'Latest version with features',
            stock: 5,
            image: 'https://via.placeholder.com/150'
        }, {
            name: 'Product 4',
            price: '49.99',
            specs: 'Latest version with features',
            stock: 5,
            image: 'https://via.placeholder.com/150'
        },
    ];

    const addToFavorites = (productName) => {
        setFavorites((prev) => {
            if (!prev.includes(productName)) {
                return [...prev, productName];
            } else {
                console.log(`${productName} is already in favorites`);
                return prev;
            }
        });
    };

    const removeFromFavorites = (productName) => {
        setFavorites((prev) => prev.filter(item => item !== productName));
    };

    return (
        <div className="font-sans bg-gray-100 min-h-screen">
            <Header />
            <main className="p-4 flex">
                <div className="flex-1">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            {...product}
                            onAddToFavorites={() => addToFavorites(product.name)}
                        />
                    ))}
                </div>
                <div className="flex-1">
                    <FavoritesList favorites={favorites} onRemove={removeFromFavorites} />
                </div>
            </main>
        </div>
    );
};

export default App;