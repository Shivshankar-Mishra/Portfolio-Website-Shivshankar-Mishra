import { useEffect, useState } from 'react';

const useInViewport = (ref) => {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const bottomThreshold = viewportHeight * 0.9; // 80% height of the viewport
        const isVisible = top < bottomThreshold && bottom >= 0;
        setInViewport(isVisible);
      };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return inViewport;
};

export default useInViewport;
