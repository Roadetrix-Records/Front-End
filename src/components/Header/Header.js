import React, { useState, useEffect, useCallback } from 'react';

// Dependency Imports
import { useHistory } from 'react-router-dom';

// Component Imports
import Desktop from './Desktop';
import Mobile from './Mobile';

// Style Imports
import { Header } from './styles';
import logoBlack from '../../assets/logo-black.png';
import logoGrey from '../../assets/logo-grey.png';

export default ({dark}) => {
    const [ selection, setSelection ] = useState(-1);
    const [ open, setOpen ] = useState(false);
    const history = useHistory();

    const handleClick = e => {
        setSelection(e.target.id * 1);
    }

    const toggleOpen = () => {
        setOpen(!open);
    }

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [])

    useEffect(() => {
        if(history.location.pathname.includes('/releases')){
            setSelection(1);
        }else{
            switch(history.location.pathname){
                case '/':
                    setSelection(0);
                    break;
                case '/submissions':
                    setSelection(2);
                    break;
                case '/about':
                    setSelection(3);
                    break;
                case '/contact':
                    setSelection(4);
                    break;
                default:
                    break;
            }
        } 
    }, [history.location.pathname])

    useEffect(() => {
        window.addEventListener('resize', handleClose);
        return () => window.removeEventListener('resize', handleClose);
    }, [ handleClose ]);

    return (
        <Header dark={dark}> 
            <img src={dark ? logoGrey : logoBlack} alt='Roadetrix Logo'/>
            <Desktop dark={dark} handleClick={handleClick} selection={selection}/>
            <Mobile dark={dark} open={open} toggleOpen={toggleOpen} handleClick={handleClick} selection={selection}/>
        </Header>
    );
}