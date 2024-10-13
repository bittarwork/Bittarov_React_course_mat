// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from './posts';

function Home() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Blog Posts</h1>
            <ul className="space-y-4">
                {posts.map(post => (
                    <li key={post.id} className="p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all">
                        <Link to={`/post/${post.id}`} className="text-blue-500 text-xl font-semibold hover:underline">
                            {post.title}
                        </Link>
                        <p className="text-gray-600 mt-2">{post.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
