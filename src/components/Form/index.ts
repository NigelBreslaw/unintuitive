import styled from "@emotion/styled";
import { Theme } from "@styles/colors";

/**
 * Define the default styled components for the Form component
 */
export const FormStyled = styled.form`
    padding: 30px;
    background: ${Theme.bgElement};
    border-radius: 10px;
    box-shadow: 0 0 10px rgb(123 123 123 / 10%);

    h2 {
        font-size: 30px;
        font-weight: 300;
    }
`;
