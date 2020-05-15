import React, { useState } from 'react';
import { Login, UserInput, PasswordInput, Error, UserIcon, LockIcon } from './styles';
import { useHistory } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

export default () => {
    const history = useHistory();
    const [ credentials, setCredentials ] = useState({
        username: window.localStorage.getItem('roadetrixUser') || '',
        password: window.localStorage.getItem('roadetrixPass') || ''
    })
    const [ error, setError ] = useState('');
    const [ userFocus, setUserFocus ] = useState(false);
    const [ passFocus, setPassFocus ] = useState(false);
    const [ checked, setChecked ] = useState(window.localStorage.getItem('roadetrixRemember') ? true : false);

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/auth/login', credentials)
        .then(res => {
            window.localStorage.setItem('adminToken', res.data.token);
            if(checked){
                window.localStorage.setItem('roadetrixUser', credentials.username);
                window.localStorage.setItem('roadetrixPass', credentials.password);
                window.localStorage.setItem('roadetrixRemember', checked);
            }else{
                window.localStorage.removeItem('roadetrixUser');
                window.localStorage.removeItem('roadetrixPass');
                window.localStorage.removeItem('roadetrixRemember');
            }
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

    const handleFocus = e => {
        if(e.target.name === 'username'){
            setUserFocus(true);
        }else{
            setPassFocus(true);
        }
    }

    const handleBlur = e => {
        if(e.target.name === 'username'){
            setUserFocus(false);
        }else{
            setPassFocus(false);
        }
    }

    const handleCheck= e => {
        setChecked(e.target.checked);
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
                            onFocus={handleFocus}
                            onBlur={handleBlur}
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
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </PasswordInput>
                    <div className='remember-container'>
                    <Checkbox
                        onChange={handleCheck}
                        checked={checked}
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                        <p>Remember Me</p>
                    </div>
                    <div className='btn-container'>
                        <div className='login-btn' onClick={handleSubmit}>Sign In</div>
                    </div>
                </form>
                {error.length > 0 && <Error>{error}</Error>}
            </div>
        </Login>
    )
}