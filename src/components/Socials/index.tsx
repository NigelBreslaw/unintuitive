import { type FC } from "react";
import * as S from "./styled";
import { Icon } from "@static/icons";

export const Socials: FC = ({ ...rest }) => {
    return (
        <S.SocialsStyled {...rest}>
            <S.SocialsList>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="github" alt="github" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="linkedin" alt="linkedin" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="facebook" alt="facebook" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="twitter" alt="twitter" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="instagram" alt="instagram" />
                    </S.SocialsLink>
                </S.SocialsListItem>
            </S.SocialsList>
        </S.SocialsStyled>
    );
};
