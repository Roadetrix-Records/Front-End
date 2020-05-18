import React, { useState } from 'react';

// Dependency Imports
import axios from 'axios';

// Util Imports
import { BASE_URL } from '../../enviornment';

// Style Imports
import CircularProgress from '@material-ui/core/CircularProgress';
import { Form, Submit } from './styles';

export default () => {
    const [ errors, setErrors ] = useState(null);
    const [ data, setData ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        demoLink: ''
    })
    const [ submitting, setSubmitting ] = useState(false);

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        console.log(data);
        e.preventDefault();
        if(data.firstName || data.lastName || data.email || data.demoLink){
            setSubmitting(true);
            setErrors(null);

            // Axios post request
            axios.post(`${BASE_URL}/submissions`, data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

            setData({
                firstName: '',
                lastName: '',
                email: '',
                demoLink: ''
            })
        }else{
            setErrors('All fields are required');
        }
        setSubmitting(false);
    }
    
    return(
        <Form>
            <div className='name'>
                <div>
                    <label>First Name*</label>
                    <input
                        name='firstName'
                        value={data.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Last Name*</label>
                    <input
                        name='lastName'
                        value={data.lastName}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='margin'>
                <label>Email*</label>
                <input
                    name='email'
                    value={data.email}
                    onChange={handleChange}
                />
            </div>
            <div className='margin'>
                <label>Demo Link*</label>
                <input
                    name='demoLink'
                    value={data.demoLink}
                    onChange={handleChange}
                />
            </div>
            <Submit submitting={submitting} onClick={handleSubmit}>
                {submitting ? <CircularProgress color="inherit" /> : 'Submit Demo'}
            </Submit>
            {errors && <p>{errors}</p>}
        </Form>
    );
}