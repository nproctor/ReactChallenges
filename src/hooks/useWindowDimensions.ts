import {useState, useEffect} from 'react';

const useWindowDimensions = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    useEffect( () => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return {width, height}
}

export default useWindowDimensions;