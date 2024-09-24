import React, { useState, useReducer } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Favorites from './components/Favorites';

const App = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 100, image: 'https://via.placeholder.com/150', rating: 0 },
        { id: 2, name: 'Product 2', price: 200, image: 'https://via.placeholder.com/150', rating: 0 },
        { id: 3, name: 'Product 3', price: 300, image: 'https://via.placeholder.com/150', rating: 0 },
        { id: 4, name: 'Product 4', price: 400, image: 'https://via.placeholder.com/150', rating: 0 },
        { id: 5, name: 'Product 5', price: 500, image: 'https://via.placeholder.com/150', rating: 0 },
    ]);

    const [favorites, setFavorites] = useState([]);
    const [cart, dispatch] = useReducer(cartReducer, []);

    // تعيين التقييمات للمنتجات
    const setProductRating = (productId, newRating) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === productId ? { ...product, rating: newRating } : product
            )
        );
    };

    // إضافة منتج إلى سلة الشراء
    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    // إضافة منتج إلى قائمة المفضلة مع التأكد من عدم وجوده مسبقاً
    const addToFavorites = (product) => {
        const isAlreadyFavorite = favorites.some(fav => fav.id === product.id);
        if (!isAlreadyFavorite) {
            setFavorites(prevFavorites => [...prevFavorites, product]);
        } else {
            console.log(`${product.name} is already in favorites.`);
        }
    };

    // إزالة منتج من قائمة المفضلة
    const removeFromFavorites = (productId) => {
        setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== productId));
    };

    return (
        <div className="container mx-auto p-6 bg-gradient-to-r from-blue-50 to-blue-200 min-h-screen">
            <h1 className="text-5xl font-bold text-center mb-10 text-blue-800">E-commerce Training Store</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProductList
                    products={products}
                    addToCart={addToCart}
                    addToFavorites={addToFavorites}
                    setProductRating={setProductRating}
                    favorites={favorites} // تمرير المفضلات للتحكم في حالة الأزرار
                />

                <Cart cart={cart} dispatch={dispatch} />

                <Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />
            </div>
        </div>
    );
};

// Reducer لسلة الشراء
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemInCart = state.find(item => item.id === action.payload.id);
            if (itemInCart) {
                return state.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...state, { ...action.payload, quantity: 1 }];

        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload.id);

        case 'INCREASE_QUANTITY':
            return state.map(item =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            );

        case 'DECREASE_QUANTITY':
            return state.map(item =>
                item.id === action.payload.id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );

        default:
            return state;
    }
};

export default App;
