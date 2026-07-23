import React from 'react';
import {useInView} from 'react-intersection-observer';

import '../../style/scrollanimate.scss';

const ScrollAnimation_T=({children})=>{
    const [ref,inView]=useInView({
        threshold:0.15,
        triggerOnce:true
    });

    return(
        <div ref={ref}
        className={`
            scroll-anumation-base
            ${inView
                ?'Scroll_T_Active'
                :'Scroll_T_Init'
            }
        `}>
            {children}

        </div>
    )
}
export default ScrollAnimation_T