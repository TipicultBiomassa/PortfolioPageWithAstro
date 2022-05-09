import React, {useEffect, useState} from 'react';
import cx from 'classnames';
import { useParallax } from 'react-scroll-parallax';
import { useSpring, animated } from "react-spring";


export default function TextLeft ({isNextSlide}) {

    // const [isLoaded, setLoaded] = useState(false);
    // useEffect(() => {
    //     setTimeout(()=>setLoaded(true), 5000);
    // }, [])

    const [styles, api] = useSpring((number,index) => ({
            opacity: 0,
            transform: 'translateX(-250px)'
        }));

    api.stop();
    api.start((number,index) => ({
        opacity: 1,
        transform: 'translateX(0px)'
    }))
    const springProps = useSpring({
        opacity: 1,
        delay: 1200,
        transform: 'translateX(0px)',
        from: {
            opacity: 0,
            transform: 'translateX(-250px)'
        } });
    // const springProps2 = useSpring({
    //     opacity: 1,
    //     delay: 2200,
    //     transform: 'translateX(0px)',
    //     from: {
    //         opacity: 0,
    //         transform: 'translateX(-250px)'
    //     } });



    // if (isNextSlide){
    //     springProps2 = useSpring({
    //         opacity: 1,
    //         delay: 2200,
    //         transform: 'translateX(-250px)',
    //         from: {
    //             opacity: 0,
    //             transform: 'translateX(0px)'
    //         } });
    // }

      return(
          <>
          <animated.div style={{...springProps}} className={"text-block absolute w-1/4"} >
            Was working with JavaScript and TypeScript, wide experience in commercial frontend development
          </animated.div>
            <animated.div style={{...styles}} className={"text-block2 absolute w-1/4"} >
                Built a metaverse platform. Simmilar to Zoom but with game-like features. Kind of like GatherTown. Made most of frontend side. Choosed architecture and built app from the ground up.
            </animated.div>
          </>
          );
}