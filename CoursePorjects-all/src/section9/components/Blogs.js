import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // حالة التحميل
    const [searchTerm, setSearchTerm] = useState(''); // حالة البحث

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setBlogs(response.data);
                setLoading(false); // إيقاف التحميل بعد جلب البيانات
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); // إيقاف التحميل حتى في حالة الخطأ
            });
    }, []);

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                {/* مؤشر تحميل دائري */}
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-8">Latest Blogs</h1>

            {/* مربع البحث */}
            <div className="mb-6">
                <input
                    type="text"
                    className="w-full p-4 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search blogs by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* عرض المدونات بناءً على نتائج البحث */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.slice(0, 6).map((blog) => (
                        <div key={blog.id} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
                            <p className="text-gray-600 mt-4">{blog.body.substring(0, 100)}...</p>
                            <Link
                                to={`/blogs/${blog.id}`}
                                className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            >
                                Read More
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-white text-lg">No blogs found matching your search.</p>
                )}
            </div>
        </div>
    );
}

export default Blogs;
