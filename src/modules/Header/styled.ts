import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";

const HeaderAnimationKeyframe = keyframes`
    from {
        transform: translateY(-50px);
        opacity: 0.01;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const HeaderStyled = styled.header`
    width: 100%;

    background: ${Theme.bgElement};

    padding: 20px 40px;

    display: flex;

    justify-content: space-between;
    align-items: center;

    gap: 40px;

    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;

    box-shadow: 0 0 10px rgb(123 123 123 / 10%);

    animation: ${HeaderAnimationKeyframe} 1s;
`;
