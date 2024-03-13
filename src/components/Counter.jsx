import React, {useState} from 'react';

const Counter = () => {
    const [count , setCount] = useState(1);


    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

    return(
        <div className={'button moduel'}>
            <h2>{count}</h2>

            <button onClick={increment}> like +</button>
            <button onClick={decrement}> like -</button>
        </div>
    );
};

export default Counter;