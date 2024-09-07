import React from 'react';

export default function Task({ task, onRemove }) {
    return (
        <li>
            {task}
            <button onClick={onRemove}>إزالة</button>
        </li>
    );
}
