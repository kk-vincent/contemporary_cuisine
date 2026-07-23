import React from 'react';
import {useInView} from 'react-intersection-observer';

import '../../style/scrollanimate.scss';

const ScrollAnimation_T2=({children})=>{
    const [ref,inView]=useInView({
        threshold:0.15,
        triggerOnce:true
    });

    return(
        <div ref={ref}
        className={`
            scroll-anumation-base
            ${inView
                ?'Scroll_T2_Active'
                :'Scroll_T2_Init'
            }
        `}>
            {children}

        </div>
    )
}
export default ScrollAnimation_T2