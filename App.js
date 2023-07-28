import React from 'react';
import ReactDOM from 'react-dom/client';


const val = 15;

function Heading() {
    return <h1>Namaste React {val}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading />);