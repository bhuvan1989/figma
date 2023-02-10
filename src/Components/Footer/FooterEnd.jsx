import React from 'react';
import footerlogo from '../../../src/assets/footerlogo.png'

const FooterEnd = () => {
    return (
        <div className="flex footer-end justify-around">
            <div className="basis-9/12 h-36 bg-[#0D0D0D] flex justify-around">
                <div className='logo my-auto'>
                    <img src={footerlogo} alt="" className='w-40' />
                </div>
                <div className="menu my-auto">
                    <ul className='flex text-white justify-between items-center my-auto text-xs'>
                        <li className='px-8'>Best Fruits</li>
                        <li className='px-8'>Social Media</li>
                        <li className='px-8'>More For You</li>
                        <li className='px-8'>Your Shop</li>
                    </ul>
                </div>
            </div>
            <div className='basis-3/12 h-36 bg-black flex items-center justify-center'>
                <p className='text-white text-xs'>
                The Copyright 2022 guide covers 14 jurisdictions. 
                </p>
            </div>
        </div>
    )
}

export default FooterEnd