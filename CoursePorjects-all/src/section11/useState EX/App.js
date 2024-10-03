import React, { useState } from 'react';
import DisplayText from './DisplayText';
import Button from './Button';

function App() {
    const [text, setText] = useState('Hello, World!');

    const handleClick = () => {
        setText('You clicked the button!');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                {/* Passing the text as props */}
                <DisplayText text={text} />
                {/* Button component with click handler */}
                <Button onClick={handleClick} />
            </div>
        </div>
    );
}

export default App;
