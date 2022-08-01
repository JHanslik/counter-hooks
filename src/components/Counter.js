import React, { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(50);

    const handleMinusClick = () => {
        count > 0 && setCount(count - 1);
    };
    const handlePlusClick = () => {
        count < 100 && setCount(count + 1);
    };

    return (
        <div>
            <button onClick={handleMinusClick}>-</button>
            <span>{count}</span>
            <button onClick={handlePlusClick}>+</button>
        </div>
    );
}

export default Counter;
