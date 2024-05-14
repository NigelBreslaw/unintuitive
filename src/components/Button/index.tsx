import * as S from "./styled";
import type { FC } from "react";

type ButtonProps = {
    children: any;
    link?: string;
    target?: "_blank" | "_self" | "_parent";
    align?: "left" | "center" | "right";
    asButton?: boolean;
    type?: "button" | "submit" | "reset";
};

/**
 * Button component
 * @param {string} link - link to the page
 * @param {string} children - text inside button
 * @example
 * <Button link="#">text</Button>
 */
export const Button: FC<ButtonProps> = ({
    link,
    target,
    children,
    align,
    asButton,
    type,
    ...rest
}) => {
    // render button as normal button, otherwise as link
    const ButtonComponent = asButton ? S.Button : S.ButtonLink;

    return (
        <S.ButtonWrapper $align={align}>
            <ButtonComponent href={link} target={target} {...rest}>
                {children}
            </ButtonComponent>
        </S.ButtonWrapper>
    );
};
