import React, { useState } from 'react';
import { Login } from './styles';

export default () => {
    const [ credentials, setCredentials ] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        console.log(credentials);
        // TODO: Handle authentication and redirect
        setCredentials({
            username: '',
            password: ''
        })
    }

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Login>
            <h1>Roadetrix Records Admin Login</h1>
            <div className='form-container'>            
                <form>
                    <label>Username</label>
                    <input
                        name='username'
                        value={credentials.username}
                        onChange={handleChange}
                    />
                    <label>Password</label>
                    <input
                        name='password'
                        type='password'
                        value={credentials.password}
                        onChange={handleChange}
                    />
                    <div className='login-btn' onClick={handleSubmit}>Login</div>
                </form>
            </div>
        </Login>
    )
}