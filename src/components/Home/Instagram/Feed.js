import React from 'react';
import { InstaFeed } from '../styles';
import InstagramCard from './InstagramCard';

const dummyImages = [
    {
        id: 1,
        imgUrl: 'https://instagram.fapa1-2.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/91694175_169833104102035_8355306674606947747_n.jpg?_nc_ht=instagram.fapa1-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=lgn6gzcJs4sAX-XNbJv&oh=f3bc44fec69e06eeb3350283396d82e7&oe=5E8CBA7C'
    },
    {
        id: 2,
        imgUrl: 'https://instagram.fapa1-2.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/91516301_261961404807638_7639861560875420373_n.jpg?_nc_ht=instagram.fapa1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=LTpnhdiB1e4AX9U1OrT&oh=fbd84654d8f8af4567c194e7581dfc64&oe=5E8CC442'
    },
    {
        id: 3,
        imgUrl: 'https://instagram.fapa1-2.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/91290522_554741965169210_1789069735057083993_n.jpg?_nc_ht=instagram.fapa1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=hiaCCkG5G38AX_1V4hq&oh=ace670b5ba84798833df9dbefbb05906&oe=5E8CF910'
    }
]

export default () => {
    return (
        <InstaFeed>
            <h2>Instagram</h2>
            <div>
                
            </div>
        </InstaFeed>
    );
}