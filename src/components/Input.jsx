import React, {useState} from 'react';

const Input = () => {

    const [value , setValue] = useState('new')

    return (
        <div className={'input'}>
            <h1>{value}</h1>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>

        </div>
    );
};

export default Input;