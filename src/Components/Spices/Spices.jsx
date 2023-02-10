import React from 'react';
import './spices.css'
import SpicesInfo from './SpicesInfo';


const Spices = () => {
    return (
        <div className='spices-container w-[100%] h-[110vh] m-auto relative flex overflow-hidden ml-5'>
            <div className='basis-7/12 ml-5'>
                <div className="box">
                    <div className='w-[282px] h-[101px] small-box ml-5 absolute z-10'>
                    </div>
                    <div className="box1 z-20 w-[424px] h-[523px] absolute bg-center bg-cover  border-white border shadow-lg" >
                    </div>
                </div>
                <div className="box">
                    <div className="box2 z-30 w-[424px] h-[523px] absolute bg-center bg-cover border-white border shadow-md">
                    </div>
                    <div className='w-[282px] h-[101px] small-box2 ml-5 absolute'>
                    </div>
                </div>
            </div>
            <div className='basis-5/12'>
               <SpicesInfo/>
            </div>
            
        </div>
    )
}

export default Spices