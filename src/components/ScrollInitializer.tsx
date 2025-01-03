import {useLocation} from "react-router-dom";
import {useEffect} from "react";


const ScrollInitializer: React.FC = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollInitializer;