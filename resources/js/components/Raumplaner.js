import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

function Raumplaner() {
    return (
        <Home/>
    );
}

export default Raumplaner;

if (document.getElementById('root')) {
    ReactDOM.render(<Raumplaner />, document.getElementById('root'));
}