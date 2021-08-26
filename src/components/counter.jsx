/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Counter = () => {
    // eslint-disable-next-line no-unused-vars
    const [count, setCount] = useState(0);
    const tags = ['tag1','tag2','tag3'];

    const formCount = () => {
        return count === 0 ? "Ноль" : count
    };
    const getBageclasses = () => {
        let classes = "badge m-2 bg-";
        classes += count === 0 ? "danger" : "primary";
        return classes;
    };
    const renderTags = () => {
        if (tags.length === 0) return 'Тегов не найдено';
        return tags.map((tag) => <li key = {tag}>{tag}</li>);
    };
    const handleIncrement = (productId) => {
        console.log(productId);
        setCount(count + 1);
    };
    const handleDecrement = (productId) => {
        if (count === 0) return;
        console.log(productId);
        setCount(count - 1);
    };
    return(
        <>
            {renderTags()}
            <span className = {getBageclasses()}>{formCount()}</span>
            <button
                onClick = {() => handleIncrement({ id:1 })} 
                className = 'btn btn-secondary btn-sm'>
                Increment
            </button>
            <button
                onClick = {() => handleDecrement({ id:1 })} 
                className = 'btn btn-secondary btn-sm'>
                Decrement
            </button>
        </>
    );
};
 
export default Counter;

