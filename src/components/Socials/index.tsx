import { type FC } from "react";
import * as S from "./styled";
import { Icon } from "@static/icons";

export const Socials: FC = ({ ...rest }) => {
	return (
		<S.SocialsStyled {...rest}>
			<S.SocialsList>
				<S.SocialsListItem>
					<S.SocialsLink
						href="https://github.com/NigelBreslaw"
						target="_blank"
						rel="noreferrer"
					>
						<Icon iconData="github" alt="github" />
					</S.SocialsLink>
				</S.SocialsListItem>
				<S.SocialsListItem>
					<S.SocialsLink
						href="https://www.linkedin.com/in/nigel-breslaw/"
						target="_blank"
						rel="noreferrer"
					>
						<Icon iconData="linkedin" alt="linkedin" />
					</S.SocialsLink>
				</S.SocialsListItem>
				<S.SocialsListItem>
					<S.SocialsLink
						href="https://twitter.com/IshtarCommander"
						target="_blank"
						rel="noreferrer"
					>
						<Icon iconData="twitter" alt="twitter" />
					</S.SocialsLink>
				</S.SocialsListItem>
			</S.SocialsList>
		</S.SocialsStyled>
	);
};
