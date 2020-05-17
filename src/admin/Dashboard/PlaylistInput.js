import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default (props) => {
    const [ link, setLink ] = useState('');

    const handleChange = e => {
        setLink(e.target.value);
    }

    // TODO: Validate Playlist URL
    const handleUpdate = e => {
        axios.put('http://localhost:5000/playlists', {
            link,
            id: e.target.id
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    useEffect(() => {
        setLink(props.url);
    }, [])

    return (
        <form>
            <input
                name={`link${props.id}`}
                type='text'
                onChange={handleChange}
                value={link}
            />
            <div onClick={handleUpdate} className='update-btn' id={props.id}>
                <p>Update</p>
            </div>
        </form>
    );
}