import { type FC } from "react";
import { Image } from "@static/images";
import * as S from "./styled";
import { LogosSliderData } from "./data";
import { Container } from "@components/Container";
import { Autoplay } from "swiper/modules";
import { SwiperSlider } from "@components/SwiperSlider";
import { FadeIn } from "@utils/animations/FadeIn";

export const LogosSlider: FC = () => {
    /**
     * Logos is static, normally it should be fetched from the backend, retrieved in props and then used
     * in static Logos it can be use just like array of objects
     *
     * data moved to the separate file to keep the component clean
     */
    const data = LogosSliderData;

    /**
     * List of the slides
     */
    const slides = data.map((slide, index) => (
        <S.Logo key={index}>
            <FadeIn>
                <Image
                    src={slide.logo.src}
                    width={slide.logo.width}
                    height={slide.logo.height}
                    alt={slide.alt}
                />
            </FadeIn>
        </S.Logo>
    ));

    return (
        <S.LogosSliderStyled>
            <Container>
                <FadeIn>
                    <h2>Trusted by</h2>
                </FadeIn>
            </Container>
            <SwiperSlider
                modules={[Autoplay]}
                options={{
                    slidesPerView: "auto",
                    loop: true,
                    freeMode: true,
                    autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                    },
                }}
            >
                {slides}
            </SwiperSlider>
        </S.LogosSliderStyled>
    );
};
