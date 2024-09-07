// NameForm.js
import React, { useState } from 'react';

export function NameForm() {

    const [name, setName] = useState('');

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>اسمك هو: {name}</p>
        </div>
    );
}
