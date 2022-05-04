import axios from 'axios';
import React, {useState} from 'react'
import {useForm} from '../../js/hooks/useForm'

const Register = (props) => {

  const [forename, setForename] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const { setErrors, renderFieldError, navigate } = useForm();

  const makeRequest = (e) => {
    e.preventDefault();
    setErrors(null);

    axios.post('api/register', {
      forename,
      lastname,
      username,
      email,
      password,
      password_confirmation: passwordConfirmation,
    }).then(response => {
      console.log(response.data.user);

      if(response.data.user){
        alert("Registriere erfolgreich");
        navigate('/login')
      }
    }).catch(error => {
      console.log(error);

      if(error.response){
        if(error.response.data.errors) setErrors(error.response.data.errors);
      }
    })
  }

  return (
    <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Register</div>
                    <div className="card-body">
                        <form method="POST" action="#" onSubmit={makeRequest}>
                            <div className="row mb-3">
                                <label htmlFor="name" className="col-md-4 col-form-label text-md-end">Vorname</label>
                                <div className="col-md-6">
                                    <input id="forename" type="text"
                                           className="form-control" 
                                           name="forename" required autoComplete="forename" autoFocus 
                                           value={forename} onChange={e => setForename(e.target.value)}/>
                                           {renderFieldError('forename')}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="name" className="col-md-4 col-form-label text-md-end">Nachname</label>
                                <div className="col-md-6">
                                    <input id="lastname" type="text"
                                           className="form-control" 
                                           name="lastname" required 
                                           autoComplete="lastname" autoFocus 
                                           value={lastname} onChange={e => setLastname(e.target.value)}/>
                                           {renderFieldError('lastname')}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="name" className="col-md-4 col-form-label text-md-end">Username</label>
                                <div className="col-md-6">
                                    <input id="username" type="text"
                                           className="form-control" 
                                           name="username" required 
                                           autoComplete="username" autoFocus 
                                           value={username} onChange={e => setUsername(e.target.value)}/>
                                           {renderFieldError('username')}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="email" className="col-md-4 col-form-label text-md-end">E-Mail Addresse</label>
                                <div className="col-md-6">
                                    <input id="email" type="email"
                                           className="form-control" 
                                           name="email" required 
                                           autoComplete="email" 
                                           value={email} onChange={e => setEmail(e.target.value)}/>
                                           {renderFieldError('email')}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Passwort</label>
                                <div className="col-md-6">
                                    <input id="password" type="password"
                                           className="form-control"
                                           name="password" required autoComplete="new-password"
                                           value={password} onChange={e => setPassword(e.target.value)} />
                                           {renderFieldError('password')}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-end">Passwort bestätigen</label>
                                <div className="col-md-6">
                                    <input id="password-confirm" type="password" className="form-control"
                                           name="password_confirmation" required autoComplete="new-password" 
                                           value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}  
                                           />
                                           {renderFieldError('password_confirmation')}
                                </div>
                            </div>
                            <div className="row mb-0">
                                <div className="col-md-6 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
                                        Registrieren
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Register