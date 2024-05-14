import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const LogosSliderStyled = styled.section`
    padding: 100px 0;

    background: ${Theme.bgElement};

    ${MediaQuery.max("lg")} {
        padding: 50px 0 0;
    }

    h2 {
        margin-bottom: 50px;
    }

    .swiper .swiper-slide {
        width: calc(100% / 8);

        ${MediaQuery.max("xl")} {
            width: calc(100% / 6);
        }

        ${MediaQuery.max("lg")} {
            width: calc(100% / 4);
        }

        ${MediaQuery.max("md")} {
            width: calc(100% / 3);
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    img {
        width: 100px;
        height: 100px;
        object-fit: contain;

        [data-theme="dark"] & {
            filter: invert(1);
        }
    }
`;
