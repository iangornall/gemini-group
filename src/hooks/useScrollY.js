import {useEffect, useState} from 'react';

let useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    let handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return scrollY;
}
export default useScrollY;