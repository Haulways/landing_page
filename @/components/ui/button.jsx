import React from 'react';

const Button = (props) => {
    const { children, onClick } = props;
    return (
        <div>
            <button onClick={onClick}>jhdg{children}</button>
        </div>
    );
};

export  { Button };