import React, { useState } from "react";
import './fruitCounter.css';


function Counter({emoji, title}) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div>
            <span className="button">
                <h5>{emoji} {title}</h5>
                <button onClick={handleDecrement}>-</button>
                {count}
                <button onClick={handleIncrement}>+</button>
            </span>
        </div>
    );
}

export default Counter;