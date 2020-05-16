import React, { useState } from 'react';

export default () => {
    const [ link, setLink ] = useState('');

    const handleChange = e => {
        setLink(e.target.value);
    }

    const handleUpdate = () => {
        console.log(link);
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