import React, { type FC, useState, useEffect, useRef } from "react";
import * as S from "./styled";
import { Image } from "@static/images";
import { FadeIn } from "@utils/animations/FadeIn";

type ImageModalProps = {
    image: {
        src: string;
        width?: number | string;
        height?: number | string;
        alt: string;
    };
    // display content info
    content: string;
    links: {
        title: string;
        link: string;
    }[];
    extraInfo: {
        title: string;
        description: string;
    }[];
};

export const ImageModal: FC<ImageModalProps> = ({
    content,
    extraInfo,
    image,
    links,
}) => {
    const [open, setOpen] = useState(false);
    const modalRef = useRef(null);

    if (!image) {
        return null;
    }

    /**
     * toggle state of the modal
     */
    const handleOpen = () => {
        setOpen(!open);

        // disable scrolling when modal is open
        if (!open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    /**
     * Close the modal when clicked outside
     * @param e - MouseEvent
     */
    const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        if (
            !target.closest(".modal-opener") &&
            open &&
            !target.closest(".modal-content")
        ) {
            setOpen(false);
            document.body.style.overflow = "auto";
        }
    };

    /**
     * Add event listener to close the menu when clicked outside of the elements
     */
    useEffect(() => {
        if (!open) return;
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [open]);

    return (
        <S.ImageModalStyled>
            <FadeIn>
                <S.ImagePreview
                    aria-label="open modal"
                    onClick={handleOpen}
                    className="modal-opener"
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                    />
                </S.ImagePreview>
            </FadeIn>
            <S.ImageModalContent $isOpen={open} ref={modalRef}>
                <S.ImageModalContainer className="modal-content">
                    <S.ImageModalImage>
                        <img src={image.src} alt={image.alt} />
                    </S.ImageModalImage>
                    <S.ImageModalLinks>
                        {links.map((link, index) => (
                            <a key={index} href={link.link} target="_blank">
                                {link.title}
                            </a>
                        ))}
                    </S.ImageModalLinks>
                    <S.ImageModalContentWrapper>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                        <S.ImageModalExtraInfo>
                            {extraInfo.map((info, index) => (
                                <React.Fragment key={index}>
                                    <h3>{info.title}</h3>
                                    <p>{info.description}</p>
                                </React.Fragment>
                            ))}
                        </S.ImageModalExtraInfo>
                    </S.ImageModalContentWrapper>
                </S.ImageModalContainer>
            </S.ImageModalContent>
        </S.ImageModalStyled>
    );
};
