import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';

function Raumplaner() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/login'} element={<Login/>} />

            </Routes>
            
        </BrowserRouter>
        
    );
}

export default Raumplaner;

if (document.getElementById('root')) {
    ReactDOM.render(<Raumplaner />, document.getElementById('root'));
}