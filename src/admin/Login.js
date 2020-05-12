import React, { useState } from 'react';
import { Login, UserInput, PasswordInput, UserIcon, LockIcon } from './styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default () => {
    const history = useHistory();
    const [ credentials, setCredentials ] = useState({
        username: '',
        password: ''
    })
    const [ error, setError ] = useState('');
    const [ userFocus, setUserFocus ] = useState(false);
    const [ passFocus, setPassFocus ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submitting');
        // axios.post('http://localhost:5000/auth/login', credentials)
        // .then(res => {
        //     window.localStorage.setItem('adminToken', res.data.token);
        //     setCredentials({
        //         username: '',
        //         password: ''
        //     })
        //     history.push('/admin/dashboard');
        // })
        // .catch(err => {
        //     setError(err.response.data.message);
        // })
    }

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Login>
            <div className='login-container'>
                <h1>ADMIN LOGIN</h1>
                <form>
                    <UserInput focus={userFocus}>
                        <UserIcon/>
                        <input
                            name='username'
                            type='text'
                            value={credentials.username}
                            onChange={handleChange}
                            placeholder='Username'
                        />
                    </UserInput>
                    <PasswordInput focus={passFocus}>
                        <LockIcon/>
                        <input
                            name='password'
                            type='password'
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder='Password'
                        />
                    </PasswordInput>
                    <div className='login-btn' onClick={handleSubmit}>Login</div>
                </form>
            </div>
            {error.length > 0 && <p>{error}</p>}
            {/* <div className='form-container'>            
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
                </form>
            </div> */}
        </Login>
    )
}