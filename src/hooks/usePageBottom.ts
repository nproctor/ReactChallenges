import { useState, useEffect } from 'react';

const usePageBottom = () => {
    const [isPageBottom, setIsPageBottom] = useState(true);

    const handleScroll = () => {
        if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight){
            setIsPageBottom(true);
        }
        else{
            setIsPageBottom(false);
        }
    }

    useEffect( () => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        }
    }, []);

    return {isPageBottom};
}


export default usePageBottom;