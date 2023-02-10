import React from 'react'
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Icons = () => {
    return (
        <div className="icons flex w-40 text-center justify-around mt-2">
            <Instagram style={{color:"white"}}/>
            <Facebook style={{ color: 'white' }} />
            <Twitter style={{ color: 'white' }} />
        </div>
    )
}

export default Icons