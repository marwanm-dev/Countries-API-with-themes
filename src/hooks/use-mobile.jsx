import { useState, useEffect } from 'react';
import { theme } from 'twin.macro';

const useMobileMode = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= theme`screens.mob.max`.replace('px', ''));
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.addEventListener('load', handleResize);
    };
  }, []);

  return isMobile;
};

export default useMobileMode;
