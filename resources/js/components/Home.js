import React, {useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import '../../sass/home.scss';
import AuthContext from '../context/authContext'


function Home() {

    const {authData} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!authData.signedIn){
            navigate('/login');
        }
    }, []);


    return (
        <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Laravel React Auth</div>
                        <div className="card-body">
                        {
                            authData.signedIn && authData.user && (
                                <>
                                    <div>Hi {authData.user.forename}</div>
                                </>
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Home;
