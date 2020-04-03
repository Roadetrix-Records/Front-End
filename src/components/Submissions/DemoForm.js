import React from 'react';
import { Form } from './styles';

export default () => {
    return(
        <Form>
            <div className='name'>
                <div>
                    <label>First Name</label>
                    <input/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input/>
                </div>
            </div>
            <div className='margin'>
                <label>Email</label>
                <input/>
            </div>
            <div className='margin'>
                <label>Demo Link</label>
                <input/>
            </div>
            <div className='button'>Submit Demo</div>
        </Form>
    );
}