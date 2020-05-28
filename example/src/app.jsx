import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-ez-carousel';

function App() {
    return (
        <Carousel test />
    );
}

function root() {
    return (
        <App />
    );
}

ReactDOM.render(
    root(),
    document.getElementById('content'),
    () => {}
);