// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // State to store the posts
  const [posts, setPosts] = useState([]);
  // State to store loading state
  const [loading, setLoading] = useState(true);
  // State to store error messages
  const [error, setError] = useState(null);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch data
    const fetchPosts = async () => {
      try {
        // Attempt to fetch data from the API
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // Update state with the fetched data
        console.log(response)
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        // Set error state if there is an issue with fetching data
        setError(err.message);
        setLoading(false);
      }
    };

    // Call the fetchPosts function
    fetchPosts();

    // The empty dependency array means that useEffect will run only once when the component mounts
  }, []);

  // Display the content
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Posts List</h1>

      {/* Explanation of how useEffect works */}
      <p className="text-lg text-gray-800 mb-4">
        <strong>Notes:</strong><br />
        - useEffect runs after the component mounts.<br />
        - The function passed to useEffect runs once the component has mounted.<br />
        - If the dependency array is empty (e.g., []), useEffect runs only once when the component mounts.<br />
        - You can pass variables to the dependency array to make useEffect run whenever those variables change.
      </p>

      {/* Display loading and error states */}
      {loading && <p className="text-lg text-gray-700">Loading data...</p>}
      {error && <p className="text-lg text-red-600">Error occurred: {error}</p>}

      {/* Display the posts */}
      <ul className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        {posts.map(post => (
          <li key={post.id} className="border-b last:border-b-0 p-6">
            <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
