import React, {useEffect, useState} from 'react';
import './Counter.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import InnerComponent from "./InnerComponent";

export default function Counter({ children, count: initialCount }) {
	return (
		<ParallaxProvider>
			<div className="mainBody">

			<InnerComponent />

			</div>
		</ParallaxProvider>
	);
}
