import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart, addToFavorites, setProductRating }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6 ">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        addToFavorites={addToFavorites}
                        setProductRating={setProductRating}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
