import React, { useEffect, useRef, type FC } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

type FadeInProps = {
    children: React.ReactNode;
    delay?: number | string;
};

export const FadeIn: FC<FadeInProps> = ({ children, delay }) => {
    const elementRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(elementRef.current, {
            opacity: 1,
            duration: 0.5,
            delay: delay || 0,
            transform: "translateY(0)",
            scrollTrigger: {
                trigger: elementRef.current,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <div
            style={{
                opacity: 0.001,
                transform: "translateY(20px)",
            }}
            ref={elementRef}
        >
            {children}
        </div>
    );
};
