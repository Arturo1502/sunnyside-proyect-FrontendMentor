import { Navbar } from './Navbar'
import logo from '/logo.svg'


export const Header = () => {
    return (
        <header className='absolute  w-full px-6 pt-8 flex font-Barlow h-[100px]'>
            <div className='flex justify-between w-full '>
                <img className='h-[24px]' src={logo} alt="sunnyside" />
                <Navbar />
            </div>
        </header>
    )
}