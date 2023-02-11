import React from 'react'
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Icons = () => {
    return (
        <div className="icons flex w-40 text-center justify-around items-start mt-2 lg:ml-6">
            <Instagram style={{color:"white"}}/>
            <Facebook style={{ color: 'white' }} />
            <Twitter style={{ color: 'white' }} />
        </div>
    )
}

export default Icons