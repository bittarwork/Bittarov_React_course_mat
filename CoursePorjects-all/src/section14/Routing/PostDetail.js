// PostDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from './posts';

function PostDetail() {
    const { id } = useParams();
    const post = posts.find(post => post.id === parseInt(id));

    if (!post) {
        return <p className="text-red-500">Post not found</p>;
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
            <p className="text-gray-700 text-lg mb-6">{post.content}</p>
            <Link to="/" className="text-blue-500 hover:underline">← Back to posts</Link>
        </div>
    );
}

export default PostDetail;
