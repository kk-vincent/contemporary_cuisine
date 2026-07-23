import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../../style/scrollanimate.scss';

const ScrollAnimation_L = ({ children, scrollContainerRef }) => {
    const [targetRoot, setTargetRoot] = useState(null);
    const [isReady, setIsReady] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            if (scrollContainerRef?.current) {
                setTargetRoot(scrollContainerRef.current);
            }
            setIsReady(true);
        }, 200);

        return () => clearTimeout(timer);
    }, [scrollContainerRef]);

    const [ref, inView] = useInView({
        root: targetRoot,                 
        threshold: 0.2,                   
        rootMargin: '-10% 0px -10% 0px', 
        triggerOnce: true,                
        skip: !isReady,                  
    });

    return (
        <div 
            ref={ref}
            className={`
                scroll-anumation-base
                ${inView ? 'Scroll_L_Active' : 'Scroll_L_Init'}
            `}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation_L;