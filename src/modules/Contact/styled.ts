import { Container } from "@components/Container";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const ContactStyled = styled.section`
    background: ${Theme.bgElement};

    padding: 100px 0;
`;

export const ContactStyledWrapper = styled.div`
    max-width: 920px;
    margin: 0 auto;
`;

export const ContactTitle = styled.h2`
    &,
    &:last-child {
        margin-bottom: 90px;
    }
`;

export const ContainerStyled = styled(Container)`
    ${MediaQuery.min("xxxl")} {
        max-width: 920px;
    }
`;

export const ContactBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin: 40px 0;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr;
    }
`;
