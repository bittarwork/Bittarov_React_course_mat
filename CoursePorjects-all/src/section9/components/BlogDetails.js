import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

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
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="relative">
                        {/* صورة المقال أو صورة رمزية */}
                        <img
                            src="https://i.pinimg.com/736x/01/de/75/01de759592ca8c1c396e5cd73e6df4a2.jpg"
                            alt="Blog"
                            className="w-full object-cover h-64"
                        />
                        {/* تراكب Gradient فوق الصورة */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
                        {/* عنوان المقال */}
                        <h1 className="absolute bottom-0 left-0 p-6 text-4xl font-bold text-white">
                            {blog.title}
                        </h1>
                    </div>

                    {/* محتويات المدونة */}
                    <div className="p-8 space-y-6">
                        {/* وصف المدونة */}
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {blog.body}
                        </p>

                        {/* معلومات إضافية */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                            <div className="bg-blue-500 p-4 rounded-lg text-white shadow-lg">
                                <h3 className="text-lg font-bold">Author:</h3>
                                <p className="mt-2">osama bittar</p>
                            </div>
                            <div className="bg-green-500 p-4 rounded-lg text-white shadow-lg">
                                <h3 className="text-lg font-bold">Date:</h3>
                                <p className="mt-2">September 28, 2024</p>
                            </div>
                            <div className="bg-red-500 p-4 rounded-lg text-white shadow-lg">
                                <h3 className="text-lg font-bold">Category:</h3>
                                <p className="mt-2">Tech</p>
                            </div>
                        </div>

                        {/* زر الرجوع */}
                        <div className="text-center mt-10">
                            <a
                                href="/blogs"
                                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
                            >
                                Back to Blogs
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center text-xl">Blog not found</p>
            )}
        </div>
    );
}

export default BlogDetails;
