import { type FC } from "react";
import * as S from "./styled";
import { Button } from "@components/Button";
import { Container } from "@components/Container";
import { Socials } from "@components/Socials";

import SamplePdf from "@static/sample.pdf";
import { FadeIn } from "@utils/animations/FadeIn";
export const Hero: FC = () => {
    return (
        <S.HeroWrapper>
            <Container>
                <S.HeroContent>
                    <FadeIn>
                        <S.HeroImageStyled
                            srcLocal="svenImg"
                            alt="hero"
                            width={300}
                            height={300}
                        />
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <S.PreHeading data-aos="fade-up">
                            Hi, I'm <strong>Sven Doe</strong>
                        </S.PreHeading>
                        <S.HeroTitle>Web Developer / Designer</S.HeroTitle>
                        <p>
                            I'm a <b>frontend developer</b> and <b>designer</b>{" "}
                            based in Berlin with a <b>7-year</b> commercial
                            experience in the industry.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <Socials />
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <Button link={SamplePdf} target="_blank">
                            Open Cv
                        </Button>
                    </FadeIn>
                </S.HeroContent>
            </Container>
        </S.HeroWrapper>
    );
};
