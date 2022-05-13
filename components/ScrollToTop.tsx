import {useEffect, FC, ReactElement, ReactNode} from 'react'
import { useLocation } from 'react-router-dom'

interface ScrollToTopProps{
    children: ReactElement | ReactNode
}

const ScrollToTop: FC<ScrollToTopProps> = ({ children }) => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <>
            {children}
        </>
    )
};

export default ScrollToTop