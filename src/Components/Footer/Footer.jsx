
import Button from '@mui/material/Button';

import React from 'react';
import './footer.css'
import Icons from './Icons';
import SideBar from './SideBar';

import FooterEnd from './FooterEnd';

const Footer = () => {
  return (
    <>
      <div className="main-container mt-20">
        <div className='footer flex bg-center bg-cover'>
          <div class="basis-9/12 subscibe h-48 flex justify-center items-center">
            <div className='subscribe-text mr-8'>
              <h2 className='text-4xl text-white font-bold'>
                Subscribe <br />
                To <br />
                Newsletter
              </h2>
            </div>
            <div className="join">
              <input type="text" className='input px-3' placeholder='Join' />
            </div>
          </div>
          <div className="basis-3/12 h-48 bg-[#1E1E1E] flex flex-col justify-center items-center">
            <p className='text-white text-xl'>Social Media</p>
            <Icons />
          </div>
        </div>
        <>
      
       <SideBar />
      
       <FooterEnd/>
       </>

      </div>
    </>
  )
}

export default Footer