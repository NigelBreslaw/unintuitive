import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";

export const Footer: FC = () => {
    return (
        <S.FooterStyled>
            <S.FooterContainer>
                <Logo />
                <S.FooterContent>
                    <p>© 2024 All rights reserved</p>
                    <p>
                        Designed by:{" "}
                        <a href="https://codexcode.pl" target="_blank">
                            codexcode
                        </a>
                    </p>
                </S.FooterContent>
            </S.FooterContainer>
        </S.FooterStyled>
    );
};
