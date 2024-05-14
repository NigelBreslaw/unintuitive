import { type FC, useState } from "react";
import * as S from "./styled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormStyled } from "@components/Form";
import { Input } from "@components/Form/components/Input";
import { Button } from "@components/Button";
import { TextBox } from "@components/textBox";
import axios from "axios";
import { FadeIn } from "@utils/animations/FadeIn";

/**
 * just for example contact form is setup with
 * @url https://emailjs.com
 */
export const Contact: FC = () => {
    const [emailSent, setEmailSent] = useState(false);

    /**
     * Zod schema for form validation
     */
    const schema = z.object({
        name: z.string().min(2, {
            message: "Name should be at least 2 characters",
        }),
        email: z.string().email({
            message: "Please enter a valid email",
        }),
        message: z.string().min(10, {
            message: "Message should be at least 10 characters",
        }),
    });

    /**
     * React hook form setup
     */
    const contactForm = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    /**
     * Submit form function
     * @param {Object} values - form values
     * @returns {Promise<void>}
     * just for example contact form is setup with
     * @url https://emailjs.com
     * you can use any other service or setup your own
     *
     * when you setup your own service
     * remember to store somewhere else data like api keys  to be more secure
     */
    const formSubmit = contactForm.handleSubmit(async (values) => {
        axios
            .post("https://api.emailjs.com/api/v1.0/email/send", {
                service_id: "service_rf6usgt",
                template_id: "template_0taei3k",
                user_id: "Xj3nyz-8v-oG8e-6l",
                template_params: {
                    name: values.name,
                    email: values.email,
                    message: values.message,
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    setEmailSent(true);
                }
            });
    });

    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <FadeIn>
                    <S.ContactTitle>Contact me</S.ContactTitle>
                </FadeIn>
                {!emailSent ? (
                    <FadeIn>
                        <FormStyled onSubmit={formSubmit}>
                            <h2>
                                Are you interested in working with me?{" "}
                                <b>Let's talk!</b>
                            </h2>
                            <Input
                                type="text"
                                placeholder="Name *"
                                register={contactForm.register("name")}
                                error={
                                    contactForm.formState.errors.name?.message
                                }
                            />
                            <Input
                                type="email"
                                placeholder="Email *"
                                register={contactForm.register("email")}
                                error={
                                    contactForm.formState.errors.email?.message
                                }
                            />
                            <Input
                                type="textarea"
                                placeholder="Message *"
                                register={contactForm.register("message")}
                                error={
                                    contactForm.formState.errors.message
                                        ?.message
                                }
                            />
                            <Button asButton={true} type="submit">
                                Submit
                            </Button>
                        </FormStyled>
                    </FadeIn>
                ) : (
                    <h2>
                        Thank you for your message! I will get back to you as
                        soon as possible
                    </h2>
                )}

                <S.ContactBox>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            href="tel:+52 123 233 421"
                            target="_blank"
                        >
                            <h3>+52 123 233 421</h3>
                            <p>
                                Call me if you have any questions or want to
                                work with me
                            </p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="mailto:sven@gmail.com"
                            target="_blank"
                        >
                            <h3>sven@gmail.com</h3>
                            <p>
                                also you can write me an email if you have any
                                questions
                            </p>
                        </TextBox>
                    </FadeIn>
                </S.ContactBox>
                <FadeIn delay={0.3}>
                    <TextBox variant="background-text" bgText="Address">
                        <h3>Address</h3>
                        <p>Some street 123, 12345 City, Country</p>
                        <p>Office: Another street 321, 54321 City, Country</p>
                    </TextBox>
                </FadeIn>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
