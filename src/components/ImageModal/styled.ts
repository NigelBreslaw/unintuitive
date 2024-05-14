import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const ImageModalStyled = styled.div`
    height: 100%;
    width: 100%;
`;

export const ImageModalContent = styled.div<{
    $isOpen: boolean;
}>`
    z-index: 11;
    display: flex;
    position: fixed;
    background: #0000008f;
    inset: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s linear, visibility 0.4s linear;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    ${({ $isOpen }) =>
        $isOpen &&
        `
            display: flex;
            opacity: 1;
            visibility: visible;
    `}
`;

export const ImageModalContainer = styled.div`
    max-width: clamp(320px, 80%, 920px);
    padding: 90px 0;
    margin: 0 auto;
    padding: 40px;
    background-color: ${Theme.bgElement};
    max-height: 75vh;
    overflow: auto;
    height: 100%;

    ${MediaQuery.max("lg")} {
        padding: 20px;
    }

    &::-webkit-scrollbar {
        background-color: ${Theme.bgElement};
        width: 9px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${Theme.secondary};
    }
`;

export const ImagePreview = styled.figure`
    width: 100%;

    height: 250px;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ImageModalContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 66% calc(34% - 40px);
    gap: 40px;

    ${MediaQuery.max("md")} {
        grid-template-columns: 1fr;
    }
`;

export const ImageModalImage = styled.div`
    width: 100%;
    margin-bottom: 10px;

    img {
        width: 100%;
        height: 40vw;
        max-height: 450px;

        object-fit: cover;
    }
`;

export const ImageModalLinks = styled.div`
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

    a {
        display: inline-block;

        font-size: 20px;
        color: ${Theme.textDefault};

        &:after {
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background: ${Theme.secondary};
            transition: width 0.3s;
        }

        &:hover:after {
            width: 100%;
        }
    }
`;

export const ImageModalExtraInfo = styled.div`
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 10px;
        font-size: 20px;

        &:after {
            content: none;
        }
    }
    p {
        font-size: 16px;

        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }
`;
