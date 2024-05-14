import { History, Ishtar, GuardianGhost } from "@static/images";

export const ProjectsData = [
	{
		title: "Guardian Ghost",
		image: {
			src: GuardianGhost.src,
			width: GuardianGhost.width,
			height: GuardianGhost.height,
			alt: "Guardian Ghost",
		},
		links: [
			{
				title: "Check out the project on Github!",
				link: "https://github.com/NigelBreslaw/guardian-ghost",
			},
		],
		extraInfo: [
			{
				title: "Rect Native: Universal app",
				description: "Web, Android and iOS",
			},
		],
		content: `
            <h3>React Native showcase</h3>
            <p>
                Built in four months this is a portfolio piece showcasing my skills in React Native. The github repo demonstrates full automated deployment to TestFlight, Google Play and Web. The project is a tooled monorepo with automated dependency updating and CI.
                <br /> <br />
                Destiny 2 is getting a huge update on June 4th called "The Final Shape". This app will be ready for download and will replace Ishtar Commander.

				Some quick stats. App download is ~13MB Android, 20MB iOS and 2MB Web. It runs the bleeding edge version of React Native 0.74 and Expo 51.
            </p>
        `,
	},
	{
		title: "Ishtar Commander",
		image: {
			src: Ishtar.src,
			width: Ishtar.width,
			height: Ishtar.height,
			alt: "Ishtar Commander",
		},
		links: [],
		extraInfo: [
			{
				title: "Cross Platform iOS and Android",
				description: "Developed in ZingStudio.io",
			},
			{
				title: "Stats",
				description: "2 million downloads. ~250'000 active users",
			},
		],
		content: `
            <h3>Companion app for Destiny 2</h3>
            <p>
                Destiny 2 is a console and PC online game. It has an API that allows players to manage their loot and play the game more efficiently. 
                <br /> <br />
                It's known for its commercial level mobile design, performance and usability. With 4.6 (iOS) and 4.4 (Android) star ratings. I designed and developed the entire app in my spare time as a fun hobby project. It's been downloaded over 2 million times and has over 250'000 active users. It's been featured in the press, most notably by Forbes on multiple occasions.
            </p>
        `,
	},
	{
		title: "Pre History",
		image: {
			src: History.src,
			width: History.width,
			height: History.height,
			alt: "Project nike",
		},
		links: [],
		extraInfo: [
			{
				title: "Jobs",
				description: "UX Design Psion -> Symbian -> Nokia",
			},
			{
				title: "Data",
				description: "1999 - 2004",
			},
			{
				title: "Products",
				description:
					"Various including Psion Series 5MX, Nokia 9210, Nokia 7710",
			},
		],
		content: `
            <h3>Early smart devices</h3>
            <p>
                Before the iPhone there were communicators and before communicators there were PDA's (Personal Digital Assistants). I worked on them all. When Psion morphed into Symbian I worked on various projects including the Nokia 9210. Then in 2002 I moved to Finland and worked on Nokia's touchscreen platform S90. Which included the 7710 smartphone.
                <br /> <br />
                3 years later in 2007 the iPhone was released, changed everything and these are now historical relics.
            </p>
        `,
	},
];
