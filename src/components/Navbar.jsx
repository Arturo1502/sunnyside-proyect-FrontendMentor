import { useState } from 'react'
import menuIcon from '/icon-hamburger.svg'

export const Navbar = () =>{

    const [menuClicked, setMenuClicked] = useState(false);

    const handleClick = () => {
        setMenuClicked(prevState=>!prevState);
    }

    return (
        <nav className='sm:h-[24px] '>
            <ul className={` ${menuClicked ? 'flex' : 'hidden'} bg-white w-[329px] h-[305px] absolute left-0 right-0 mx-auto top-[106px] flex flex-col items-center place-content-around after:content-[""] after:border-[12px] after:absolute after:top-[-24px] after:right-0 after:border-l-transparent 
            after:border-t-transparent after:border-b-white  after:border-r-white text-Very-dark-grayish-blue text-xl z-10
            
            sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[400px] sm:h-full sm:py-0 sm:relative sm:mt-0 sm:text-white 

            md:w-[500px]
            `}>
                <li className='cursor-pointer'> About</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Projects</li>
                <li className='cursor-pointer bg-Yellow w-[140px] h-[56px] grid place-content-center rounded-full font-Fraunces text-Very-dark-desaturated-blue sm:h-[54px] uppercase sm:bg-white sm:hover:bg-opacity-20 sm:hover:text-white'>Contact</li>
            </ul>

            <div className='cursor-pointer sm:hidden' onClick={handleClick}>
                <img src={menuIcon} alt="menu hamburguesa" />
            </div>

        </nav>
    )
}