import { Image } from "./Image";
import { Text } from "./Text";
import { ImageText } from "./ImageText";

import eggImgMobile from "../../public/mobile/image-transform.jpg";
import eggImgDesktop from "../../public/desktop/image-transform.jpg";

import glassImgMobile from "../../public/mobile/image-stand-out.jpg";
import glassImgDesktop from "../../public/desktop/image-stand-out.jpg";

import graphicDesingMobile from "../../public/mobile/image-graphic-design.jpg";
import graphicDesingDesktop from "../../public/desktop/image-graphic-design.jpg";

import photografyMobile from "../../public/mobile/image-photography.jpg";
import photografyDesktop from "../../public/desktop/image-photography.jpg";

export const Services = () => {
    return (
        <section className="tablet:grid tablet:grid-cols-2">
            <Image
                order="order-2"
                imgMobile={eggImgMobile}
                imgDesktop={eggImgDesktop}
            />
            <Text
                order="order-1"
                title="Transform your brand"
                text="We are a full-service creative agency specializing in helping brands grow fast. 
       Engage your clients through compelling visuals that do most of the marketing for you."
                color='bg-Yellow'
            />
            <Image
                order="order-3"
                imgMobile={glassImgMobile}
                imgDesktop={glassImgDesktop}
            />

            <Text
                order="order-4"
                title="Stand out to the right audience"
                text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
                color='bg-Soft-red'
            />
            <ImageText
                order="order-5"
                imgMobile={graphicDesingMobile}
                imgDesktop={graphicDesingDesktop}
                title="Graphic design"
                text="  Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
            />

            <ImageText
                order="order-6"
                imgMobile={photografyMobile}
                imgDesktop={photografyDesktop}
                title="Photography"
                text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
            />
        </section>
    );
};
