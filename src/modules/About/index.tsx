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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam voluptates,
                                voluptate, doloremque, quas quia quos quidem
                                exercitationem nemo tempore voluptatum
                                doloribus? Quisquam voluptates, voluptate,
                                doloremque, quas quia quos quidem exercitationem
                                nemo tempore voluptatum doloribus?
                            </p>

                            <h3>What I can do?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam voluptates,
                                voluptate, doloremque, quas quia quos quidem
                                exercitationem nemo.
                            </p>
                        </FadeIn>
                        <FadeIn>
                            <S.AboutContentBoxesWrapper>
                                <TextBox>
                                    <h4>Web Design</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
                                </TextBox>
                                <TextBox>
                                    <h4>Web Development</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
                                </TextBox>

                                <TextBox>
                                    <h4>UI/UX Design</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
                                </TextBox>

                                <TextBox>
                                    <h4>Graphic Design</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
                                </TextBox>
                            </S.AboutContentBoxesWrapper>
                        </FadeIn>
                        {!hideExp && (
                            <FadeIn>
                                <h3>What is my commercial experience?</h3>
                                <S.AboutContentBoxesWrapper>
                                    <TextBox
                                        variant="background-text"
                                        bgText="senior"
                                    >
                                        <h4>React</h4>
                                        <p>3,5 years</p>
                                    </TextBox>
                                    <TextBox
                                        variant="background-text"
                                        bgText="mid"
                                    >
                                        <h4>JavaScript</h4>
                                        <p>2 years</p>
                                    </TextBox>
                                    <TextBox
                                        variant="background-text"
                                        bgText="junior"
                                    >
                                        <h4>Next.js</h4>
                                        <p>1 year</p>
                                    </TextBox>
                                    <TextBox
                                        variant="background-text"
                                        bgText="new"
                                    >
                                        <h4>Figma</h4>
                                        <p>few months</p>
                                    </TextBox>
                                </S.AboutContentBoxesWrapper>
                                <Button link="/about">view projects</Button>
                            </FadeIn>
                        )}
                    </S.AboutContentText>
                    <S.AboutContentImage>
                        <FadeIn delay={0.3}>
                            <Image
                                srcLocal="svenImg"
                                alt="sven doe"
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
