import styled from "@emotion/styled";
import { Theme } from "@styles/colors";

export const SocialsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    margin: 20px 0 0;
`;

export const SocialsList = styled.ul`
    display: flex;
    gap: 10px;
    list-style-type: none;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
`;

export const SocialsListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    cursor: pointer;
    transition: 0.3s;
    opacity: 0.5;

    &:hover {
        opacity: 1;
    }

    &:not(:last-of-type) {
        &:after {
            content: "";
            display: block;
            width: 1px;
            height: 20px;
            background-color: ${Theme.textSecondary};
            margin-left: 10px;
        }
    }
`;

export const SocialsLink = styled.a`
    text-decoration: none;
    color: inherit;

    img {
        width: 20px;
        height: 20px;
        aspect-ratio: 20/20;
        object-fit: contain;
    }
`;
