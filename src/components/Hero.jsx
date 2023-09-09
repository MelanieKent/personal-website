import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white bg-gradient-to-b from-[#111118] to-[#393476]'>
            <div id='about' className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#6683c1] text-xl font-medium p-2'>Hello, I'm</p>
                <h1 className='text-[#ffffff] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Melanie_Kent</h1>
                <p className='sm:text-2xl text-md font-medium pt-4 text-[#6683c1]'> 
                    A third-year software engineering student @ UBC.
                </p>
                <div className='flex justify-center items-center'>
                    <p className='text-[#6683c1] lg:text-4xl sm:text-3xl font-medium py-4'>I am passionate about</p>
                    <Typed 
                    className='text-[#00d8a4] md:text-4xl sm:text-3xl font-bold md:pl-4 pl-2'
                    strings={['software engineering.', 'digital art.', 'data science.', 'education.']} typeSpeed={50} backSpeed={50} loop/>
                </div>
                <a href="mailto:melanie.s.kent@gmail.com">
                    <button className='bg-[#00d8a4] w-[140px] rounded-md font-bold my-8 mx-auto py-3 text-[#222222] hover:bg-[#948aff]'>Contact Me</button>
                </a>
                <p className='text-sm mt-10 font-light p-12 text-[#00d8a4]'> 
                    **Please note that this website is under construction, and as such many of the features will not be working.
                </p>
            </div>     
        </div>
    )
}

export default Hero