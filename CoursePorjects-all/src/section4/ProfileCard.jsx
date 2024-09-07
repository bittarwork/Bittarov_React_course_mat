// src/components/ProfileCard.js
import React, { useState } from "react";

const ProfileCard = ({ image, name, shortDescription, longDescription }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-6 transform hover:scale-105 transition-transform duration-500 ease-in-out">
      {/* صورة الشخصية */}
      <img
        className="w-full h-56 object-cover rounded-t-lg"
        src={image}
        alt={`${name}'s avatar`}
      />

      {/* اسم الشخص */}
      <div className="font-bold text-2xl mt-4 text-gray-800">{name}</div>

      {/* الوصف القصير */}
      <p className="text-gray-600 text-lg mt-2">{shortDescription}</p>

      {/* زر إظهار المزيد */}
      <button
        onClick={toggleShowMore}
        className="bg-gradient-to-r from-purple-400 to-indigo-500 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded mt-6 focus:outline-none focus:ring-2 focus:ring-purple-300"
      >
        {showMore ? "إخفاء" : "إظهار المزيد"}
      </button>

      {/* عرض الوصف الإضافي بناءً على حالة showMore */}
      {showMore && (
        <p className="text-gray-700 text-lg mt-4 transition-all duration-300 ease-in-out">
          {longDescription}
        </p>
      )}
    </div>
  );
};

export default ProfileCard;
