import React from 'react'
import './footer.css'


const SideBar = () => {
    return (
        <>
            
                <div className="flex sidebar-container">
                <div className="lg:basis-9/12 lg:h-[21.5rem] bg-red-50 imaged">
                </div>

                <div className="lg:basis-3/12 lg:h-[21.5rem] bg-black flex flex-col justify-start">
                    <div className="w-40 my-auto ml-10">
                        <div className='mb-5'>
                            <p className='text-sm text-white'>
                                More Opinions
                            </p>
                            <p className='text-xs text-gray-400 font-thin'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            </p>
                        </div>
                        <div className='mb-5'>
                            <p className='text-sm text-white'>
                                Newsletter
                            </p>
                            <p className='text-xs font-thin text-gray-400 '>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            </p>
                        </div>
                        <div className='subscribe-sidebar'>
                            <p className='text-sm text-white'>
                                Subscribe
                            </p>
                            <p className='text-gray-400 text-xs font-thin'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            </p>
                        </div>
                    </div>
                </div>
                </div>

        </>
    )
}

export default SideBar