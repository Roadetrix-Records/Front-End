import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [ link, setLink ] = useState('');

    const handleChange = e => {
        setLink(e.target.value);
    }

    const handleUpdate = () => {
        axios.post('http://localhost:5000/playlists', {link})
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <form>
            <input
                name='link'
                type='text'
                onChange={handleChange}
                value={link}
            />
            <div onClick={handleUpdate} className='update-btn'>
                <p>Update</p>
            </div>
        </form>
    );
}