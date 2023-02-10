import React from 'react'

const SpicesInfo = () => {
    return (
        <div className="spices-info mt-[28%] mr-20">
            <h1 className='heading '>Why we are best ?</h1>
            <p className='para mt-10 w-[95%]'>
                PlanetsEra Spices are enriched with the most authentic taste and enchanting aroma. Each step in the manufacturing process is responsibly supervised from picking out from the farms to delivering it to the stores, so that there is no compromise in the health of our consumers.
            </p>
            <div className='flex mt-10'>
                <div className='btn hand'>
                    Handpicked from the best <br /> farms
                </div>
                <div className='btn ml-5'>
                    Grinded at lower temperatures
                </div>
            </div>
            <div className='flex mt-4'>
                <div className='btn'>
                    Hygienic manufacturing
                </div>
                <div className='btn ml-5'>
                    Quality preservation
                </div>
            </div>

        </div>
    )
}

export default SpicesInfo