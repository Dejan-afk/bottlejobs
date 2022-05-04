import React from 'react';
import user from '../auth/user'
import logo from '../../../public/images/1.png';
import '../../sass/home.scss';
import {BsSearch} from 'react-icons/bs';

function Home() {

    function search(e){
        let value = e.target.value;
    }

    return (
        <div className="container">
            <div className='header d-flex justify-content-between align-items-center px-2'>
                <img className="logo" src={logo} alt="logo"></img>
                <h2>Raumplaner</h2>
                <button id="login-button" name="login-button" className='btn button'>{user.username}</button>
            </div>

            <div className='flex-row justify-content-center p-2 pt-4 input-group '>
                <div className='d-flex col-md-8'>
                    <input className="form-control " type="search" onSubmit={search} placeholder="Suchen ..."></input>
                    <button className='btn btn-primary'><BsSearch/></button>
                </div>
                    
            </div>

            <div className="row justify-content-center pt-3">
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-header text-center">Raumauswahl</div>

                        <div className="card-body text-center">
                            <div className='row'>Gebäude: A - Raum: 009    default, wird noch mit .map() und Daten gefüllt</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-secondary" type="button" id="filterButton" >
                        Filtern
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
