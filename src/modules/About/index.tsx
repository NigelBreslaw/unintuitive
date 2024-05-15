import { type FC } from "react";
import * as S from "./styled";
import { Container } from "@components/Container";
import { Image } from "@static/images";
import { Button } from "@components/Button";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

type AboutProps = {
	hideExp?: boolean;
};

// Hide exp is for hiding the commercial experience - on the about page cuz there is a separate section for that
export const About: FC<AboutProps> = ({ hideExp }) => {
	return (
		<S.AboutStyled>
			<Container>
				<FadeIn>
					<S.AboutTitle>About me</S.AboutTitle>
				</FadeIn>
				<S.AboutContent>
					<S.AboutContentText>
						<FadeIn>
							<p>
								With 25 years of commercial experience, I specialise in creating
								applications that captivate millions of users. My journey
								combines a rich background in UX design with cutting-edge
								cross-platform software development skills. Hands-on development
								is my true calling, and as an introvert who loves to code, I
								won’t stop talking about the latest technological innovations.
							</p>

							<h3>What I can do?</h3>
							<p>
								I deliver. Be it design concepts or commercial shipping
								projects. I'm a great team player and communicator. Unless my
								code is broken, then best leave me alone.
							</p>
							<p>
								I'm all about bringing a human touch to technology. Apps should
								be performant, easy to use and delight. Accessibility, motion
								design, custom interactions and more are a hallmark of projects
								I have touched.
							</p>
						</FadeIn>
						<FadeIn>
							<S.AboutContentBoxesWrapper>
								<TextBox>
									<h4>Mobile and Web App Development</h4>
									<p>
										Be it mobile apps running on millions of phones, or internal
										web apps. I've been there and smelt the coffee. A lot of
										coffee.'
									</p>
								</TextBox>
								<TextBox>
									<h4>DX DevOps and Productivity Engineering</h4>
									<p>
										Great apps need a great developer environment. To ensure
										fast iteration I've hand crafted various projects tool
										selection and CI. I love automating away boring tasks.
									</p>
								</TextBox>

								<TextBox>
									<h4>UI/UX Design</h4>
									<p>
										My background is in UI and UX design. But these days I like
										to focus on developing the apps and using my experience to
										be a great partner with any UX team.
									</p>
								</TextBox>

								<TextBox>
									<h4>Rapid Prototyping</h4>
									<p>
										Suffering with a low fidelity prototype? I just build ideas
										in React Native and evolve them from concept to production.
									</p>
								</TextBox>
							</S.AboutContentBoxesWrapper>
						</FadeIn>
					</S.AboutContentText>
					<S.AboutContentImage>
						<FadeIn delay={0.3}>
							<Image
								srcLocal="NigelImg"
								alt="Nigel Breslaw"
								width={500}
								height={500}
							/>
						</FadeIn>
					</S.AboutContentImage>
				</S.AboutContent>
			</Container>
		</S.AboutStyled>
	);
};
