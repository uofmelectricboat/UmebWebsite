import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function FadeInSection(props: Props) {
    const [isVisible, setVisible] = useState<boolean>(true);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        if (domRef.current) {
            observer.observe(domRef.current);
        }
        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`f ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}
