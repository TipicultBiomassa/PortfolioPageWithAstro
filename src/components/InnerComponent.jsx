import { useParallax } from 'react-scroll-parallax';
import "./Counter.css";

export default InnerComponent = () => {
    const { ref } = useParallax({ speed: 233 });

    return (
        <div ref={ref} className="my-thing" />
    )
}