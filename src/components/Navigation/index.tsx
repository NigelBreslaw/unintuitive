import { toggleTheme } from "@utils/toggleTheme";
import * as S from "./styled";
import { Icon } from "@static/icons";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href="/">
                            <Icon iconData="home" alt="home icon" />
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <Icon iconData="person" alt="about me icon" />
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="/projects">
                            <Icon iconData="work" alt="work icon" />
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            <Icon iconData="contact" alt="contact icon" />
                            Contact
                        </a>
                    </li>
                    <S.NavigationSocials />
                </S.NavigationList>
            </S.NavigationListWrapper>
            <S.NavigationThemeToggleWrapper>
                <S.NavigationThemeToggle onClick={toggleTheme}>
                    <Icon
                        iconData="themeDark"
                        alt="dark theme icon"
                        data-theme-el="light"
                    />
                    <Icon
                        iconData="themeLight"
                        alt="light theme icon"
                        data-theme-el="dark"
                    />
                </S.NavigationThemeToggle>
            </S.NavigationThemeToggleWrapper>
            <Hamburger
                state={{
                    open: isOpen,
                    setOpen: setIsOpen,
                }}
            />
        </S.NavigationStyled>
    );
};
