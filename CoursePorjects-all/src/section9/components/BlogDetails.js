import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useTheme } from '../context/ThemeContext';

function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                setBlog(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
            </div>
        );
    }

    return (
        <div className="">
            {blog ? (
                <div className={`max-w-4xl mx-auto rounded-lg shadow-xl overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
                    <div className="relative">
                        <img
                            src="https://i.pinimg.com/736x/01/de/75/01de759592ca8c1c396e5cd73e6df4a2.jpg"
                            alt="Blog"
                            className="w-full object-cover h-64"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
                        <h1 className="absolute bottom-0 left-0 p-6 text-4xl font-bold text-white">
                            {blog.title}
                        </h1>
                    </div>

                    <div className="p-8 space-y-6">
                        <p className={`${theme === 'light' ? 'text-gray-700' : 'text-white'} text-lg leading-relaxed`}>
                            {blog.body}
                        </p>
                    </div>
                </div>
            ) : (
                <p className="text-center text-xl">Blog not found</p>
            )}
        </div>
    );
}

export default BlogDetails;
