import { useState, useEffect } from 'react';

export function useDevicePerformance() {
  const [performance, setPerformance] = useState({
    isMobile: false,
    prefersReducedMotion: false,
    supportsWebGL2: false,
    shouldLoad3D: false,
  });

  useEffect(() => {
    // Check mobile
    const checkMobile = () => window.innerWidth < 768;
    
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const checkMotion = () => motionQuery.matches;

    // Check WebGL2
    const checkWebGL2 = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'));
      } catch (e) {
        return false;
      }
    };

    const updatePerformance = () => {
      const isMobile = checkMobile();
      const prefersReducedMotion = checkMotion();
      const supportsWebGL2 = checkWebGL2();
      
      setPerformance({
        isMobile,
        prefersReducedMotion,
        supportsWebGL2,
        shouldLoad3D: !isMobile && !prefersReducedMotion && supportsWebGL2,
      });
    };

    updatePerformance();

    window.addEventListener('resize', updatePerformance);
    motionQuery.addEventListener('change', updatePerformance);

    return () => {
      window.removeEventListener('resize', updatePerformance);
      motionQuery.removeEventListener('change', updatePerformance);
    };
  }, []);

  return performance;
}
