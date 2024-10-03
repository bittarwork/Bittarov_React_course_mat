import React from 'react';

function DisplayText({ text }) {
    return (
        <div className="text-center p-4">
            <h1 className="text-2xl font-bold text-gray-800">{text}</h1>
        </div>
    );
}

export default DisplayText;
