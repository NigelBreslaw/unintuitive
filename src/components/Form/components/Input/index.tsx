import { type FC } from "react";
import * as S from "./styled";

type InputProps = {
    placeholder: string;
    type: "text" | "email" | "textarea";
    register: any;
    error?: any;
};
export const Input: FC<InputProps> = ({
    placeholder,
    type,
    register,
    error,
    ...rest
}) => {
    /**
     * Display input based on the type
     */
    const InputComponent =
        type === "textarea" ? S.InputTextAreaStyled : S.InputStyled;

    return (
        <S.InputWrapper>
            <InputComponent placeholder={placeholder} {...register} {...rest} />
            {error && <p>{error}</p>}
        </S.InputWrapper>
    );
};
