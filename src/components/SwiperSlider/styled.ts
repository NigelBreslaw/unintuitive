import { Swiper } from "swiper/react";
import styled from "@emotion/styled";
import "swiper/css";

export const SwiperStyled = styled(Swiper)<{
    slidesPerView: any;
}>`
    overflow: hidden;
    width: 100%;

    .swiper-wrapper {
        transition-timing-function: linear;

        display: flex;
    }

    /**
     * to customize the slider sizes, use breakpoints in swiper
     * if slidesPerView is set to auto, it will automatically adjust the size of the slides
     * to override the default size, use the following css
     * @example 
     * .swiper-slide {
     *     width: calc(100% / number);
     * }
     * live example on  LogosSlider component
    */
    .swiper-slide {
        width: calc(100% / 4);
    }
`;
