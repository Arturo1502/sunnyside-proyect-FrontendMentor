import React from 'react'
import { Image } from './Image'
import milkImgMobile from '../../public/mobile/image-gallery-milkbottles.jpg'
import milkImgDesktop from '../../public/desktop/image-gallery-milkbottles.jpg'
import orangeImgMobile from '../../public/mobile/image-gallery-orange.jpg'
import orangeImgDesktop from '../../public/desktop/image-gallery-orange.jpg'
import coneImgMobile from '../../public/mobile/image-gallery-cone.jpg'
import coneImgDesktop from '../../public/desktop/image-gallery-cone.jpg'
import sugarCubesImgMobile from '../../public/mobile/image-gallery-sugar-cubes.jpg'
import sugarCubesImgDesktop from '../../public/desktop/image-gallery-sugarcubes.jpg'

export default function Gallery() {
    return (
        <div className='grid grid-cols-2 sm:flex'>
            <Image
                imgMobile={milkImgMobile}
                imgDesktop={milkImgDesktop}
            />
            <Image
                imgMobile={orangeImgMobile}
                imgDesktop={orangeImgDesktop}
            />
            <Image
                imgMobile={coneImgMobile}
                imgDesktop={coneImgDesktop}
            />
            <Image
                imgMobile={sugarCubesImgMobile}
                imgDesktop={sugarCubesImgDesktop}
            />
        </div>
    )
}
