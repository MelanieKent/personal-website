import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {motion} from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <motion.h1 animate={{x:50}} className='w-full text-2xl font-medium text-[#00d8a4]'>MK</motion.h1>
            <ul className='hidden md:flex font-medium'>
                <a href='.'>
                    <li className='p-4 text-[#948aff]'>About</li>
                </a>
                <a href='#education'>
                    <li className='p-4 text-[#779cfa]'>Education</li>   
                </a>
                <li className='p-4 text-[#779cfa]'>Experience</li>
                <li className='p-4 text-[#779cfa]'>Projects</li>
                <a href='#artwork'>
                    <li className='p-4 text-[#ffffff]'>Artwork</li>
                </a>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-700 bg-[#111118] ease-int-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00d8a4] m-4'>MELANIE KENT</h1>
                <ul className='pt-4 font-medium'>
                    <a href='#about' onClick={handleNav}>
                        <li className='p-4 border-b border-gray-700'>About</li>
                    </a>
                    <a href='#education' onClick={handleNav}>
                        <li className='p-4 border-b border-gray-700'>Education</li>
                    </a>
                    <li className='p-4 border-b border-gray-700'>Experience</li>
                    <li className='p-4 border-b border-gray-700'>Projects</li>
                    <a href='#artwork' onClick={handleNav}>
                        <li className='p-4 border-b border-gray-700'>Artwork</li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar