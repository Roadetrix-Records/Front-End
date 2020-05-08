import React, { useState } from 'react';
import { Login } from './styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default () => {
    const history = useHistory();
    const [ credentials, setCredentials ] = useState({
        username: '',
        password: ''
    })
    const [ error, setError ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // TODO: Handle authentication and redirect
        axios.post('http://localhost:5000/auth/login', credentials)
        .then(res => {
            window.localStorage.setItem('adminToken', res.data.token);
            setCredentials({
                username: '',
                password: ''
            })
            history.push('/admin/dashboard');
        })
        .catch(err => {
            setError(err.response.data.message);
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
            {error.length > 0 && <p>{error}</p>}
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