import { type FC } from "react";

import IconHome from "./icon-home.svg";
import IconService from "./icon-service.svg";
import IconContact from "./icon-contact.svg";
import IconWork from "./icon-work.svg";
import IconPerson from "./icon-person.svg";
import IconThemeDark from "./icon-theme-dark.svg";
import IconThemeLight from "./icon-theme-light.svg";
import IconFacebook from "./icon-facebook.svg";
import IconInstagram from "./icon-instagram.svg";
import IconTwitter from "./icon-twitter.svg";
import IconLinkedIn from "./icon-linkedin.svg";
import IconGithub from "./icon-github.svg";

export const icons = {
	home: IconHome,
	service: IconService,
	contact: IconContact,
	work: IconWork,
	person: IconPerson,
	themeDark: IconThemeDark,
	themeLight: IconThemeLight,
	facebook: IconFacebook,
	instagram: IconInstagram,
	twitter: IconTwitter,
	linkedin: IconLinkedIn,
	github: IconGithub,
};

type IconName = {
	iconData: keyof typeof icons;
	alt: string;
};

/**
 * Icon is a component that renders an image with the specified icon name
 * @example
 * <Icon iconData="home" alt="home" />
 * for change color of icon use css filter
 */
export const Icon: FC<IconName> = ({ alt, iconData, ...rest }) => {
	const icon = icons[iconData];

	return (
		<img
			src={icon.src}
			alt={alt}
			width={icon.width}
			height={icon.height}
			data-icon="true"
			{...rest}
		/>
	);
};

import IconLogo1 from "./docker-logo.svg";
import IconLogo2 from "./typescript-logo.svg";
import IconLogo3 from "./react-native-logo.svg";
import IconLogo4 from "./windows-logo.svg";
import IconLogo5 from "./android-logo.svg";
import IconLogo6 from "./apple-logo.svg";

// logos saved as svg export them as components
export { IconLogo1, IconLogo2, IconLogo3, IconLogo4, IconLogo5, IconLogo6 };
