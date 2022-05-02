import {useSpring} from "react-spring";

export default function MainBody() {
    const springProps = useSpring({
        opacity: 1,
        delay: 1200,
        transform: 'translateX(0px)',
        from: {
            opacity: 0,
            transform: 'translateX(-250px)'
        } });

}