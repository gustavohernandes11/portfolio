import { useEffect, useRef, useState } from "react";

export type RecurrenceOptions = "once" | "always";

type UseIntersectionOptions = {
    recurrence: RecurrenceOptions;
};

export const useIntersection = ({
    recurrence = "always",
}: UseIntersectionOptions) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (recurrence === "once") {
                        if (entry.isIntersecting) {
                            setIsIntersecting(true);
                        }
                    } else {
                        setIsIntersecting(entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return { isIntersecting, ref };
};
