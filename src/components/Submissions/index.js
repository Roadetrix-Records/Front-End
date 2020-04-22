import React from 'react';
import { Submissions } from './styles';
import squiggle from '../../assets/squiggle.svg'

import DemoForm from './DemoForm';

export default () => {
    return (
        <Submissions>
            <div className='title-container'>
                <h1>Demo Submissions</h1>
                <img src={squiggle} alt=''/>
            </div>
            <section>
                <div className='container'>
                    <div className='text-container'>
                        <h2>Submit your demo</h2>
                        <div className='first'>
                            <p>Would you like to release your</p>
                            <p>music with <span>roadetrix</span>?</p>
                        </div>
                        <div className='second'>
                            <p>Please submit a soundcloud,</p>
                            <p>google drive, dropbox,</p>
                            <p>or youtube link with the</p>
                            <p>following information.</p>
                        </div>
                    </div>
                    <DemoForm/>
                </div>
            </section>
        </Submissions>
    );
}