import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../../style/scrollanimate.scss';

const ScrollAnimation_pic_R = ({ children, src, scrollContainerRef }) => {
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
        rootMargin: '-10% 0px -10% 0px',
        threshold: 0.2,
        triggerOnce: true,
        skip: !isReady, 
    });

    const imgSrc = src || (typeof children === 'string' ? children : '');

    return (
        <div 
            ref={ref} 
            className={`
                scroll-anumation-base
                ${inView ? 'Scroll_R_Active' : 'Scroll_R_Init'}
            `}
        >
            <div style={{ width: '50vw', maxWidth: '70%', margin: '0 auto' }}><img src={children} className='img-fluid rounded-5 shadow'/></div>
        </div>
    );
};

export default ScrollAnimation_pic_R;