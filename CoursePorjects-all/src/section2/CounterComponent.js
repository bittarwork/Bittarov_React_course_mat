import React, { useState } from 'react';
function CounterComponent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>لقد ضغطت على الزر {count} مرات</p>
            <button onClick={() => setCount(count + 1)}>
                اضغط لزيادة العدد
            </button>
        </div>
    );
}

export default CounterComponent;