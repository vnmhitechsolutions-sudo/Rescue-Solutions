import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on every route change
    window.scrollTo(0, 0);
  }, [pathname]); // This effect runs whenever the pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;