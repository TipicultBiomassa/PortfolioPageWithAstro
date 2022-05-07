import React, {useEffect, useState} from 'react';
import './Counter.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import InnerComponent from "./InnerComponent";
import { useTransition, animated,useSpring } from 'react-spring'

import TextLeft from "./TextLeft";
import Mount from "./Background";
export default function Counter({ children, count: initialCount }) {
	// const [scrollProgress, setScrollProgress] = useState(0);
	const [isNextSlide, setNextSlide] = useState(false);
	//setInterval(()=>console.log(scrollProgress),1500);
	// const initialDelay = useRef(true);

	// const [isAnimationOver, setAnim] = useState(false);
	const [styles, api] = useSpring((number,index) => ({ opacity: 1}));
	api.stop();
	if (isNextSlide ) {
		api.start((number,index) => ({to:{ opacity: 0 },config: { duration: 350 }}));
	}
	if (!isNextSlide) {
			api.start((number,index) => ({to:{ opacity: 1  },config: { duration: 350 }}));
	}
	//
	const defaultBack = {background: "radial-gradient(circle at right, rgba(38,15,71,1) 31%, rgba(21,5,45,1) 50%, rgba(9,9,121,1) 72%, rgba(0,212,255,1) 100%)"};
	console.log(isNextSlide)
	// api.stop();

	//setTimeout(()=>setAnim(true),1500)
	return (
		<ParallaxProvider>
			{/*{!isNextSlide ? <></> : <Mount isNextSlide={isNextSlide} />}*/}
			<div className="anotherColor" />

			<animated.div className="secondBody"
				 // style={{background: `radial-gradient(circle at right, rgba(38,15,71,${opacity}) 31%, rgba(21,5,45,${opacity}) 50%, rgba(9,9,121,${opacity}) 72%, rgba(0,212,255,${opacity}) 100%);`}}
				//style={{opacity: scrollProgress > 0.99 ? 0 : 1}}
				style={styles}
			 />

			<div className="dummy">
				<TextLeft isNextSlide={isNextSlide} />
				<InnerComponent setNextSlide={setNextSlide}/>
			</div>


		</ParallaxProvider>
	);
}
