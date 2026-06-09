import React from 'react'
import Herosection from './components/Herosection'
import { useEffect } from 'react';

const Menu = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-green-500/10'>
            <Herosection />
        </div>
    )
}

export default Menu