import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const AboutStyled = styled.section`
    background: ${Theme.bgElement};

    padding: 100px 0;

    ${MediaQuery.max("lg")} {
        padding: 50px 0;
    }
`;

export const AboutTitle = styled.h2`
    &:last-child {
        margin-bottom: 40px;
    }
`;

export const AboutContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr;
    }
`;

export const AboutContentText = styled.div`
    ${MediaQuery.min("lg")} {
        margin-top: 50px;
    }

    ${MediaQuery.max("lg")} {
        order: 2;
    }

    p {
        font-size: 16px;
        line-height: 1.7;
        letter-spacing: 0.7px;

        &:not(:last-child) {
            margin-bottom: 40px;
        }
    }

    h3 {
        font-size: 30px;
    }
`;

export const AboutContentImage = styled.figure`
    display: flex;
    justify-content: center;

    img {
        position: sticky;
        top: 100px;
        border-radius: 10px;

        border-top-right-radius: 200px;
        border-bottom-left-radius: 200px;

        width: 90%;

        ${MediaQuery.max("lg")} {
            width: 100%;
            max-height: 300px;

            border-top-right-radius: 100px;
            border-bottom-left-radius: 100px;
        }
    }
`;

export const AboutContentBoxesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 50px 0;

    ${MediaQuery.max("sm")} {
        grid-template-columns: 1fr;
    }
`;

export const AboutPageStyled = styled.section`
    padding: 100px 0;

    ${MediaQuery.max("lg")} {
        padding: 50px 0;
    }

    h2 br {
        ${MediaQuery.max("sm")} {
            display: none;
        }
    }
`;

export const AboutPageStyledBoxesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    ${MediaQuery.max("lg")} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${MediaQuery.max("sm")} {
        grid-template-columns: 1fr;
    }
`;
