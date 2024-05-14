import { type FC, useRef, useMemo } from "react";
import { Container } from "@components/Container";
import * as S from "./styled";
import { ImageModal } from "@components/ImageModal";
import { FadeIn } from "@utils/animations/FadeIn";

type ProjectsProps = {
    data: {
        title: string;
        image: {
            src: string;
            width: number;
            height: number;
            alt: string;
        };
        links: {
            title: string;
            link: string;
        }[];
        extraInfo: {
            title: string;
            description: string;
        }[];
        content: string;
    }[];
};

/**
 * Project is static, normally it should be fetched from the backend, retrieved in props and then used
 * in static project it can be use just like array of objects
 *
 * data moved to the separate file to keep the component clean
 */
export const Projects: FC<ProjectsProps> = ({ data }) => {
    /**
     * List of the slides
     */
    const slides = useMemo(
        () =>
            data.map((project, index) => (
                <ImageModal
                    key={index}
                    image={project.image}
                    links={project.links}
                    extraInfo={project.extraInfo}
                    content={project.content}
                    
                />
            )),
        [data]
    );

    return (
        <S.ProjectsStyled>
            <Container>
                <S.ProjectHeading>
                    <FadeIn>
                        <h2>Projects</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam voluptates, voluptate.
                        </p>
                    </FadeIn>
                </S.ProjectHeading>

                <S.ProjectsContent>{slides}</S.ProjectsContent>
                {data.length <= 6 && (
                    <FadeIn>
                        <S.ProjectButton link="/projects" align="center">
                            View More
                        </S.ProjectButton>
                    </FadeIn>
                )}
            </Container>
        </S.ProjectsStyled>
    );
};
