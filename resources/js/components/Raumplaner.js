import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import Login from './Login';
import Home from './Home'
import Register from './Register';
import {useAuth} from '../hooks/useAuth'
import AuthContext from '../context/authContext'

function Raumplaner() {

    const {userData} = useAuth();
    const [authData, setAuthData] = useState({signedIn: userData.signedIn, user: userData.user});

    return (
            <AuthContext.Provider value={{authData, setAuthData}}>
                <Layout>
                    <Routes>
                        <Route path={'/'} element={<Home/>} />
                        <Route path={'/login'} element={<Login/>} />
                        <Route path={'/register'} element={<Register/>} />
                    </Routes>
                </Layout>
            </AuthContext.Provider>
    );
}
function Root(){
    return(
        <BrowserRouter>
            <Raumplaner/>
        </BrowserRouter>
    )
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}