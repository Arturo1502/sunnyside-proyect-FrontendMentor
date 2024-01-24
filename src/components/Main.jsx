import imgMobile from '../../public/mobile/image-header.jpg'
import imgDesktop from '../../public/desktop/image-header.jpg'
import arrow from '/icon-arrow-down.svg'

export const Main = () => {
    return (
        <main>
            <picture>
                <source media='(max-width:639px)' srcSet={imgMobile} />
                <source media='(min-width:640px)' srcSet={imgDesktop} />
                <img src={imgMobile} alt='Background header' />
            </picture>
            <p className='absolute  font-Fraunces  text-[40px] uppercase tracking-[6.25px] text-White text-center w-[327px] top-[144px] left-0 right-0 mx-auto sm:w-[600px]'> We are creatives</p>
            <img className='absolute top-[294px] left-0 right-0 mx-auto sm:top-[244px]' src={arrow} alt="" />
        </main>
    )
} 