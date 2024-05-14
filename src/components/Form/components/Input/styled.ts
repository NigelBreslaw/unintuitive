import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";

const defaultInputStyles = css`
    padding: 10px 0;
    border: none;
    width: 100%;
    margin-bottom: 10px;
    box-sizing: border-box;
    background: transparent;
    border-bottom: 1px solid ${Theme.textSecondary};
    transition: border-color 0.3s;
    letter-spacing: 1px;
    color: ${Theme.textDefault};
    margin: 0;

    &:focus,
    &:active {
        outline: none;
        border-color: ${Theme.primary};
    }

    &::placeholder {
        color: ${Theme.textSecondary};
    }
`;

export const InputWrapper = styled.div`
    &:not(:last-child) {
        margin-bottom: 30px;
    }
`;

export const InputStyled = styled.input`
    ${defaultInputStyles}
`;

export const InputTextAreaStyled = styled.textarea`
    ${defaultInputStyles};

    resize: none;
    min-height: 90px;
`;
