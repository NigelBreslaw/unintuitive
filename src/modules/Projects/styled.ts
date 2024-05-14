import { Button } from "@components/Button";
import styled from "@emotion/styled";
import { MediaQuery } from "@styles/mediaQuery";

export const ProjectsStyled = styled.section`
    padding: 100px 0;
`;

export const ProjectHeading = styled.div`
    max-width: 580px;
    margin-bottom: 40px;
`;

export const ProjectContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
`;

export const ProjectsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    ${MediaQuery.max("lg")} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${MediaQuery.max("md")} {
        grid-template-columns: 1fr;
        gap: 30px;
    }
`;

export const ProjectButton = styled(Button)`
    margin-top: 20px;
`;
